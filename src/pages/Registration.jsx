import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Registration = () => {
  const { createUser, userProfile } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{6,}$/.test(password))
      return toast.error(
        ` The password cannot be:
        - less than 6 characters,
        - must have a capital letter,
        - must contain a special character`
      );

    // create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // update user info
        userProfile(user, name, photo);

        toast.success("Registration & Logged In Successfully!");
        // reset input field
        e.target.reset();
        // navigate to home
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <>
      <Helmet>
        <title>Bridely | Register</title>
      </Helmet>
      <div className="hero min-h-[calc(100vh-70px)] bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full lg:w-96 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-2xl md:text-4xl text-center p-4 font-bold">
                Registration
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
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
                <label className="label py-6 inline">
                  Already Registered? Login
                  <Link
                    to={"/login"}
                    className="link link-hover text text-blue-700 ml-2"
                  >
                    here...
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-neutral">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
