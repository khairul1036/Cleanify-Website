import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error || Cleanify</title>
      </Helmet>
      <div className="flex items-center justify-center text-blue-900">
        <div className="text-center mt-10 px-5 dark:text-gray-200">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Face-bad.svg/768px-Face-bad.svg.png"
            alt="404 Error"
            className="mx-auto mb-6 w-32 h-32"
          />
          <h1 className="text-5xl font-extrabold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <a
            href="/"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
