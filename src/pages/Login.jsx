import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const { githubSignIn, googleSignIn, logIn } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login user
    logIn(email, password)
      .then(() => {
        e.target.reset();
        toast.success("You've Successfully Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  // github sign in
  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        toast.success("Github Signed In Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Signed In Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Helmet>
        <title>Bridely | Login</title>
      </Helmet>
      <div className="hero min-h-[calc(100vh-70px)] bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full lg:w-96 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-2xl md:text-4xl text-center p-4 font-bold">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label inline py-6">
                  Don&apos;t have an account? Register
                  <Link
                    to={"/register"}
                    className="ml-2 link link-hover text text-blue-700"
                  >
                    here...
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-neutral">
                  Login
                </button>
              </div>
            </form>
            <div className="flex flex-col md:flex-row gap-4 mx-auto mb-8 p-2 text-lg w-fit">
              {/* github sign in */}
              <button
                onClick={handleGithubSignIn}
                className="border p-2 rounded-lg hover:btn-neutral"
              >
                <AiFillGithub className="inline" /> Github SignIn
              </button>
              {/* google sign in */}
              <button
                onClick={handleGoogleSignIn}
                className="border p-2 rounded-lg hover:btn-neutral"
              >
                <AiFillGoogleCircle className="inline" /> Google SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
