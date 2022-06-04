import React from "react";

function Docs() {
  let baseUrl = "https://i.linkcord.ml";

  let endpoints = [
    {
      id: 1,
      name: "Shorten a link",
      description: "Shorten your original link and get a short link",
      url: "/api/create",
      method: "POST",
      query: {
        url: "The original link to shorten",
      },
    },

    {
      id: 2,
      name: "Check a link",
      description: "Check if a link is valid and get the original link",
      url: "/api/check",
      method: "POST",
      query: {
        url: "The shortened link id to check",
      },
    },
  ];

  return (
    <>
      <div className="pt-5 display-flex text-center justify-center bg-gray-dark-8 text-white h-100">
        <div>
          <h1>Its pretty simple to use our API</h1>
          <p className="text-gray-light-5 ff-monospace font-md ts">
            There is only to endpoints you can use.
          </p>

          <div className="mt-2">
            <p className="text-white ff-monospace font-md ts mb-2">
              <code>{baseUrl}</code>
            </p>
            {endpoints.map((endpoint) => (
              <div className="mb-2">
                <h2 className="text-gradient font-md mb-1">{endpoint.name}</h2>
                <p className="text-gray-light-5 ff-monospace font-md ts mb-1">
                  {endpoint.description}
                </p>
                <p className="text-gray-light-5 ff-monospace font-md ts mb-1">
                  <span className="font-bold text-white">URL:</span>{" "}
                  {endpoint.url}
                </p>
                <p className="text-gray-light-5 ff-monospace font-md ts  mb-1">
                  <span className="font-bold text-white">Method:</span>{" "}
                  {endpoint.method}
                </p>
                <p className="text-gray-light-5 ff-monospace font-md ts  mb-1">
                  <span className="font-bold text-white">Query:</span>{" "}
                  {JSON.stringify(endpoint.query)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Docs;
