import { useMutation } from "@tanstack/react-query";
import { fetchAllUsers } from "../_request";

const useFetchAllUsers = () => {
  const { mutate: getUsersInfo } = useMutation({
    mutationKey: ["users"],
    mutationFn: fetchAllUsers,
  });

  return { getUsersInfo };
};

export { useFetchAllUsers };
