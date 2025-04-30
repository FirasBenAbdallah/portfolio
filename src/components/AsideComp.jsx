import React, { useState, useRef, useEffect } from "react";
import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import {
  aside,
  skills,
  testimonial,
  languages,
  education,
} from "../data/aside";
import outlookLogo from "../assets/images/Microsoft_Outlook_new_logo.svg";
const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
const AsideComp = ({ language, theme }) => {
  const themeClass = theme === "dark" ? "aside-dark" : "aside-light";
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emailRef.current && !emailRef.current.contains(event.target)) {
        setShowEmailOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <aside className={themeClass}>
        <div className="section contacts">
          <div className="contact-item">
            <EnvironmentOutlined />
            <span>{aside.location[language]}</span>
          </div>
          <div
            className="contact-item"
            style={{ position: "relative" }}
            ref={emailRef}
          >
            <MailOutlined />
            <span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowEmailOptions(!showEmailOptions);
                }}
              >
                firas.benabdallah@esprit.tn
              </a>
              {showEmailOptions && (
                <div
                  style={{
                    backgroundColor:
                      theme === "dark" ? "#282828" : "rgba(255, 255, 255, 0.5)",
                    color: theme === "dark" ? "#fff" : "#000",
                    border:
                      theme === "dark"
                        ? "1px solid rgba(255, 255, 255, 0.7)"
                        : "1px solid rgb(0, 0, 0, 0.5)",
                    borderRadius: "5px",
                    marginTop: "5px",
                    padding: "5px 10px",
                    boxShadow:
                      theme === "dark"
                        ? "0 0 10px rgba(185, 185, 15, 0.3)"
                        : "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {/* <a
                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=firas.benabdallah@esprit.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <img
                      src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png"
                      alt="Gmail"
                      width="20"
                      height="20"
                    />
                    Gmail
                  </a>

                  <a
                    href="https://outlook.live.com/owa/?path=/mail/action/compose&to=firas.benabdallah@esprit.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <img
                      src={outlookLogo}
                      alt="Outlook"
                      width="20"
                      height="20"
                    />
                    Outlook
                  </a> */}
                  <a
                    href={
                      isMobile
                        ? "googlegmail://co?to=firas.benabdallah@esprit.tn"
                        : "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=firas.benabdallah@esprit.tn"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <img
                      src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png"
                      alt="Gmail"
                      width="20"
                      height="20"
                    />
                    Gmail
                  </a>

                  <a
                    href={
                      isMobile
                        ? "ms-outlook://compose?to=firas.benabdallah@esprit.tn"
                        : "https://outlook.live.com/owa/?path=/mail/action/compose&to=firas.benabdallah@esprit.tn"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <img
                      src={outlookLogo}
                      alt="Outlook"
                      width="20"
                      height="20"
                    />
                    Outlook
                  </a>
                </div>
              )}
            </span>
          </div>
          <div className="contact-item">
            <LinkOutlined />
            <span>
              <a
                href="https://firasbenabdallah.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.siteweb.com
              </a>
            </span>
          </div>
        </div>
        {/* Skills/Compétences */}
        <div className="section">
          <h2>{skills.title[language]}</h2>
          <br />
          <p>
            <div class="inline-container">
              <strong>{skills.theme8[language]}</strong>
              <hr />
            </div>
            <br />
            Français B2 (TCF)
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme1[language]}</strong>
              <hr />
            </div>
            <br />
            C#, JavaScript, Java, Python, C, C++
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme2[language]}</strong>
              <hr />
            </div>
            <br />
            Angular, ReactJS, Express.JS/NodeJS, Spring Boot, Symfony, ASP.Net
            core, jQuery, HTML5, CSS3, Bootstrap5, JEE.
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme3[language]}</strong>
              <hr />
            </div>
            <br />
            Flutter, Android (Kotlin/XML/Jetpack Compose), .Net MAUI, iOS
            (SwiftUI/Storyboard)
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme4[language]}</strong>
              <hr />
            </div>
            <br />
            MongoDB, Oracle SQL, MySQL, Firebase
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme5[language]}</strong>
              <hr />
            </div>
            <br />
            Jenkins, Docker, Nexus, Grafana/Prometheus, Vagrant, Jira, Maven,
            Linux
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme6[language]}</strong>
              <hr />
            </div>
            <br />
            JUNIT, SonarQube, Mockito, Postman, Swagger, Selenium
            <br />
            <br />
            <div class="inline-container">
              <strong>{skills.theme7[language]}</strong>
              <hr />
            </div>
            <br />
            Computer-Vision, ML/DL
          </p>
          <Button
            type="link"
            icon={<LinkOutlined />}
            href="https://github.com/FirasBenAbdallah/FirasBenAbdallah"
            target="_blank"
            rel="noopener noreferrer"
          >
            {skills.link[language]}
          </Button>
        </div>
        {/* Testimonials/Témoignages */}
        <div className="section">
          <h2>{testimonial.title[language]}</h2>
          <p>{testimonial.description[language]}</p>
          <Button type="link" icon={<LinkOutlined />}>
            {testimonial.link[language]}
          </Button>
        </div>
        {/* Education/Éducation */}
        <div className="section">
          <h2>{aside.title[language]}</h2>
          {education.map((item, index) => {
            return (
              <div className="education-item" key={index}>
                <h3>{item.title[language]}</h3>
                <div className="education-item-nd">
                  <span>{item.name[language]}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* Languages/Langues */}
        <div className="section">
          <h2>{languages.title[language]}</h2>
          <div className="language-item">
            <h3>{languages.language1[language]}</h3>
            <span>{languages.type1[language]}</span>
            <div className="full">
              <div className="percent first"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>{languages.language2[language]}</h3>
            <span>{languages.type2[language]}</span>
            <div className="full">
              <div className="percent second"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>{languages.language3[language]}</h3>
            <span>{languages.type2[language]}</span>
            <div className="full">
              <div className="percent third"></div>
            </div>
          </div>
        </div>
        {/* Certifications */}
        <div className="section">
          <h2 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Certifications
          </h2>
          <ul
            style={{
              paddingLeft: "0",
              listStyleType: "none",
              marginTop: "10px",
            }}
          >
            {[
              "Azure Data Fundamentals",
              "Azure Fundamentals (AZ-900)",
              "Dynamics 365 Fundamentals ERP (MB-920)",
              "Power Platform Fundamentals (PL-900)",
              "Azure AI Fundamentals (AI-900)",
            ].map((cert, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <span>• {cert}</span>
                <span style={{ fontWeight: "bold" }}>Microsoft</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsideComp;
