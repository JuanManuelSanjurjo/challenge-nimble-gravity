import JobPosting from "./card-components/JobPosting";
import type { Candidate, Job } from "../types";
import useJobs from "../hooks/useJobs";
import ErrorComponent from "./status-components/ErrorComponent";
import Loading from "./status-components/Loading";

export default function JobPostingList({
  candidate = null,
}: {
  candidate: Candidate | null;
}) {
  const { jobs, error, loading } = useJobs();

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h2>Job Listings</h2>
      <div className="job-posting-list">
        {jobs.map((job: Job) => (
          <JobPosting key={job.id} job={job} candidate={candidate} />
        ))}
      </div>
    </>
  );
}
