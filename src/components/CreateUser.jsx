import { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost/api/user/create", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });

    console.log(inputs);
  }

  return (
    <form class="max-w-sm w-fit m-auto" onSubmit={handleSubmit}>
      <h1>Create User</h1>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            type="text"
            className="input"
            name="name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            type="text"
            className="input"
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            Phone
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            type="text"
            className="input"
            name="phone"
            onChange={handleChange}
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-cyan-600 hover:bg-cyan-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
