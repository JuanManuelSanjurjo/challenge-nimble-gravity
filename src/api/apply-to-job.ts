import { fetcher } from "./fetcher";
import type { ApplyPayload } from "../types";

export async function applyToJob(payload: ApplyPayload) {
  return fetcher(`/api/candidate/apply-to-job`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
