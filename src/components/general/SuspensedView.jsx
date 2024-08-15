import { Suspense } from "react";
import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const SuspensedView = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default SuspensedView;
