import { useLocation, useNavigate } from "react-router-dom";
import TreeNode from "../../components/general/TreeNode";

const User = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;

  return (
    <div className="text-2xl">
      <div className="text-4xl font-bold text-center my-7 border-b-2 mx-8">
        <svg
          className="w-6 h-6 text-gray-800 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
          onClick={() => navigate(-1)}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        <span>User Details</span>
      </div>
      <TreeNode node={userData} />
    </div>
  );
};

export default User;
