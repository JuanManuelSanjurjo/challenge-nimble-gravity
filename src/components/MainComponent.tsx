import { useState } from "react";
import JobPostingList from "./JobPostingList";
import MyDataForm from "./MyDataForm";
import MyDataCard from "./card-components/MyDataCard";
import ErrorComponent from "./status-components/ErrorComponent";
import Loading from "./status-components/Loading";
import type { Candidate } from "../types";

export default function MainComponent() {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="main-container">
      <h1>Nimble Gravity Challenge</h1>
      <div
        style={{
          minWidth: "100%",
        }}
      >
        <MyDataForm
          setCandidate={setCandidate}
          setError={setError}
          setLoading={setLoading}
        />
        {loading && <Loading />}
        {error && <ErrorComponent error={error} />}
        {candidate && <MyDataCard data={candidate} />}
      </div>
      <JobPostingList candidate={candidate} />
    </div>
  );
}
