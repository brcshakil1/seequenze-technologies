import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProject = (id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: project,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/projects/${id}`);
      return res.data;
    },
  });

  return { project, isPending, refetch };
};

export default useProject;
