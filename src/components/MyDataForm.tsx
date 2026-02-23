import { useState } from "react";
import type { Candidate } from "../types";
import { getCandidate } from "../api/get-candidate";

export type MyDataFormProps = {
  setCandidate: React.Dispatch<React.SetStateAction<Candidate | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function MyDataForm({
  setCandidate,
  setError,
  setLoading,
}: MyDataFormProps) {
  const [email, setEmail] = useState("");

  function handleGetInfo() {
    setCandidate(null);
    setLoading(true);
    setError(null);
    getCandidate(email)
      .then((data) => setCandidate(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <h2>Get your data first!</h2>
      <div className="flex bordered-box">
        <div className="flex">
          <h3>Email: </h3>
          <input
            placeholder="Enter your email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={handleGetInfo}>Get my data</button>
      </div>
    </>
  );
}
