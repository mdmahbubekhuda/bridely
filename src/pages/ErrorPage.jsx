import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops! Page Not Found</h1>
          <p className="py-6">{error.statusText || error.message}</p>
          <Link to={"/"}>
            <button className="btn btn-neutral">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
