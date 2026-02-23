import { fetcher } from "./fetcher";
import type { Candidate } from "../types";

export async function getCandidate(email: string) {
  return fetcher<Candidate>(`/api/candidate/get-by-email?email=${email}`);
}
