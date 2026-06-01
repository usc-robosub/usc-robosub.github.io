import { teamMembers as fallbackTeamMembers } from "@/lib/constants";
import { getTeamMembers, type TeamMember } from "@/lib/notion";
import TeamPageClient from "./team-page-client";

function getFallbackMembers(): TeamMember[] {
  return fallbackTeamMembers.map((member) => ({
    id: member.id,
    name: member.name,
    team: "",
    roles: [member.role],
    displayRole: member.role,
    extraRoles: [],
    isEboard: true,
    major: member.major,
    year: member.year,
    favoriteFish: "",
    email: member.email,
    linkedin: member.linkedin,
    github: "",
    currentPlacement: "",
    image: member.image,
  }));
}

export default async function TeamPage() {
  let members: TeamMember[] = [];

  try {
    members = await getTeamMembers();
  } catch (error) {
    console.error("Failed to load team members from Notion:", error);
  }

  if (members.length === 0) {
    members = getFallbackMembers();
  }

  return <TeamPageClient members={members} />;
}
