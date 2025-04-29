import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  increment,
} from "firebase/firestore";
import Modal from "react-modal";
import { Button, Divider } from "antd";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import {
  body,
  aboutMe,
  recentProjects,
  projects,
  experience,
} from "../data/body";
import AsideComp from "./AsideComp";
import "../styles/Aside.css";

// Firebase configuration from your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyCt0MkdLBml7r3jpuNq8zi5oPY6SDg5vl8",
  authDomain: "portfolio-8ba82.firebaseapp.com",
  projectId: "portfolio-8ba82",
  storageBucket: "portfolio-8ba82.appspot.com",
  messagingSenderId: "501077437672",
  appId: "1:501077437672:web:9ef2ba8efe8c0459b5ad5d",
  measurementId: "G-MXL1ZSB8N6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

const BodyComp = ({ language, theme }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const themeClass = theme === "dark" ? "body-dark" : "body-light";

  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Reference to the document
    const likeDocRef = doc(db, "Likes", "x1SnaW63GkpmYLmpbU8L");

    // Listen for real-time updates
    const unsubscribe = onSnapshot(likeDocRef, (doc) => {
      if (doc.exists()) {
        setLikeCount(doc.data().like);
      } else {
        console.log("No such document!");
      }
    });

    // Detach listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLike = async () => {
    const likeDocRef = doc(db, "Likes", "x1SnaW63GkpmYLmpbU8L");
    try {
      await setDoc(likeDocRef, { like: increment(1) }, { merge: true });
      setIsLiked(true); // Set isLiked to true after the button is clicked
    } catch (error) {
      console.error("Error incrementing like count: ", error);
    }
  };
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`body-container ${themeClass}`}>
      <div className="left">
        <section className="about">
          <article>
            <h2>{aboutMe.title[language]}</h2>
            <p>{aboutMe.description[language]}</p>
          </article>
        </section>
        <section className="projects">
          <h2>{body.project[language]}</h2>
          <article>
            <a
              href="https://imgur.com/a/hKTAcYf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="featured-img"
                src={recentProjects.image}
                alt="slug"
              />
            </a>
            <div className="project-info">
              <h3>{recentProjects.title[language]}</h3>
              <p>
                {recentProjects.description[language]
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
              <br />
              <p>
                {recentProjects.tools[language]
                  .split("\n")
                  .map((str, index) => {
                    // Split the string at ":"
                    const parts = str.split(":");
                    // Check if the first part is one of the titles
                    const isTitle = [
                      "Environnements techniques",
                      "Key Words",
                      "Outil de gestion",
                      "Management Tools",
                      "IDE",
                    ].includes(parts[0].trim());
                    return (
                      <span key={index}>
                        {/* Apply the style conditionally if the part is a title */}
                        {isTitle && (
                          <span style={{ color: "#909090" }}>{parts[0]}:</span>
                        )}
                        {parts[1]}
                        <br />
                      </span>
                    );
                  })}
              </p>
              <br />
              <Button
                type="link"
                icon={<LinkOutlined />}
                onClick={() => setModalIsOpen(true)}
                // rel="noopener noreferrer"
              >
                {language === "french" ? "En savoir plus" : "Learn more"}
              </Button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Details Modal"
                style={{
                  content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    transform: "translate(-50%, -50%)",
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  },
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    borderBottom: "2px solid #f2f2f2",
                    paddingBottom: "10px",
                    marginBottom: "15px",
                  }}
                >
                  {language === "french" ? "Liens" : "Links"}
                </h2>
                <div className="links">
                  <a
                    href={recentProjects.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    talan-pfe_mangement_front
                  </a>
                  <br />
                  <br />
                  <a
                    href={recentProjects.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    talan-pfe_mangement_back
                  </a>
                </div>
              </Modal>
              <div className="project-link">
                {/* <Button
                  className="btn"
                  icon={<LikeOutlined />}
                  onClick={handleLike}
                >
                  Soutenir mon projet ({likeCount})
                </Button> */}
                <Button
                  className="btn"
                  icon={<LikeOutlined />}
                  onClick={handleLike}
                  disabled={isLiked}
                >
                  Soutenir mon projet ({likeCount})
                </Button>
              </div>
            </div>
          </article>
          <Divider style={{ backgroundColor: "#fff" }} />
          {projects.map((item, index) => {
            return (
              <article className="article-item" key={index}>
                <div className="left">
                  <a
                    href={item.imgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.image} alt="project-slug" />
                  </a>
                </div>
                <div className="right">
                  <div className="projects-info">
                    <h3>{item.title[language]}</h3>
                    <span>{item.date}</span>
                  </div>
                  {item.description[language].split("\n").map((line, index) => (
                    <span
                      key={index}
                      style={{ textAlign: "justify", display: "block" }}
                    >
                      {line}
                      <br />
                    </span>
                  ))}
                  <p>
                    {item.tools[language].split("\n").map((str, index) => {
                      // Split the string at ":"
                      const parts = str.split(":");
                      // Check if the first part is one of the titles
                      const isTitle = [
                        "Environnements techniques",
                        "Key Words",
                        "Outil de gestion",
                        "Management Tools",
                        "IDE",
                      ].includes(parts[0].trim());
                      return (
                        <span key={index}>
                          {/* Apply the style conditionally if the part is a title */}
                          {isTitle && (
                            <span style={{ color: "#909090" }}>
                              {parts[0]}:
                            </span>
                          )}
                          {parts[1]}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                  <Button
                    type="link"
                    icon={<LinkOutlined />}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language === "french" ? "En savoir plus" : "Learn more"}
                  </Button>
                </div>
              </article>
            );
          })}
        </section>

        {/* <section className="experiences">
          <h2>{body.title[language]}</h2>
          {experience.map((item) => {
            return (
              <article key={item.id}>
                <div className="experience-info">
                  <h3>
                    {item.title[language]}
                    <hr />
                  </h3>
                  <span>{item.date[language]}</span>
                </div>
                <p>
                  {item.description[language]
                    .split("\n-")
                    .map((str, index, array) =>
                      index === array.length - 1 ? (
                        str
                      ) : (
                        <>
                          {str}
                          <br />
                          <span style={{ color: "#909090" }}>
                            {body.environment[language]}
                          </span>
                        </>
                      )
                    )}
                </p>
              </article>
            );
          })}
        </section> */}
        <section className="experiences">
          <h2>{body.title[language]}</h2>
          {experience.map((item, index) => (
            <div key={item.id}>
              <article>
                <div
                  className="experience-info"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h3 style={{ marginBottom: 0 }}>{item.title[language]}</h3>
                  </div>
                  <div>
                    <span>{item.date[language]}</span>
                  </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                  {item.description[language].split("\n").map((line, idx) => (
                    <p key={idx} style={{ margin: "4px 0" }}>
                      {line}
                    </p>
                  ))}
                  {item.environment && (
                    <p>
                      <strong style={{ color: "#909090", fontStyle: "italic" }}>
                        {item.environment[language].split(":")[0]} :
                      </strong>
                      {item.environment[language].split(":")[1]}
                    </p>
                  )}
                </div>
              </article>

              {/* ✅ Ligne séparatrice entre les expériences sauf la dernière */}
              {index < experience.length - 1 && (
                <Divider
                  style={{
                    margin: "20px 0",
                    backgroundColor: theme === "dark" ? "#f0f0f0" : "#909090",
                  }}
                />
              )}
            </div>
          ))}
        </section>
      </div>
      <AsideComp language={language} theme={theme} />
      {/** Bouton Scroll vers le haut */}
      {showScrollTop && (
        <Button
          type="primary"
          shape="circle"
          icon={<span style={{ fontWeight: "bold" }}>↑</span>}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: 999,
            backgroundColor: theme === "dark" ? "#0dbe3e" : "#001529",
            color: "#fff",
            border: "none",
            boxShadow:
              theme === "dark"
                ? "0 2px 10px rgba(255, 255, 255, 0.7)"
                : "0 2px 10px rgba(0, 0, 0, 0.7)",
          }}
        />
      )}
    </div>
  );
};

export default BodyComp;
