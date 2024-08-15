/* eslint-disable react/prop-types */
const TreeNode = ({ node }) => {
  return (
    <div className="ml-2 mt-2 border-gray-300 pl-4">
      <div className="ml-2">
        <div className="font-bold">{node?.name}</div>
        <div className="text-sm text-gray-600">{node?.username}</div>
        <div className="text-sm text-gray-600">{node?.email}</div>
      </div>

      {node?.address && (
        <div className="ml-2 mt-2">
          <div className="font-semibold">Address:</div>
          <div className="text-sm text-gray-600">
            {node?.address.street}, {node?.address.suite}, {node?.address.city},{" "}
            {node?.address.zipcode}
          </div>
          <div className="text-sm text-gray-600">
            Geo: {node?.address?.geo?.lat}, {node?.address?.geo?.lng}
          </div>
        </div>
      )}
      {node?.company && (
        <div className="ml-2 mt-2">
          <div className="font-semibold">Company:</div>
          <div className="text-sm text-gray-600">{node?.company?.name}</div>
          <div className="text-sm text-gray-600">
            {node?.company?.catchPhrase}
          </div>
          <div className="text-sm text-gray-600">{node?.company?.bs}</div>
        </div>
      )}
    </div>
  );
};

export default TreeNode;
