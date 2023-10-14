import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
const LogIN = () => {
  const [user, setUser] = useState(null)
  const { SignIn } = useContext(authContext)
  const navigate = useNavigate()
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
          toast.success('Logged in !');
        }
      })
      .catch(err => {
        console.error(err)
      })
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
                    htmlFor="email"
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
                  <button type='submit'
                    className="w-full py-3 rounded border flex items-center justify-center transition bg-black duration-300 btn   hover:border-purple-800   text-white "
                  >Log In </button>
                </div>

                <div className="relative flex justify-center items-center text-sm">
                  <hr className='h-[1px] w-full' />  <span className="px-2 flex-1"> Or</span><hr className='h-[1px] w-full' />
                </div>
                <div className="mb-6">
                  <button type='submit'
                    className="w-full  py-3 rounded border flex items-center justify-center transition bg-black duration-300 btn   hover:border-purple-800   text-white "
                  >
                    <svg className='' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 48 48">
                      <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <h1>Log in with Google</h1>
                  </button>
                </div>
                <p>Don't have any Account? <Link className='text-purple-700 font-bold' to={'/Register'}> Register</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default LogIN;