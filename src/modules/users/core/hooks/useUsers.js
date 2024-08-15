import { useMutation } from "@tanstack/react-query";
import { fetchAllUsers } from "../_request";

// const useFetchAllUsers = () => {
//   const { data } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchAllUsers,
//   });
//   return data;
// };

const useFetchAllUsers = () => {
  const { mutate: getUsersInfo } = useMutation({
    mutationKey: ["users"],
    mutationFn: fetchAllUsers,
  });

  return { getUsersInfo };
};

export { useFetchAllUsers };
