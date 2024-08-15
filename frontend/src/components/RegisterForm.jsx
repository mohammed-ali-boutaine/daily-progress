/* eslint-disable react/prop-types */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function InputLabel({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm capitalize font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={label}
        type="text"
        placeholder={label}
      />
    </div>
  );
}

function RegisterForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
        
        const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);

      //   await register(formData).unwrap();
      toast.success("Registration successful");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }

  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-xs">
          <form
            className="bg-gray-100 shadow-sm rounded px-3 pt-6 pb-8 mb-4"
            onSubmit={submitHandler}
          >
            <InputLabel
              label="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputLabel
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              {/* login */}
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/login"
              >
                Log In
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;{new Date().getFullYear()} Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" draggable />
    </>
  );
}

export default RegisterForm;
