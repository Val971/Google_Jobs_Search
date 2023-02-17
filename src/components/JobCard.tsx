import { Tag } from "antd";
import { BiTimeFive, BiWorld } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Job } from "./JobsList";

interface JobsCradProps {
  job: Job;
}
export const JobCard = ({ job }: JobsCradProps) => {
  const navigate = useNavigate();
  const onSelect = () => {
    navigate(`/jobView/${job.id}`);
  };
  return (
    <div className="cardJob flex flex-col gap-3 bg-white p-3 rounded-[4px]">
      <div className="flex flex-row gap-4">
        <img
          src={`${job.img}`}
          className="flex bg-no-repeat bg-cover bg-center rounded-[4px] w-[90px] h-[90px]"
          alt=""
        />
        <div onClick={() => onSelect()} className="flex flex-col gap-1">
          <p className="font-bold text-xs text-dark-blue">{job.company}</p>
          <h3 className="text-md font-normal text-dark-blue">{job.title}</h3>
          <Tag className="w-fit" color="geekblue">
            {job.type}
          </Tag>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-3">
        <div className="text-xs font-medium text-gray flex flex-row gap-1">
          {" "}
          <BiWorld />
          <p>{job.location}</p>
        </div>
        <div className="text-xs font-medium text-gray flex flex-row gap-1">
          {" "}
          <BiTimeFive />
          <p className="text-xs font-medium text-gray">{job.posted_date}</p>
        </div>
      </div>
    </div>
  );
};
