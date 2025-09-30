import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-background text-neon px-4">
    <div className="bg-neon/10 rounded-xl shadow-lg p-10 flex flex-col items-center">
      <h1 className="text-7xl font-bold mb-4 text-neon">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg mb-6 text-neon/80 text-center">
        Oops! The page you’re looking for doesn’t exist.
        <br />
        It might be moved, renamed, or never existed.
      </p>
      <Link
        to="/"
        className="bg-neon/20 text-neon px-6 py-2 rounded-full text-lg font-medium hover:bg-neon/30 transition"
      >
        Go Back Home
      </Link>
    </div>
    <footer className="mt-12 text-sm text-neon/60">
      &copy; {new Date().getFullYear()} Shashwat. All rights reserved.
    </footer>
  </div>
);

export default NotFound;
