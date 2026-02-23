import { fetcher } from "./fetcher";
import type { Jobs } from "../types";

export async function getJobs() {
  return fetcher<Jobs>(`/api/jobs/get-list`);
}
