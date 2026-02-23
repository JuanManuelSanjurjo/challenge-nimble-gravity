import type { Job, Candidate } from "../../types";
import { applyToJob } from "../../api/apply-to-job";
import { useEffect, useState } from "react";

export type JobPostingProps = {
  job: Job;
  candidate: Candidate | null;
};

export default function JobPosting({ job, candidate }: JobPostingProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleApplyToJob(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!candidate) return;

    try {
      setLoading(true);
      setError(null);
      setStatus(null);
      await applyToJob({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        jobId: job.id,
        repoUrl: url,
      });
      setStatus("Application Submitted!");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!error) return;
    const timeout = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <>
      <form className={`job-posting bordered-box `} onSubmit={handleApplyToJob}>
        {error && <p className=" job-title error">{error?.message}</p>}
        {loading && <p className="job-title ">Applying...</p>}
        {status && <p className="job-title success">{status}</p>}
        {!error && !loading && !status && (
          <p className={error ? "job-title error" : "job-title"}>{job.title}</p>
        )}

        <div style={{ display: "flex", gap: "0rem" }}>
          <input
            type="url"
            name="github"
            id="github-url"
            placeholder="Github URL"
            required
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit" disabled={!candidate || !!error || !url}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
