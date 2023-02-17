import { JobCard } from "./JobCard";

interface JobsListProps {
  list: Job[];
}
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  posted_date: string;
  img: string;
  salary_range: string;
  experience: string;
  requirements: [];
  skills: [];
}

export const JobsList = ({ list }: JobsListProps) => {
  return (
    <div className="flex flex-col gap-5 md:w-full">
      {list.length > 0 ? (
        list.map((job: Job) => <JobCard job={job} key={job.id} />)
      ) : (
        <></>
      )}
    </div>
  );
};
