import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../store/apis/auth";
import {
  setAccessToken,
  setisAuthenticated,
} from "../store/slices/auth-slices";
import { useCookies } from "react-cookie";

function Login() {
  const [logRequest, loginData] = useLoginMutation();
  const [login, setLogin] = useState({
    email: "api@div.edu.az",
    password: "ucvlqcq8",
  });

  // console.log(loginData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevlogin) => ({
      ...prevlogin,
      [name]: value,
    }));
    // console.log(login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logRequest(login);
  };

  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies(["access_token"]);

  useEffect(() => {
    if (loginData.isSuccess && loginData.data && loginData.data.access_token) {
      dispatch(setAccessToken(loginData.data.access_token));
      dispatch(setisAuthenticated(loginData.isSuccess));

      const expirationDate = new Date(
        Date.now() + 10 * 365 * 24 * 60 * 60 * 1000
      );

      setCookie("access_token", loginData.data.access_token, {
        expires: expirationDate,
        path: "/",
        secure: true,
        sameSite: "strict",
      });
      // console.log(document.cookie);
    }
  }, [loginData.isSuccess, loginData.data, dispatch]);
  //useEffect(() => console.log(loginData), [loginData])
  //const handleSubmit = async () => {
  //  await user(login)
  //  //console.log(login);
  //}

  //const dispatch = useDispatch()
  //const { data: serProfile, isLoading: profileLoading } = useQuery(
  //  authApi.endpoints.getUserProfile
  //);

  //const [loginUser, { isLoading: error }] = useMutation(authApi.endpoints.login)

  //const handleLogin = async (credentials) => {
  //  try {
  //    const result = await loginUser(credentials).unwrap();

  //  } catch (error) {
  //    console.log(error);
  //  }
  //};

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://div.edu.az/img/logo-1.png?=1"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={login.email}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  {/*<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>*/}
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={login.password}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
