import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { About } from "../about";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { dataportfolio } from "../../content_option";
import { Portfolio } from "../portfolio";
import { ContactUs } from "../contact";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext, socialprofils } from "../../content_option";
import Themetoggle from "../../components/themetoggle";
import Badge from "react-bootstrap/Badge";
import { dataabout, worktimeline, skills } from "../../content_option";
import { contactConfig } from "../../content_option";

export const Home = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <>
        <header className="fixed-top site__header">
          <div className="d-flex align-items-center justify-content-between">
            <Link className="navbar-brand nav_ac" to="/">
              {logotext}
            </Link>
            <div className="d-flex align-items-center">
              <Themetoggle />
              <button className="menu__button  nav_ac" onClick={handleToggle}>
                {!isActive ? <VscClose /> : <VscGrabber />}
              </button>
            </div>
          </div>

          <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
            <div className="bg__menu h-100">
              <div className="menu__wrapper">
                <div className="menu__container p-3">
                  <ul className="the_menu">
                    <li className="menu_item ">
                      <a onClick={handleToggle} href="#home" className="my-3">
                        Home
                      </a>
                    </li>
                    <li className="menu_item">
                      <a
                        onClick={handleToggle}
                        href="#project"
                        className="my-3"
                      >
                        {" "}
                        Project
                      </a>
                    </li>
                    <li className="menu_item">
                      <a onClick={handleToggle} href="#About" className="my-3">
                        About
                      </a>
                    </li>
                    <li className="menu_item">
                      <a
                        onClick={handleToggle}
                        href="#Contact"
                        className="my-3"
                      >
                        {" "}
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div> */}
          </div>
        </header>
        <div className="br-top"></div>
        <div className="br-bottom"></div>
        <div className="br-left"></div>
        <div className="br-right"></div>
      </>
      <HelmetProvider>
        <section id="home" className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div className="h_bg-image order-1 order-lg-2 h-100 "></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-1x">{introdata.description}</p>
                  <div className="intro_btn-action pb-5">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://drive.google.com/file/d/1dbaAqRGBACoHu6RYThPusmSbKdG9CkxL/view"
                      className="text_2"
                    >
                      <div id="button_p" className="ac_btn btn ">
                        Resume
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="#Contact">
                      <div id="button_h" className="ac_btn btn">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <>
          <Container id="About" classname="mt-5" className="About-header">
            <Helmet>
              <meta charSet="utf-8" />
              <title> About | {meta.title}</title>
              <meta name="description" content={meta.description} />
            </Helmet>
            <Row className="mb-5 mt-3">
              <Col lg="8">
                <h1 className="display-4 mb-4">About me</h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <Row className="sec_sp">
              <Col lg="5">
                <h3 className="color_sec py-4">{dataabout.title}</h3>
              </Col>
              <Col lg="7" className="d-flex align-items-center">
                <div>
                  <p>{dataabout.aboutme}</p>
                </div>
              </Col>
            </Row>
            <Row className=" sec_sp">
              <Col lg="5">
                <h3 className="color_sec py-4">Work Timline</h3>
              </Col>
              <Col lg="7">
                <table className="table caption-top">
                  <tbody>
                    {worktimeline.map((data, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{data.jobtitle}</th>
                          <td>{data.where}</td>
                          <td>{data.date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
            </Row>
            <Row>
              <Col lg="5">
                <h3 className="color_sec py-4">Skills</h3>
              </Col>
              <Col lg="7">
                {skills.map((data, i) => {
                  return (
                    <div key={i}>
                      <h3 className="progress-title">{data.name}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${data.value}%`,
                          }}
                        >
                          <div className="progress-value">{data.value}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </>
        <Container id="project" className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Projects | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Projects </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="mb-5 po_items_ho">
            {dataportfolio.map((data, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.desctiption}</p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data.link}
                    >
                      view project
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
        <HelmetProvider>
          <Container id="Contact">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Contact | {meta.title}</title>
              <meta name="description" content={meta.description} />
            </Helmet>
            <Row className="mb-5 mt-3">
              <Col lg="8">
                <h1 className="display-4 mb-4">Contact Me</h1>
                <hr className="t_border ml-0 text-left" />
              </Col>
            </Row>
            <Row className="sec_sp">
              <Col lg="12">
                <Alert
                  //show={formData.show}
                  variant={formData.variant}
                  className={`rounded-0 co_alert ${
                    formData.show ? "d-block" : "d-none"
                  }`}
                  onClose={() => setFormdata({ show: false })}
                  dismissible
                >
                  <p className="my-0">{formData.alertmessage}</p>
                </Alert>
              </Col>
              <Col lg="5" className="mb-5">
                <h3 className="color_sec py-4">Get in touch</h3>
                <address>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                    {contactConfig.YOUR_EMAIL}
                  </a>
                  <br />
                  <br />
                  {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                    <p>
                      <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                    </p>
                  ) : (
                    ""
                  )}
                </address>
                <p>{contactConfig.description}</p>
              </Col>
              <Col lg="7" className="d-flex align-items-center">
                <form onSubmit={handleSubmit} className="contact__form w-100">
                  <Row>
                    <Col lg="6" className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name || ""}
                        type="text"
                        required
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg="6" className="form-group">
                      <input
                        className="form-control rounded-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email || ""}
                        required
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <textarea
                    className="form-control rounded-0"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <br />
                  <Row>
                    <Col lg="12" className="form-group">
                      <button className="btn ac_btn" type="submit">
                        {formData.loading ? "Sending..." : "Send"}
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
          <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        </HelmetProvider>
      </HelmetProvider>
    </>
  );
};
