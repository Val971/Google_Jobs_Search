import { Tag } from "antd";
import { useState } from "react";
import { BiTimeFive, BiWorld } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import jobLis from "../utils/jobs.json";

export default function JobView() {
  const { id } = useParams();
  const getJobById = (id: string) => {
    return jobLis.find((job) => job.id === +id);
  };
  const navigate = useNavigate();
  const [job, setJob] = useState(getJobById(id!));

  return (
    <div>
      <div className=" text-light-blue flex flex-row gap-4 items-center">
        <BsArrowLeft />
        <p className="cursor-pointer" onClick={() => navigate(-1)}>
          Back to search
        </p>
      </div>
      <p className="font-bold text-sm text-gray mt-8 mb-4">HOw to Apply</p>
      <p className="text-[14px]">
        Please email a copy of your resume and online portfolio to{" "}
        <span className="text-light-blue">wes@kasisto.com</span> & CC{" "}
        <span className="text-light-blue">eric@kasisto.com</span>
      </p>
      {job && (
        <>
          <p className="text-dark-blue font-bold text-2xl mt-9">{job.title}</p>
          <Tag className="w-fit" color="geekblue">
            {job.type}
          </Tag>
          <div className="text-xs font-medium text-gray flex flex-row gap-1 mt-3">
            {" "}
            <BiTimeFive />
            <p className="text-xs font-medium text-gray">{job.posted_date}</p>
          </div>
          <div className="flex flex-row gap-4 mt-10">
            <img
              src={`${job.img}`}
              className="flex bg-no-repeat bg-cover bg-center rounded-[4px] w-[42px] h-[42px]"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-lg text-dark-blue mb-2">
                {job.company}
              </p>
              <div className="text-xs font-medium text-gray flex flex-row gap-1">
                {" "}
                <BiWorld />
                <p>{job.location}</p>
              </div>
            </div>
          </div>
          <p className="font-medium text-md text-dark-blue mb-2 mt-8">
            {job.description}
          </p>
        </>
      )}
    </div>
  );
}
