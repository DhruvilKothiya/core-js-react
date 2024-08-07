import React, { useState } from "react";

export default function FormData() {
  const [details, setDetails] = useState({
    username1: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails  ((preData) => ({
        ...preData,
        [name]: value,
      }));
    };
    

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username1"
            value={details.username1}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={details.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
