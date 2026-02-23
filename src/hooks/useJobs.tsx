import { useState, useEffect } from "react";
import type { Jobs } from "../types";
import { getJobs } from "../api/get-jobs";

export default function useJobs() {
  const [jobs, setJobs] = useState<Jobs | []>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { jobs, error, loading };
}
