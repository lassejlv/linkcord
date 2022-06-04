import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="display-flex text-center justify-center ai-center bg-gray-dark-8 text-white h-100">
        <div class="mb-2">
          <h1 className="text-gradient font-xxl mb-1">Linkcord</h1>
          <p class="text-gray-light-5 ff-monospace font-md ts">
            A simple, fast, and free link shortener for your application.
          </p>

          <div class="mt-2">
            <Link to="/docs" className="btn btn-gradient bs">
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
