import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LogIN = () => {

  const {user, SignIn,googleSignIn,githubLogin } = useContext(authContext)
  const navigate = useNavigate()
const [error,setError]=useState(false);


const[log,setlog]=useState(null)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
  
      const password = e.target.password.value
    console.log(email, password);
    SignIn(email, password)
      .then(res => {
        console.log(res);
        console.log(location);
        navigate(location?.state ? location.state : '/')
        setUser(res)
       
        if (user) {
          toast.success( 'User logged in Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      })
      .catch(err => {
        console.error(err);
        setError(err)
        if (error) {
          toast.error( error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      })
  }
  const GithubLogin =()=>{
    githubLogin()
    .then(res => {
      console.log(res.user);
     
      toast.success('User Logged in SuccessFully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
    .catch(err=>{console.error(err)})
  }
  const handleGoogleSignIn =()=>{
    googleSignIn()   
  .then(res=>{   setlog(res)
  })
  .catch(error=>{setError(error)})
  if(log){
    toast.success( 'User logged in Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setlog(null)
  }
  
  }
  return (
    <div >
      <div className="flex items-center justify-center p-6 ">
        <div className="w-full max-w-md mx-auto">
          <div className="text-3xl font-semibold text-center text-[#BE006B]  mb-6">
            Login Here
          </div>
          <div className="bg-[#BE006B] rounded-lg shadow-xl">
            <div className="p-8">
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <label
                  
                    className="block text-black text-lg font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"

                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label

                    className="block text-black text-lg  font-semibold  mb-2"
                  >
                    Password :
                  </label>
                  <input
                    type="password"
                    name="password"

                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-6">
                  <button type='submit' onClick={handleLogin}
                    className="w-full py-3 rounded border flex items-center justify-center transition bg-black duration-300 btn   hover:border-purple-800   text-white "
                  >Log In </button>
                </div>

                <div className="relative flex justify-center items-center text-sm">
                  <hr className='h-[1px] w-full' />  <span className="px-2 flex-1"> Or</span><hr className='h-[1px] w-full' />
                </div>
                <div className="mb-6">
                  <button type='submit' onClick={handleGoogleSignIn}
                    className="w-full  py-3 rounded border flex items-center justify-center transition bg-black duration-300 btn   hover:border-purple-800   text-white "
                  >
                    <svg className='' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 48 48">
                      <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <h1>Log in with Google</h1>
                  </button>
                </div>
                <div className="mb-6">
                    <button type='submit' onClick={GithubLogin}
                      className="w-full  py-3 rounded border flex items-center justify-center transition bg-black duration-300 btn   hover:border-purple-800   text-white "
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100">
<path fill="#6693c1" d="M71,82H29c-6.075,0-11-4.925-11-11V29c0-6.075,4.925-11,11-11h42c6.075,0,11,4.925,11,11v42	C82,77.075,77.075,82,71,82z"></path><path fill="#eeecd9" d="M69.933,49.039c0-3.321-1.305-6.334-3.419-8.573c0.396-2.203,0.351-5.301-0.538-7.966	c-4.475,0-8.114,3.447-8.702,4H44.47c-0.589-0.552-4.019-4-8.494-4c-0.8,2.401-1.087,5.233-0.846,7.295	c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459h2.447c-2.003,0.917-3.635,2.756-4,5	c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46c1.23,1.23,1.23,1.23,2.46,3.69	c1.012,2.027,3.64,3.699,8.64,3.699v6h17v-8.845c0-2.718-1.681-5.092-4-6.155h2.449C64.334,61.5,69.933,55.947,69.933,49.039z"></path><path fill="#1f212b" d="M58.976,77c-0.276,0-0.5-0.224-0.5-0.5v-8.845c0-2.431-1.456-4.668-3.708-5.701	c-0.214-0.098-0.331-0.332-0.28-0.561C54.538,61.164,54.741,61,54.976,61h2.449c6.621,0,12.008-5.366,12.008-11.961	c0-3.064-1.166-5.987-3.282-8.229c-0.109-0.115-0.157-0.275-0.129-0.432c0.333-1.854,0.39-4.725-0.409-7.37	c-3.682,0.162-6.795,2.725-7.987,3.848C57.533,36.943,57.401,37,57.274,37H44.469c-0.127,0-0.249-0.048-0.342-0.135l-0.092-0.087	c-3.078-2.927-5.829-3.686-7.697-3.77c-0.662,2.162-0.941,4.762-0.712,6.729c0.019,0.16-0.042,0.319-0.161,0.428	c-2.506,2.275-3.943,5.51-3.943,8.875c0,6.595,5.387,11.96,12.007,11.96h2.447c0.235,0,0.438,0.164,0.488,0.394	c0.051,0.229-0.066,0.463-0.28,0.561c-1.974,0.904-3.397,2.676-3.715,4.625C42.43,66.822,42.221,67,41.976,67	c-2.333,0-5.191-0.271-6.598-2.38c-2.311-3.467-3.28-3.467-4.403-3.467c-0.14,0-0.385,0.023-0.448,0.178	c-0.086,0.206,0.031,0.756,0.702,1.428c1.287,1.287,1.311,1.335,2.554,3.82C34.885,68.785,37.795,70,41.976,70	c0.276,0,0.5,0.224,0.5,0.5v6c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-5.505c-5.797-0.131-7.866-2.525-8.588-3.969	c-1.194-2.387-1.194-2.387-2.366-3.56c-0.869-0.869-1.213-1.81-0.919-2.518c0.209-0.505,0.709-0.795,1.372-0.795	c1.588,0,2.81,0.272,5.235,3.912c1.069,1.604,3.359,1.9,5.356,1.932c0.362-1.545,1.309-2.965,2.63-3.997h-0.668	c-7.172,0-13.007-5.813-13.007-12.959c0-3.562,1.485-6.988,4.084-9.442c-0.209-2.203,0.128-4.956,0.896-7.257	C35.57,32.138,35.761,32,35.976,32c2.036,0,5.192,0.696,8.692,4h12.409c1.427-1.311,4.847-4,8.898-4	c0.215,0,0.406,0.138,0.475,0.342c0.935,2.802,0.928,5.901,0.598,7.965c2.185,2.404,3.385,5.495,3.385,8.732	C70.433,56.186,64.598,62,57.425,62h-0.693c1.707,1.368,2.744,3.442,2.744,5.655V76.5C59.476,76.776,59.252,77,58.976,77z"></path><path fill="#1f212b" d="M65.5,77h-31C28.159,77,23,71.841,23,65.5v-31C23,28.159,28.159,23,34.5,23h31	c0.276,0,0.5,0.224,0.5,0.5S65.776,24,65.5,24h-31C28.71,24,24,28.71,24,34.5v31C24,71.29,28.71,76,34.5,76h31	C71.29,76,76,71.29,76,65.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15C77,71.841,71.841,77,65.5,77z"></path><path fill="#1f212b" d="M76.5,48.5c-0.276,0-0.5-0.224-0.5-0.5v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V48	C77,48.276,76.776,48.5,76.5,48.5z"></path><path fill="#1f212b" d="M76.5,38.5c-0.276,0-0.5-0.224-0.5-0.5v-3.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V38	C77,38.276,76.776,38.5,76.5,38.5z"></path><path fill="#1f212b" d="M71,83H29c-6.617,0-12-5.383-12-12V29c0-6.617,5.383-12,12-12h42c6.617,0,12,5.383,12,12v42	C83,77.617,77.617,83,71,83z M29,19c-5.514,0-10,4.486-10,10v42c0,5.514,4.486,10,10,10h42c5.514,0,10-4.486,10-10V29	c0-5.514-4.486-10-10-10H29z"></path>
</svg>
                      <h1>Register with Github</h1>
                    </button>
                  </div>
                <p>Don't have any Account? <Link className='text-purple-700 font-bold' to={'/Register'}> Register</Link></p>
              </form>
              <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
            </div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default LogIN;