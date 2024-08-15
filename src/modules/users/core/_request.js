import axios from "axios";

const fetchAllUsers = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

export { fetchAllUsers };
