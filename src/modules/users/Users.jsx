import { useEffect, useState } from "react";
import SearchBar from "../../components/elements/SearchBar";
import Table from "../../components/elements/Table";
import { useFetchAllUsers } from "./core/hooks/useUsers";
import Pagination from "../../components/general/Pagination";

const Users = () => {
  const { getUsersInfo } = useFetchAllUsers();
  const [inputSearch, setInputSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keys, setKeys] = useState([]);

  const itemsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchByName = (e) => {
    e.preventDefault();
    const searchedUsers = users.filter((user) =>
      user?.name?.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setUsers(searchedUsers);
  };

  const getAllUsers = () => {
    getUsersInfo(null, {
      onSuccess: (response) => {
        setTotalPages(Math.ceil(response.length / itemsPerPage));
        const currentData = response.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        setUsers(currentData);
        const keys = response?.length > 0 ? Object.keys(response[0]) : [];
        setKeys(keys);
      },
    });
  };

  useEffect(() => {
    getAllUsers();
  }, [currentPage]);

  return (
    <>
      {users && (
        <div className="flex flex-col">
          <SearchBar
            callback={handleSearchByName}
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
            getAllUsers={getAllUsers}
          />
          <Table data={users} columnsTitle={keys} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

export default Users;
