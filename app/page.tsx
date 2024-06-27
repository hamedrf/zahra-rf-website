import { NavBar } from "@/components/NavBar";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <header
        className="w-100  position-relative row"
        style={{ background: "#f6f7fa", height: "70vh" }}
      >
        <svg
          className="position-absolute bottom-0 col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4  "
          id="eTSbEMLqZpU1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 300 800"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <ellipse
            className="animate-transtion"
            rx="110"
            ry="110"
            fill="#fff"
            stroke-width="0"
          />
          <ellipse
            className="animate-transtion"
            rx="80"
            ry="80"
            fill="#f6f7fa"
            stroke-width="0"
          />
          <ellipse
            rx="10"
            ry="10"
            transform="translate(100 750)"
            fill="#fff"
            stroke-width="0"
          />
          <ellipse
            rx="8"
            ry="8"
            transform="translate(100 750)"
            fill="#f6f7fa"
            stroke-width="0"
          />
        </svg>
      </header>
    </div>
  );
};

export default Home;
