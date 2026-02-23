import type { Candidate } from "../../types";
import SuccessComponent from "../status-components/SuccessComponent";

export default function MyDataCard({ data }: { data: Candidate | null }) {
  return (
    <SuccessComponent>
      <p>
        <span>UUID: </span> {data?.uuid}
      </p>
      <p>
        <span>Candidate ID:</span> {data?.candidateId}
      </p>
      <p>
        <span>Application ID:</span> {data?.applicationId}
      </p>
      <p>
        <span>Email:</span> {data?.email}
      </p>
    </SuccessComponent>
  );
}
