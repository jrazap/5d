import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | 5D</title>
      </Helmet>

      <section className="w-full">
        <div className="container h-[calc(100vh-4.5rem-7.625rem)] min-h-[350px] flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-[5rem]">404</h1>
          <h2 className="font-medium text-[2rem]">Page Not Found</h2>
          <Link to="/" className="btn gradient-btn">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
