import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectCard from "../../../components/shared/ProjectCard";
import SectionTitle from "./../../../components/ui/SectionTitle";

const SampleProjects = () => {
  const { data: sampleProjects, isPending } = useQuery({
    queryKey: ["sample-projects"],
    queryFn: async () => {
      const res = await axios.get(
        "https://picsum.photos/v2/list?page=1&limit=6"
      );
      return res.data;
    },
  });

  console.log(sampleProjects);

  return (
    <div className="mx-4 pl-0 md:pl-10 lg:pl-[52px]">
      <div>
        <SectionTitle title="Sample Projects" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 py-7">
        {sampleProjects?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default SampleProjects;
