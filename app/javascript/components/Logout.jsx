import React from "react";

const Logout = () => {
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const token = document.querySelector('meta[name="csrf-token"]').content;
      const response = await fetch("/api/v1/users/sign_out", {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      console.log("logout successful");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleLogout}>
        <button type="submit" className="btn btn-primary">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
