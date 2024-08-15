// import { useEffect } from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/elements/SearchBar";
import Table from "../../components/elements/Table";
import { useFetchAllUsers } from "./core/hooks/useUsers";
import Pagination from "../../components/general/Pagination";
// import Modal from "../../components/elements/Modal";

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
      user.name.includes(inputSearch)
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
    <div className="flex flex-col">
      <SearchBar
        callback={handleSearchByName}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <Table data={users} columnsTitle={keys} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {/* <Modal/> */}
    </div>
  );
};

export default Users;
