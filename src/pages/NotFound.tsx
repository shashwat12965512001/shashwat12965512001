import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-background text-neon px-6">
    <div className="bg-neon/10 rounded-xl shadow-lg p-12 flex flex-col items-center">
      <span className="text-8xl font-extrabold mb-6 text-neon">404</span>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-center text-neon/80 text-lg mb-6">
        Sorry, the page you’re looking for doesn’t exist.
        <br />
        It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-neon/20 px-8 py-3 rounded-full text-neon font-semibold hover:bg-neon/30 transition"
      >
        Go Back Home
      </Link>
    </div>
    <footer className="mt-12 text-sm text-neon/60">
      &copy; {new Date().getFullYear()} Shashwat Portfolio
    </footer>
  </div>
);

export default NotFound;
