import { NavBar } from "@/components/NavBar";
import imgHeader from "../public/images/me2.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faBook,
  faCamera,
  faDatabase,
  faHourglassHalf,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <header
        className="w-100  position-relative row m-0"
        style={{ background: "#f6f7fa", paddingTop: "4.4rem !important" }}
      >
        {/* svg animation header  */}
        <svg
          className="position-absolute bottom-0 left col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4   animate-transtion"
          style={{ left: "0" }}
          id="eTSbEMLqZpU1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 300 700"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <ellipse rx="60" ry="60" fill="#fff" stroke-width="0" />
          <ellipse rx="100" ry="100" fill="#fff" stroke-width="0" />
          <ellipse rx="75" ry="75" fill="#f6f7fa" stroke-width="0" />
          <ellipse rx="10" ry="10" fill="#fff" stroke-width="0" />
          <ellipse rx="8" ry="8" fill="#f6f7fa" stroke-width="0" />
        </svg>
        <svg
          className="position-absolute bottom-0 d-none d-lg-block col-lg-6 col-xl-5 col-xxl-4  animate-transtion2"
          style={{ left: "45%" }}
          id="eTSbEMLqZpU1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 300 700"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <ellipse rx="80" ry="80" fill="#fff" stroke-width="0" />
          <ellipse rx="65" ry="65" fill="#f6f7fa" stroke-width="0" />
          <ellipse
            rx="120"
            ry="120"
            transform="translate(150px, 680px)"
            fill="#fff"
            stroke-width="0"
          />
        </svg>
        {/* main header  */}
        <div className="row col-12 d-flex justify-content-center align-servis-items-end ">
          <div className=" col-12 col-md-9 col-lg-6 col-xl-4  col-xxl-3 header-img">
            <Image
              src={imgHeader}
              alt="زهرا رجبی فرجاد"
              className="w-100 h-100"
            />
          </div>
          <div className="col-12  col-lg-6 col-xl-5  col-xxl-3 align-self-center d-flex justify-content-center  flex-column header-text pe-3">
            <h1>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h1>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </div>
            <div className="align-self-center align-self-lg-end d-flex ">
              <button className="btn-animation bg-gray mx-3">رزومه</button>
              <br />
              <button className="btn-animation bg-green-melo">
                ادامه مطالب
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="feat  pt-5 pb-5">
          <div className="">
            <div className="row d-flex justify-content-evenly justify-content-lg-center">
              <div className="section-head col-sm-12">
                <h4>
                  <span>چرا </span> من{" "}
                  <span>
                    را <span className="border-botton-green">انتخاب</span> کنید{" "}
                  </span>
                  ?
                </h4>
                <p>
                  When you choose us, youll feel the benefit of 10 years
                  experience of Web Development. Because we know the digital
                  world and we know that how to handle it. With working
                  knowledge of online, SEO and social media.
                </p>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3">
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_one">
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                  </span>
                  <h6>Modern Design</h6>
                  <p>
                    We use latest technology for the latest world because we
                    know the demand of peoples.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3">
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_two">
                    <FontAwesomeIcon icon={faAnchor}></FontAwesomeIcon>
                  </span>
                  <h6>Creative Design</h6>
                  <p>
                    We are always creative and and always lisen our costomers
                    and we mix these two things and make beast design.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3">
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_three">
                    <FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
                  </span>
                  <h6>24 x 7 User Support</h6>
                  <p>
                    If our customer has any problem and any query we are always
                    happy to help then.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3">
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_four">
                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                  </span>
                  <h6>Business Growth</h6>
                  <p>
                    Everyone wants to live on top of the mountain, but all the
                    happiness and growth occurs while youre climbing it
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3">
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_five">
                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                  </span>
                  <h6>Market Strategy</h6>
                  <p>
                    Holding back technology to preserve broken business models
                    is like allowing blacksmiths to veto the internal combustion
                    engine in order to protect their horseshoes.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3">
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_six">
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                  </span>
                  <h6>Affordable cost</h6>
                  <p>
                    Love is a special word, and I use it only when I mean it.
                    You say the word too much and it becomes cheap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
