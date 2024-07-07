import { NavBar } from "@/components/NavBar";
import imgHeader from "../public/images/me2.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faAnchor,
  faAward,
  faB,
  faBook,
  faBrain,
  faCalendarDays,
  faCamera,
  faDatabase,
  faFaceMehBlank,
  faGraduationCap,
  faGrinStars,
  faHourglassHalf,
  faLightbulb,
  faMapSigns,
  faPenToSquare,
  faPhone,
  faPhoneAlt,
  faPhoneSquare,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { faBookTanakh } from "@fortawesome/free-solid-svg-icons/faBookTanakh";
import FaqSelction from "@/components/FaqSelction";
import { faPhoneSlash } from "@fortawesome/free-solid-svg-icons/faPhoneSlash";

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
      <section className="row justify-content-center mt-5 why-choose-us">
        <div className="section-head col-sm-12" data-aos="fade-left">
          <h4>
            <span>چرا </span> من{" "}
            <span>
              را <span className="border-botton-green">انتخاب</span> کنید{" "}
            </span>
            ?
          </h4>
        </div>
        <div
          className="col-xxl-4  col-md-5  d-flex item-why-us item-why-us-1   align-items-center row mx-3 my-3"
          data-aos="flip-up"
        >
          <span className="icon-why-us d-flex justify-content-center align-items-center col-4 col-lg-3 ">
            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
          </span>
          <div className="pe-3 col-8 col-lg-9 ">
            <h3 className="fw-bold h3">🎓 تحصیلات و رتبه کنکور</h3>
            <p className="fs-6">
              من زهرا رجبی هستم، با رتبه ۱۰ کنکور ریاضی و کارشناسی ارشد در رشته
              روانشناسی با گرایش شخصیت.
            </p>
          </div>
        </div>
        <div
          className="col-xxl-4  col-md-5  d-flex item-why-us item-why-us-2 align-items-center row mx-3 my-3"
          data-aos="flip-up"
        >
          <span className="icon-why-us d-flex justify-content-center align-items-center col-4 col-lg-3 ">
            <FontAwesomeIcon icon={faBrain}></FontAwesomeIcon>
          </span>
          <div className="pe-3 col-8 col-lg-9 ">
            <h3 className="fw-bold h3">🧠 تجربه و تخصص</h3>
            <p className="fs-6">
              تجربه ده‌ساله در آزمون‌های هوش، بیش‌فعالی، تمرکز، حافظه و پژوهش،
              به طور علمی در زمینه هوش شناسی و روانشناسی تخصص دارم.
            </p>
          </div>
        </div>
        <div
          className="col-xxl-4  col-md-5  d-flex item-why-us item-why-us-3 align-items-center row mx-3 my-3"
          data-aos="flip-down"
        >
          <span className="icon-why-us d-flex justify-content-center align-items-center col-4 col-lg-3 ">
            <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
          </span>
          <div className="pe-3 col-8 col-lg-9 ">
            <h3 className="fw-bold h3">🏅 دوره‌های تخصصی</h3>
            <p className="fs-6">
              دوره‌های تخصصی استعداد یابی را از انجمن استعدادیابی ایران
              گذرانده‌ام، شامل درمان کم‌توجهی، درمان بیش‌فعالی و هنر درمانی.
            </p>
          </div>
        </div>
        <div
          className="col-xxl-4  col-md-5  d-flex item-why-us item-why-us-4 align-items-center row mx-3 my-3"
          data-aos="flip-up"
        >
          <span className="icon-why-us d-flex justify-content-center align-items-center col-4 col-lg-3 ">
            <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
          </span>
          <div className="pe-3 col-8 col-lg-9 ">
            <h3 className="fw-bold h3">💡 برنامه‌ها و خدمات</h3>
            <p className="fs-6">
              برنامه‌ها و خدماتم براساس ساختار مغز طراحی و تنظیم شده است، اعتماد
              به ساختار مغز خود را از ما بخواهید.
            </p>
          </div>
        </div>
      </section>
      <section
        className=" position-relative "
        style={{ padding: "10vh 0", margin: "5vh 0", background: "#d3d3d34d" }}
      >
        <div className="custom-shape-divider-top-1720172254">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1720172566">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="feat  pt-5 pb-5">
          <div className="">
            <div className="row d-flex justify-content-evenly justify-content-lg-center servis-main">
              <div className=" text-center col-sm-12 pb-5" data-aos="fade-left">
                <h4 className="h2 fw-bold">خدمات ما</h4>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3"
                data-aos="zoom-in"
              >
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_one">
                    <FontAwesomeIcon icon={faMapSigns}></FontAwesomeIcon>
                  </span>
                  <h6 className="fw-bold h5">استراتژی و نقشه راه</h6>
                  <p>
                    با استفاده از انرژی، هوش و توانایی‌های شما، یک برنامه دقیق و
                    مؤثر برای مطالعه ارائه می‌دهیم تا به شما کمک کنیم در رشته و
                    دانشگاه دلخواه خود پذیرفته شوید.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3"
                data-aos="zoom-in"
              >
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_two">
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                  </span>
                  <h6 className="fw-bold h5">روش مطالعه مؤثر</h6>
                  <p>
                    به تعداد دانش‌آموزان، روش‌های مؤثری برای مطالعه وجود دارد.
                    زهرا رجبی فرجاد به عنوان مشاور تحصیلی با تجربه، روش‌هایی که
                    شما بهتر مطالب را یاد می‌گیرید را پیدا کرده و بهبود آن را
                    تسهیل می‌کند.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3"
                data-aos="zoom-in"
              >
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_three">
                    <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                  </span>
                  <h6 className="fw-bold h5"> تحلیل کارنامه</h6>
                  <p>
                    هر دانش‌آموزی روش خاص خود را برای مطالعه دارد. وظیفه اصلی یک
                    مشاور تحصیلی این است که روشی که شما بهتر مطالب را یاد
                    می‌گیرید پیدا کند و در بهبود آن کوشا باشد.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3"
                data-aos="zoom-in"
              >
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_four">
                    <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                  </span>
                  <h6 className="fw-bold h5">تحلیل استعدادیابی</h6>
                  <p>
                    استعدادیابی نقطه اتلاق هوش، شخصیت و علاقه‌مندی است. با تحلیل
                    سه آزمون هوش، شخصیت و علاقه‌مندی، رسالت شما را که در آن
                    نابغه هستید پیدا می‌کنیم. این خدمات همراه با یک جلسه مشاوره
                    تلفنی و نقشه راه رایگان ارائه می‌شود.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3"
                data-aos="zoom-in"
              >
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_five">
                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                  </span>
                  <h6 className="fw-bold h5"> تحلیل کارنامه</h6>
                  <p>
                    کارنامه شما را بررسی می‌کنیم و با توجه به استعدادتان،
                    راهکارهایی برای بهبود معدل شما ارائه می‌دهیم. همچنین
                    کتاب‌های کمک آموزشی مناسب را به شما پیشنهاد می‌کنیم.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-5 col-11 mx-3"
                data-aos="zoom-in"
              >
                <div className="servis-item">
                  {" "}
                  <span className="icon feature_box_col_six">
                    <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                  </span>
                  <h6 className="fw-bold h5"> برنامه‌ریزی روزانه</h6>
                  <p>
                    این نوع برنامه‌ریزی که اولین بار در استرالیا برای آموزش زبان
                    افراد غیر بومی استفاده شد، نتایج باور نکردنی به همراه داشت.
                    افراد با انگیزه بیشتری مطالعه می‌کردند و هر روز مشتاق‌تر به
                    مطالعه بودند زیرا برنامه فردا را نمی‌دانستند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="row d-flex justify-content-center my-5">
        <div className="col-md-10 col-lg-8">
          <FaqSelction />
        </div>
      </section>
      <section className="bg-about w-100 d-flex justify-content-center position-relative z-1">
        <div className=" d-flex container justify-content-center justify-content-md-end h-100 align-items-center row w-100">
          <div className="rounded col-11 col-md-9 col-lg-6 col-xl-5 about-main bg-light">
            <h3>درباره من</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </section>
      <footer className="position-relative d-flex justify-content-center ">
        <div className="footer d-none d-flex justify-content-around flex-column align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100vw"
            height="50vh"
            className="position-absolute top-0 z-n1"
            preserveAspectRatio="none"
            viewBox="0 0 2550 1440"
          >
            <g mask='url("#SvgjsMask1023")' fill="none">
              <path
                d="M2795.25 1054.94C2547.79 1044.9 2437.87 694 1896.93 637.34 1355.98 580.68 1295.53-115.35 998.6-172"
                stroke="rgba(0, 0, 0, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M2584.31 895.87C2380.15 894.75 2186.03 715.87 1787.74 715.87 1389.45 715.87 1458.84 935.44 991.17 895.87 523.5 856.3 517.28-130.5 194.6-277.33"
                stroke="rgba(0, 0, 0, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M2680.74 666.43C2404.05 694.17 2147.34 1307.2 1756.72 1285.63 1366.1 1264.06 1532.81 204.23 1294.71-60"
                stroke="rgba(0, 0, 0, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M2742.41 998.84C2528.97 962.54 2526.78 530.09 2083.15 437.24 1639.52 344.39 1654.06-187.91 1423.89-245.5"
                stroke="rgba(0, 0, 0, 1)"
                stroke-width="2"
              ></path>
              <path
                d="M2723.21 782.04C2490.03 787.55 2238.44 1148.65 1851 1113.24 1463.57 1077.83 1634.82 162.2 1414.9-60.61"
                stroke="rgba(0, 0, 0, 1)"
                stroke-width="2"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1023">
                <rect width="2550" height="1440" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
          <div className="footer-wrapper ">
            <a
              className="footer-button text-dark text-decoration-none"
              href="tel:+989012226411"
            >
              <div className="footer-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <span>Instagram</span>
            </a>

            <a
              className="footer-button text-dark text-decoration-none"
              href="tel:+989012226411"
            >
              <div className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 891.84 913.67"
                >
                  <path
                    d="M275,44.6A256.21,256.21,0,0,0,55.5,265.3C54.2,275.6,54,304.6,54,499.1c0,148.8.3,225.2,1.1,231.7C58.8,765.4,73.3,807.1,92,837c20.2,32.4,51.8,63.9,83.2,82.8,22.5,13.6,53.5,26,78.8,31.6,26.5,5.8,16.4,5.6,246,5.6,183.9,0,212.4-.2,222.7-1.5,63.5-8.3,122.8-40.3,163-88,17.7-21,35.5-51.5,44.8-76.9a318.38,318.38,0,0,0,12.6-46.7l2.4-12.4.3-118.5c.1-65.2,0-119.5-.3-120.7a6.87,6.87,0,0,0-3.3-3.7c-2.6-1.4-3.2-1.3-6.3.6-11.3,6.9-47.2,41.6-64.5,62.3-13.7,16.6-26.3,33.6-52.9,71.5-12.5,17.9-26.6,37.7-31.3,44-51.6,69.6-117,133.1-169.7,164.7-42.2,25.4-82.6,36.6-136.7,38-112,2.9-204.2-38.5-253.2-113.8C193.2,703,180.7,628.6,192.1,546c11.1-79.6,45-159.1,97.9-229.5C354.6,230.6,440.9,167.3,521,147c75.9-19.3,145-5.1,196,40.3,18,16,32,34.7,43.1,57.2,15.2,31,20.7,59.5,19.6,101.3-1,39.6-7.7,68.8-22.3,97.2-8.7,16.9-17.7,29.2-31.4,43-25.5,25.6-55.4,43.7-118,71.5-45.7,20.2-72,33.9-93.5,48.6-40,27.3-65.4,58.4-78.3,95.9-4,11.6-8.2,29.7-8.2,35.2v2.9l-4.7-3.2c-7.1-4.8-22.1-20.4-27.4-28.4a120.46,120.46,0,0,1-19.4-49.4c-2.6-15.1-1.7-41.7,1.9-55.6,4.7-19,12.4-33.7,25.2-48.9,9.9-11.8,9.8-13.2-.7-20.2A53.49,53.49,0,0,1,379.4,500c-2.2-10.3-1.5-29.4,1.5-41,5.7-21.8,19.1-41.5,36.2-53.1,9.2-6.2,8.9-6.3,8.9,2.8,0,21.1,12.5,46.1,29.2,58.9a95.61,95.61,0,0,0,29.3,14c9.7,2.6,49,2.6,67.5,0,40.2-5.5,75.7-16,108.5-32.1,19.8-9.7,31.9-17.8,43.6-29.5,7.7-7.6,10.3-11.1,13.5-17.5,3.6-7.2,3.9-8.6,3.9-16-.1-6.8-.5-9-3.2-14.6-11.1-23.8-36.1-46.4-65.5-59.1-58.6-25.3-116.1-22.6-197.2,9.5C377,353.3,308.4,411.5,283.9,468c-9.4,21.8-13.9,42.1-13.9,63.1,0,20.3,3.6,36.1,12.5,54.5,8.2,17,25,36.5,41.3,47.9l7.2,5-.6,10.5c-2.8,50.8,34,105.8,88.2,132.1,11.2,5.4,28.8,11.6,35.7,12.5,3.9.6,4.9.3,7-1.8s2.4-3.3,3-16.9a157.75,157.75,0,0,1,16.6-64.7l5-9.9,8,2.3c20.7,6,36.4,7.8,61.5,7.1,14.8-.4,22.2-1.1,32.7-3.1,39.7-7.5,78.7-24.8,113.9-50.4,28.9-21.1,51.6-42.8,103.5-98.7,36.7-39.7,58.2-61.2,77.5-77.9,14-12,37.9-30,51.7-39,6.8-4.4,10.5-7.4,10.8-8.9.4-1.2.4-38.7.2-83.2-.4-89.2-.2-85.9-7.2-113.4-9-35.7-28.5-73.8-52.3-102.1-37.5-44.8-91-75.5-152.2-87.2l-11.5-2.2L504,43.4C319,43.2,283.9,43.4,275,44.6ZM710.1,56.1c57.3,4.5,108.7,27.6,149.5,67.1,33.8,32.8,57.9,75.3,67.8,119.8,5.7,25.7,5.8,28.6,6.3,108.6l.5,74.2-13.4,9.1c-40.1,27.3-70.8,55.5-128,117.6-31.1,33.7-60.2,63-75.3,75.6-43,36.2-85,57.3-131.4,66.2-10.1,1.9-14.9,2.2-37.1,2.2-27.6,0-37-1.2-55.5-7-10-3.1-12-3.1-15-.1-3.5,3.5-14.7,27.2-18.9,39.8a182.33,182.33,0,0,0-8.2,41.2l-.7,9.6-2.6-.6c-12.2-2.9-35.6-14.7-49.2-24.9-11.1-8.3-28-25.9-35.1-36.6-15.9-23.7-23.3-51.4-20-74.8.7-4.8.7-8.1.1-9.2s-5.3-5-10.7-9c-11.8-8.7-26.1-23-32.3-32.4-13.9-21-18.6-38.8-17.6-67.3.4-13.1,1-17.6,3.5-27.3,8.3-32,23.2-56.1,53.1-85.9,26.7-26.6,54.5-46.5,89.1-63.9,56.3-28.2,113.3-42.5,156-39.2,41.4,3.3,76.8,17.5,100.6,40.3,20.6,19.8,27.3,34.9,21.2,47.7-2.8,6-19.1,22.1-28.7,28.5-38,25.3-94.8,42.2-152.6,45.5-28,1.6-44.9-1.4-58.4-10.3-12.8-8.6-23.2-23.4-26.6-38.1-1.9-7.8-2.1-22.6-.5-28.6.9-3.3.8-4.5-.5-6.5-2.4-3.6-5.4-3.8-12.9-.8-19.1,7.6-37.6,24.8-48.1,44.7-22.2,42.1-16.6,88.1,13.4,110.9l3.4,2.6-4,4.9c-13.5,16.2-24.1,40.2-27.7,62.9-2.1,13.1-2.1,35.2,0,47.5s8.2,30.8,14.1,42.1a132.08,132.08,0,0,0,40.1,46.1c10.3,7.4,13.4,8.9,16.7,8.1,3.6-.9,5.1-4.6,5.9-14.4,3.2-39.6,22.7-76.9,55.2-105.4,26.7-23.4,56.6-40.8,115.9-67.1,56.5-25.1,80.5-38.4,105.4-58.3,41.1-32.8,64.8-75.6,73.6-133.2,2.2-14.2,3.1-50.6,1.6-65.1-9.4-91.2-68.8-160.1-156.6-181.5-27.4-6.7-63.9-7.4-94.5-1.8C408.7,153.5,271,279.7,209.5,433.5c-38.6,96.4-45.1,196.3-17.9,275.6,30.4,88.7,102.8,147,207.9,167.3,40,7.7,87.2,8.6,124.9,2.5C593.1,867.7,648.6,835.3,719,765c40.3-40.2,62.5-67.5,109.5-134.5,25.1-35.8,38.9-54.5,52.6-71,8.7-10.6,44.1-46.4,49.7-50.4l3.3-2.3-.4,107.8c-.4,117.4-.3,115.3-6.3,142.4-9.2,41.3-30.7,81.2-60.6,112.5-42.9,44.9-97.9,70.4-161.1,74.5-11,.8-81.1,1-217.2.8-179.3-.4-202.1-.6-211.5-2-46.9-7.3-80.8-21.4-117.5-49.1-9.5-7.2-33-30.4-40.7-40.2C93,820.6,76,782.1,69.6,742.2c-3.5-21.9-3.7-35.5-3.4-252.2.4-196.9.5-214.4,2.1-225,6.7-43.5,21.3-79.4,46.3-113,10-13.5,34.9-38.4,48.4-48.4A242.07,242.07,0,0,1,288.5,56.1C304.1,54.8,694,54.8,710.1,56.1Z"
                    transform="translate(-54 -43.33)"
                  />
                </svg>
              </div>
              <span>Eita</span>
            </a>

            <a
              className="footer-button text-dark text-decoration-none"
              href="tel:+989012226411"
            >
              <div className="footer-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 495.37 543.04"
                >
                  <path
                    d="M246.07,0h1.76c.48,42.73-.25,128.44-.25,128.44-40.86-22.92-82-45.3-122.84-68.29q40.13-22.81,80.32-45.51c12.69-7.16,26.33-13.31,41-14.64Z"
                    fill="#b8ce01"
                  />
                  <path
                    d="M247.73,0h3C266.62,1.43,281,9,294.67,16.68Q332.91,38.25,371.05,60c-41,22.73-82.45,45.82-123.51,68.48-.35-42.73.63-85.77.15-128.5Z"
                    fill="#7db425"
                  />
                  <path
                    d="M124.77,60.11,247.61,128.4,123.92,200.66s-.06-45.85.08-68.71C123.89,108.21,124.77,60.11,124.77,60.11Z"
                    fill="#f6a925"
                  />
                  <path
                    d="M371.19,60l.35.19c-.1,42.59,0,85.18,0,127.77-.07,4.17-.11,12.77-.11,12.77L247.62,128.45S330.2,82.76,371.23,60Z"
                    fill="#35ac9d"
                  />
                  <path
                    d="M371.44,60.21c27.28,15.51,54.37,31.36,81.47,47.17,13.11,7.36,27,15.52,34.16,29.39-38.38,21.25-115.68,64-115.68,64s-.06-8.61,0-12.78q0-63.89,0-127.77Z"
                    fill="#59d6bd"
                  />
                  <path
                    d="M46.5,105c25.65-15,78.19-44.88,78.19-44.88L124,200.66S47,158.21,8.71,137C17.05,122.13,32.11,113.12,46.5,105Z"
                    fill="#ef7414"
                  />
                  <path
                    d="M247.5,128.44l123.81,72.3s-39.84,22-59.62,32.64c-21.14,12-64.09,35.82-64.09,35.82L123.94,200.66Z"
                    fill="#fff"
                  />
                  <path
                    d="M0,193C.11,174.17-.23,154.15,8.66,137,47,158.21,123.92,200.66,123.92,200.66,82.55,224.58,41.38,248.86,0,272.81,0,246.21,0,219.62,0,193Z"
                    fill="#e74b50"
                  />
                  <path
                    d="M487.07,136.77c7.54,14.1,8.64,30.5,8.22,46.19v90.11L371.41,200.76S448.69,158,487.07,136.77Z"
                    fill="#794387"
                  />
                  <path
                    d="M123.92,200.66c.19-.08,123.66,68.54,123.66,68.54s0,71.69.07,106.76c.2,11.29-.07,34.11-.07,34.11-41.27-22.78-82.32-45.76-123.6-68.54l-.07-.31V200.66Z"
                    fill="#e4e4e4"
                  />
                  <path
                    d="M0,272.81c41.35-24,82.52-48.23,123.89-72.15q-.06,70.29,0,140.56c-6.35-2.65-12.13-6.43-18.19-9.64C70.5,312.21,35.38,292.39,0,273.21v-.4Z"
                    fill="#794387"
                  />
                  <path
                    d="M371.39,200.76v86.18c-.13,18.27.46,36.47,0,54.73-41.21,22.4-123.82,68.4-123.82,68.4s.27-22.82.07-34.11c0-35.07-.07-106.76-.07-106.76Z"
                    fill="#f1f1f1"
                  />
                  <path
                    d="M371.39,200.76s123.88,72.14,123.88,72.31c-41.17,22.82-123.87,68.6-123.87,68.6h0c.46-18.26-.13-36.46,0-54.73V200.76Z"
                    fill="#4c3683"
                  />
                  <path
                    d="M0,273.21c35.36,19.21,70.43,39,105.7,58.4,6.06,3.21,11.84,7,18.19,9.64l.07.31Q67,374.79,10,408.05C6,402,4,394.86,2.53,387.8.14,376,0,364,0,352v-78.8Z"
                    fill="#4c3683"
                  />
                  <path
                    d="M495.27,273.07c.06,27.65,0,55.3,0,82.95.4,17.73-.12,36.62-9.57,52.25-34.2-20-114.33-66.6-114.33-66.6S454.1,295.89,495.27,273.07Z"
                    fill="#e74b50"
                  />
                  <path
                    d="M10,408Q67,374.72,124,341.53c-.25,46.83.08,93.67-.16,140.49q-40.35-22.75-80.49-45.86C30.82,428.76,18,420.53,10,408Z"
                    fill="#0f68a0"
                  />
                  <path
                    d="M124,341.53c41.28,22.78,82.33,45.76,123.6,68.54-41.2,24-123.7,72-123.76,71.95.24-46.82-.09-93.66.16-140.49Z"
                    fill="#49bdca"
                  />
                  <path
                    d="M371.2,341.76l.2-.09c.12,46.84-.25,93.69.19,140.53l-.31.15c-32.66-19.51-65.71-38.4-98.52-57.68-8.26-4.7-25.18-14.6-25.18-14.6S330,364.21,371.2,341.76Z"
                    fill="#f6a925"
                  />
                  <path
                    d="M371.4,341.67h0c3.65,2.49,80.13,46.62,114.33,66.6-4.86,8.3-12.56,14.39-20.32,19.84-12.52,8.42-25.88,15.47-38.9,23.05-18.31,10.35-36.5,20.91-54.92,31-.44-46.84-.07-93.69-.19-140.53Z"
                    fill="#ef7414"
                  />
                  <path
                    d="M247.58,410.07V543c-10.25-1.51-21.42-3.87-30.5-9.08C186,516.66,154.81,499.5,123.82,482,165,458,206.38,434.12,247.58,410.07Z"
                    fill="#7db425"
                  />
                  <path
                    d="M247.58,410.07s16.92,9.9,25.18,14.6c32.81,19.28,65.86,38.17,98.52,57.68q-47.79,26.44-95.57,53A62.47,62.47,0,0,1,249.84,543h-2.26Z"
                    fill="#b8ce01"
                  />
                  <path d="M602.83,233.66" fill="#f1f1f1" />
                </svg>
              </div>
              <span>Rubika</span>
            </a>

            <a
              className="footer-button text-dark text-decoration-none"
              href="tel:+989012226411"
            >
              <div className="footer-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <span>WhatsApp</span>
            </a>
            <a
              className="footer-button text-dark text-decoration-none"
              href="tel:+989012226411"
            >
              <div className="footer-icon ">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ transform: "scale(0.75 , 0.75);" }}
                />
              </div>
              <span>تماس</span>
            </a>
          </div>
        </div>
        <div className="position-absolute bottom-0 w-100 bg-footer">
          تمام حقوق این سایت مربوط به زهرا رجبی فرجاد میباشد
        </div>
      </footer>
    </div>
  );
};

export default Home;
