import { Empty } from "antd";
import { useEffect, useState } from "react";
import { Job, JobsList } from "../components/JobsList";
import { SearchBar } from "../components/SearchBar";
import { SideBar } from "../components/SideBar";
import data from "../utils/jobs.json";

export default function Home() {
  const [jobs, setJobs] = useState([] as any);
  const [querry, setQuerry] = useState("");
  const [filterByJobType, setFilterByJobType] = useState({
    fullTime: false,
    contract: false,
  } as any);
  const [filterByCity, setFilterByCity] = useState(null as any);

  const handleFilterByJobType = (value: string) => {
    setFilterByJobType((prev: any) => {
      return { ...prev, [value]: !prev[value] };
    });
  };
  const handleInputLocation = () => {};

  useEffect(() => {
    setJobs(data);
  }, [jobs]);

  const search = (): Job[] => {
    const checkedJobType = Object.entries(filterByJobType)
      .filter((type) => type[1])
      .map((type) => type[0]);

    if (querry === "" && !filterByCity && checkedJobType.length === 0) {
      return jobs;
    }

    const filterByType: Job[] = jobs.filter((job: Job) =>
      checkedJobType.includes(job.type)
    );
    const filterByLocation: Job[] = jobs.filter((job: Job) =>
      job.location.includes(filterByCity)
    );
    const filterByText: Job[] = jobs.filter(
      (job: Job) => querry !== "" && job.title.includes(querry)
    );

    return Array.from(
      new Set(filterByType.concat(filterByLocation).concat(filterByText))
    );
  };

  return (
    <>
      <SearchBar handleSearch={(filter) => setQuerry(filter)} />
      <div className="flex flex-col mt-7 md:flex-row md:gap-8 ">
        <SideBar
          onSearchLocation={() => handleInputLocation}
          onChangeJobType={(e) => handleFilterByJobType(e)}
          onChangeRadioLocation={(value) => setFilterByCity(value)}
        />
        {search().length > 0 ? <JobsList list={search()} /> : <Empty />}
      </div>
    </>
  );
}
