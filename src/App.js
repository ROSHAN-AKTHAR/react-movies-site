import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <h1>Latest Movies</h1>

      <p>ALL NEW MOVIES</p>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.1tamilmv.durban/"
      >
        <button>Click Me</button>
      </a>

      <p>Please CLICK TO GET REDIRECTED</p>

      <form>
        <h2>User Details</h2>

        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Age</label>
        <input type="number" placeholder="Enter your age" />

        <label>Gender</label>
        <select>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Movie Genre</label>
        <select>
          <option>Horror</option>
          <option>Thriller</option>
          <option>Drama</option>
          <option>Romantic</option>
          <option>Psychological</option>
          <option>Comedy</option>
        </select>

        <label>Year</label>
        <input type="number" placeholder="Enter year" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}