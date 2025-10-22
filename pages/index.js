import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";


const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div
              className="slide"
            >
              <img src="assets/images/amol dhole.png" alt="" />
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div>
            <div className="content">
              <div className="titles">
                <div
                  className="subtitle"
                >
                  Mr.
                </div>
                <h2
                  className="title"
                >
                  Amol Dhole
                </h2>
              </div>
              <div
                className="description"
              >
                <p>
                  I am Assisant Professor of Mathematics with over 13 years of teaching experience.
                </p>
                <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-linkedin" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fa-google-scholar" />
                  
                  </a>
                
                </div>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                   Pursuing <strong>PhD</strong>
                </li>
                <li>
                  Experience <strong>13+ Years</strong>
                </li>
                <li>
                   Location <strong>Pune, Maharashtra</strong>
            
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              About Me
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-check-circle" />
                  </div>
                  <div className="num">124</div>
                  <div className="title">
                    Completed <br />
                    Project
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-smile-beam" />
                  </div>
                  <div className="num">65</div>
                  <div className="title">
                    Happy <br />
                    Clients
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-gem" />
                  </div>
                  <div className="num">18</div>
                  <div className="title">
                    Awards <br />
                    Won
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div
                  className="text"
                >
                  <p align="justify">
                    I am Mr. Amol Ravindra Dhole, an Assistant Professor of Mathematics with over 13 years of teaching and academic experience. I have taught a wide range of subjects including Engineering Mathematics, Algebra, Real and Complex Analysis, Discrete Mathematics, and Applied Mathematics. Currently, I am pursuing my Ph.D. in Mathematics from Pimpri Chinchwad University, Pune, with research interests in Fuzzy Topology, Intuitionistic Fuzzy Sets, and Intuitionistic Fuzzy Topological Spaces.
                  </p>
                  <p align="justify">
                    Alongside teaching, I have actively contributed to curriculum development, examination processes, student mentoring, and the organization of academic workshops and faculty development programs. My professional journey is driven by a passion for advancing mathematical research, inspiring students, and integrating modern approaches to learning and problem-solving in mathematics.
                  </p>
                  <a
                    href="#contact-section"
                    className="btn"
                  >
                    <span>Contact Me</span>
                  </a>
                  <div
                    className="signature"
                  >
                    <img src="assets/images/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Resume
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p align="justify">
               I am Mr. Amol Ravindra Dhole, an Assistant Professor of Mathematics with
               over 13 years of teaching experience. I specialize in Engineering Mathematics,
               Algebra, Analysis, and Applied Mathematics. Currently, I am pursuing my Ph.D.
               from Pimpri Chinchwad University, Pune. I am passionate about teaching, research,
               and guiding students in Mathematics.
                </p>
              </div>
              {/* Skills */}
              <div className="skills-items">
                <div
                  className="p-title"
                >
                  Subjects Taught
                </div>
                <div
                  className="skills-item" >
                  <h5 >Engineering Mathematics, Calculus, Applied Mathematics,
                   Discrete Mathematics, Linear Algebra,  Calculus & Transforms,
                   Linear Algebra & Differential Calculus, Integral Calculus & Numerical Techniques,
                   Real Analysis, Complex Analysis, Metric Space, Algebra.  </h5>
                  
                </div>
                
               
                
                
              </div>
              {/* Services */}
            
              
              {/* History */}
              <div className="history-left">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EDUCATION
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">Pursuing</div>
                    <div className="name">PhD</div>
                    <div className="subname">Pimpri Chinchwad University</div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2006 - 2018</div>
                    <div className="name">M.Sc.Mathematicst</div>
                    <div className="subname">New York University</div>
                  </div>
                </div>
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    RESEARCH
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">23–26 December 2024</div>
                    <div className="name">A Note on Some Generalized Binary Continuous Maps</div>
                    <div className="text">
                      <p>
                        Presented a poster titled at the 90th Annual Conference of the Indian Mathematical Society, MIT WPU Pune.
                      </p>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="history-right">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EXPERIENCE
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2023 - Present</div>
                    <div className="name">Pimpri Chinchwad University, Pune</div>
                    <div className="subname">Assisant Professor of Mathematics</div>
                                     </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2018 - 2023</div>
                    <div className="name">JSPM's Rajashri Shau College Of Enginerring, Tathawade, Pune</div>
                    <div className="subname">Assisant Professor of Mathematics</div>
                 
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2014-2018</div>
                    <div className="name">SSC College Junnar, Pune</div>
                    <div className="subname">Assisant Professor of Mathematics</div>
                    </div>
                    
                    <div
                    className="history-item"
                  >
                    <div className="date">2013-2014</div>
                    <div className="name">VCACS Kondhawa, Pune</div>
                    <div className="subname">Assisant Professor of Mathematics</div>
                    </div>

                    <div
                    className="history-item"
                  >
                    <div className="date">2012-2013</div>
                    <div className="name">SBK Arts Commerce & Science College,Keadgao, Pune</div>
                    <div className="subname">Assisant Professor of Mathematics</div>
                    </div>

                </div>
              </div>
              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Projects
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
      
      <section className="section no-padding-top section-parallax section-parallax-4">
        <div className="container">
          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>
      <section className="section section-bg" id="blog-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Blog
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog-items">
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog4.jpg"
                    alt="Usability Secrets to Create Better User Interfaces"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                UI Design
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>Usability Secrets to Create Better User Interfaces</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/blog3.jpg"
                    alt="Three Ways To Level Up Your Photography"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                Branding
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>Three Ways To Level Up Your Photography</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{" "}
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="archive-item">
            <div className="image">
              <Link href="/blog-single">
                <a>
                  <img
                    src="assets/images/single7.jpg"
                    alt="10 Useful Tips to Improve Your UI Designs"
                  />
                </a>
              </Link>
            </div>
            <div className="desc">
              <div
                className="category"
              >
                Photography
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3
                className="title"
              >
                <Link href="/blog-single">
                  <a>10 Useful Tips to Improve Your UI Designs</a>
                </Link>
              </h3>
              <div
                className="text"
              >
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…
                </p>
                <div className="readmore">
                  <Link href="/blog-single">
                    <a className="lnk">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-more-link">
          <Link href="/blog">
            <a
              className="btn"
            >
              <span>View Blog</span>
            </a>
          </Link>
        </div>
      </section>
      <section className="section section-parallax section-parallax-5">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Clients
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
          <div className="row clients-items">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand1.png" alt="" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand2.png" alt="" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand3.png" alt="" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
              <div className="clients-item">
                <img src="assets/images/brand4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
};
export default Index;
