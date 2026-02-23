export type Job = {
  id: string;
  title: string;
};

export type Jobs = Job[];

export type Candidate = {
  uuid: string;
  candidateId: string;
  applicationId: string;
  email: string;
};

export type ApplyPayload = {
  uuid: string;
  candidateId: string;
  applicationId: string;
  jobId: string;
  repoUrl: string;
};
