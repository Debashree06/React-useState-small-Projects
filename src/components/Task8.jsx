import React, { useState } from "react";

function Task8() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const validateAll = () => {
    const newErrors = {};
    const { name, email, phone, password, confirmPassword } = data;

    if (name.length < 3) {
      newErrors.name = "Name at least 3 characters.";
    }
    if (!email || !email.includes("@")) {
      newErrors.email = "Email is required and contain '@'.";
    }
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      newErrors.password =
        "Password must be at least 6 characters long and include uppercase, lowercase, number.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("Form data submitted:", data);
    }
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">NAME:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">EMAIL:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone">PHONE:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span style={{ color: "red" }}>{errors.phone}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">PASSWORD:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="confirmPassword">CON-PASSWORD:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                )}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="SUBMIT" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Task8;
