import { getTeamMembers } from "@/lib/notion";
import TeamPageClient from "./team-page-client";

export default async function TeamPage() {
  const members = await getTeamMembers();
  return <TeamPageClient members={members} />;
}