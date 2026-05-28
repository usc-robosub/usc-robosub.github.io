import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID!;

export type TeamMember = {
  id: string;
  name: string;
  team: string;
  roles: string[];
  displayRole: string;
  extraRoles: string[];
  isEboard: boolean;
  major?: string;
  year?: string;
  favoriteFish?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  currentPlacement?: string;
  image?: string;
};

function getText(property: any): string {
  if (!property) return "";

  if (property.title?.length) {
    return property.title.map((item: any) => item.plain_text).join("").trim();
  }

  if (property.rich_text?.length) {
    return property.rich_text.map((item: any) => item.plain_text).join("").trim();
  }

  if (property.select?.name) {
    return property.select.name;
  }

  return "";
}

function getMultiSelect(property: any): string[] {
  if (!property?.multi_select?.length) return [];
  return property.multi_select
    .map((item: any) => item.name?.trim())
    .filter(Boolean);
}

function getUrl(property: any): string {
  return property?.url ?? "";
}

function getEmail(property: any): string {
  return property?.email ?? "";
}

const leadershipRoles = new Set([
  "president",
  "vice president",
  "treasurer",
  "social chair",
  "secretary",
]);

function normalizeTeam(team: string): string {
  const trimmed = team.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

function formatTeamLead(team: string): string {
  return `${normalizeTeam(team)} Lead`;
}

function dedupeRoles(roles: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const role of roles) {
    const trimmed = role.trim();
    const key = trimmed.toLowerCase();
    if (!trimmed || seen.has(key)) continue;
    seen.add(key);
    result.push(trimmed);
  }

  return result;
}

function getRolePriority(role: string): number {
  const lower = role.trim().toLowerCase();

  if (lower === "president") return 1;
  if (lower === "vice president") return 2;
  if (lower === "treasurer") return 3;
  if (lower === "social chair") return 4;
  if (lower === "secretary") return 5;
  if (lower.endsWith(" lead")) return 6; // Electrical Lead, Software Lead, Mechanical Lead
  if (lower === "project lead") return 7;
  if (lower === "engineer") return 8;

  return 99;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const response = await notion.dataSources.query({
    data_source_id: DATA_SOURCE_ID,
  });

  return response.results.map((page: any) => {
    const props = page.properties;

    const team = getText(props.Team);
    const rawRoles = getMultiSelect(props.Role);
    const normalizedRoles = rawRoles.map((role) => role.trim());
    const lowerRoles = normalizedRoles.map((role) => role.toLowerCase());

    const leadershipRole =
      normalizedRoles.find((role) => leadershipRoles.has(role.toLowerCase())) ?? "";

    const hasTeamLead = lowerRoles.includes("team lead");

    const renderedRoles = dedupeRoles(
      normalizedRoles.map((role) => {
        if (role.toLowerCase() === "team lead" && team) {
          return formatTeamLead(team);
        }
        return role;
      })
    );

    const isEboard = Boolean(leadershipRole) || hasTeamLead;

    const visibleRoles = renderedRoles.filter((role) => {
      const lower = role.toLowerCase();

      if (isEboard && lower === "engineer") return false;
      return true;
    });

    const sortedRoles = [...visibleRoles].sort(
      (a, b) => getRolePriority(a) - getRolePriority(b)
    );

    const displayRole = sortedRoles[0] ?? "";
    const extraRoles = sortedRoles.slice(1);

    return {
      id: page.id,
      name: getText(props.Name),
      team,
      roles: normalizedRoles,
      displayRole,
      extraRoles,
      isEboard,
      major: getText(props.Major),
      year: getText(props.Year),
      favoriteFish: getText(props["Favorite Fish"]),
      email: getEmail(props["Contact Email"]),
      linkedin: getUrl(props["Contact LinkedIn"]),
      github: getUrl(props["Contact GitHub"]),
      currentPlacement: getText(props["(Alumni Only) Current Placement"]),
      image:
        props.Photo?.files?.[0]?.file?.url ??
        props.Photo?.files?.[0]?.external?.url ??
        "",
    };
  });
}