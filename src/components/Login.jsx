import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const{signInUser,signInWithGoogle,signInWithGitHub} = useContext(AuthContext);
  const navigate = useNavigate();



  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email,password)
    .then(result => {
      console.log(result.user);
      e.target.reset();
      navigate('/');
    })
    .catch(error => console.error(error));
  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error);
    })
  }
  const handleGitHubSignIn = () =>{
    signInWithGitHub()
    .then(result =>{
      console.log(result.user);
    })

    .catch(error =>{
      console.error(error)
    })
  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email" // Add name attribute
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>
              New to login?{' '}
              <Link to="/register">
                <button className="btn btn-success">Register</button>
              </Link>
              <p><button onClick={handleGoogleSignIn} className="btn btn-success">Google</button></p>
              <p><button onClick={handleGitHubSignIn} className="btn btn-outline btn-warning">Github</button></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;