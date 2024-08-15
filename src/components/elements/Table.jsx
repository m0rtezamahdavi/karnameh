import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Table = ({ data: users = [], columnsTitle = [] }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* {users && users.length>0 ?} */}
      <div className="overflow-x-auto rounded-md mx-2">
        <table className="min-w-full bg-white">
          <thead className="bg-slate-100">
            <tr>
              {columnsTitle &&
                columnsTitle.map((key, index) => (
                  <th key={index} className="py-2 px-4 border-b">
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {users &&
              users.map((user, index) => (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-slate-50"
                  onClick={() => navigate("/user", { state: user })}
                >
                  <td className="py-2 px-4 border-b">{user?.id}</td>
                  <td className="py-2 px-4 border-b">{user?.name}</td>
                  <td className="py-2 px-4 border-b">{user?.username}</td>
                  <td className="py-2 px-4 border-b">{user?.email}</td>
                  <td className="py-2 px-4 border-b">
                    {user?.address["street"]}
                  </td>
                  <td className="py-2 px-4 border-b">{user?.phone}</td>
                  <td className="py-2 px-4 border-b">{user?.website}</td>
                  <td className="py-2 px-4 border-b">
                    {user?.company["name"]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
