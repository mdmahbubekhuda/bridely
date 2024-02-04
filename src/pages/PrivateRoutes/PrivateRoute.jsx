import PropTypes from "prop-types";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) return <span className="loading loading-ring loading-lg"></span>;
  if (user) return children;

  return <Navigate to={"/login"} state={location.pathname} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
