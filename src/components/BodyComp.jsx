import React, { useEffect, useRef, useState } from "react";
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

const galleryImages = recentProjects.gallery?.length
  ? recentProjects.gallery
  : [{ src: recentProjects.image, caption: recentProjects.title }];

const galleryStyles = `
  .pfe-gallery-trigger {
    position: relative; display: block; width: 100%; padding: 0;
    border: 0; border-radius: 8px; background: transparent;
    color: inherit; cursor: zoom-in; overflow: hidden;
  }
  .pfe-gallery-trigger .featured-img { display: block; width: 100%; }
  .pfe-gallery-hint {
    position: absolute; right: 12px; bottom: 12px; padding: 7px 11px;
    border-radius: 20px; background: rgba(0, 0, 0, .78);
    color: #fff; font-size: 13px; line-height: 1.4;
  }
  .pfe-gallery-overlay {
    position: fixed; inset: 0; z-index: 2000; display: grid;
    place-items: center; padding: 16px; background: rgba(0, 0, 0, .85);
  }
  .pfe-gallery-dialog {
    box-sizing: border-box; width: min(1180px, 100%);
    max-height: calc(100vh - 32px); max-height: calc(100dvh - 32px);
    padding: 16px; overflow: auto; border: 1px solid #707070;
    border-radius: 14px; outline: none;
    background: var(--gallery-bg); color: var(--gallery-text);
  }
  .pfe-gallery-heading {
    display: flex; justify-content: space-between;
    align-items: center; gap: 16px;
  }
  .pfe-gallery-title {
    margin: 0 !important; color: inherit !important;
    font-size: clamp(17px, 2.5vw, 23px); line-height: 1.35;
  }
  .pfe-gallery-dialog button { font: inherit; cursor: pointer; }
  .pfe-gallery-close, .pfe-gallery-nav {
    display: grid; place-items: center; flex-shrink: 0;
    width: 42px; height: 42px; padding: 0; border: 0;
    border-radius: 50%; background: #353c45; color: #fff;
    font-size: 28px !important; line-height: 1;
  }
  .pfe-gallery-stage {
    display: grid; grid-template-columns: 42px minmax(0, 1fr) 42px;
    align-items: center; gap: 12px; padding: 14px 0;
  }
  .pfe-gallery-figure { min-width: 0; margin: 0; text-align: center; }
  .pfe-gallery-image, .pfe-gallery-error {
    box-sizing: border-box; display: block; width: 100%;
    height: min(58vh, 620px); height: min(58dvh, 620px);
    object-fit: contain; border-radius: 8px; background: #11151a;
  }
  .pfe-gallery-error {
    display: grid; place-items: center; margin: 0;
    padding: 20px; color: #fff;
  }
  .pfe-gallery-caption { margin-top: 10px; line-height: 1.4; }
  .pfe-gallery-thumbnails {
    display: flex; gap: 8px; overflow-x: auto; padding: 4px 4px 8px;
  }
  .pfe-gallery-thumbnail {
    flex: 0 0 88px; padding: 0; overflow: hidden;
    border: 2px solid transparent; border-radius: 7px; background: #353c45;
  }
  .pfe-gallery-thumbnail[aria-current="true"] { border-color: #0dbe3e; }
  .pfe-gallery-thumbnail img {
    display: block; width: 84px; height: 50px; object-fit: cover;
  }
  .pfe-gallery-trigger:focus-visible, .pfe-gallery-dialog button:focus-visible {
    outline: 3px solid #0dbe3e; outline-offset: 2px;
  }
  @media (max-width: 600px) {
    .pfe-gallery-overlay { padding: 8px; }
    .pfe-gallery-dialog {
      padding: 12px; max-height: calc(100vh - 16px);
      max-height: calc(100dvh - 16px);
    }
    .pfe-gallery-stage {
      grid-template-columns: 1fr 1fr; gap: 10px;
    }
    .pfe-gallery-figure { grid-column: 1 / -1; grid-row: 1; }
    .pfe-gallery-nav {
      grid-row: 2; justify-self: center; width: 44px; height: 44px;
    }
    .pfe-gallery-image { height: auto; max-height: 55vh; max-height: 55dvh; }
    .pfe-gallery-error { height: 30vh; height: 30dvh; }
    .pfe-gallery-hint { right: 8px; bottom: 8px; font-size: 12px; }
  }
`;

const GalleryImage = ({ image, caption, language }) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <p className="pfe-gallery-error" role="status">
      {language === "french"
        ? "Cette capture n’a pas pu être chargée."
        : "This screenshot could not be loaded."}
    </p>
  ) : (
    <img
      className="pfe-gallery-image"
      src={image.src}
      alt={caption}
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
};

const ProjectGallery = ({ isOpen, onClose, language, theme }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const isFrench = language === "french";
  const currentImage = galleryImages[imageIndex];
  const caption = currentImage.caption[language];

  const navigate = (direction) => {
    setImageIndex((index) =>
      (index + direction + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    setImageIndex(0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const direction = event.key === "ArrowRight" ? 1
        : event.key === "ArrowLeft" ? -1 : 0;
      if (direction) {
        event.preventDefault();
        setImageIndex((index) =>
          (index + direction + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => closeButtonRef.current?.focus()}
      appElement={typeof document !== "undefined"
        ? document.getElementById("root") : undefined}
      aria={{ labelledby: "pfe-gallery-title" }}
      className="pfe-gallery-dialog"
      overlayClassName="pfe-gallery-overlay"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldReturnFocusAfterClose
      style={{
        content: {
          "--gallery-bg": theme === "dark" ? "#20252b" : "#ffffff",
          "--gallery-text": theme === "dark" ? "#f4f4f4" : "#20252b",
        },
      }}
    >
      <div className="pfe-gallery-heading">
        <h2 id="pfe-gallery-title" className="pfe-gallery-title">
          {recentProjects.title[language]}
        </h2>
        <button
          ref={closeButtonRef}
          type="button"
          className="pfe-gallery-close"
          onClick={onClose}
          aria-label={isFrench ? "Fermer la galerie" : "Close gallery"}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="pfe-gallery-stage">
        <button
          type="button"
          className="pfe-gallery-nav"
          onClick={() => navigate(-1)}
          aria-label={isFrench ? "Image précédente" : "Previous image"}
          disabled={galleryImages.length < 2}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <figure className="pfe-gallery-figure">
          <GalleryImage
            key={currentImage.src}
            image={currentImage}
            caption={caption}
            language={language}
          />
          <figcaption className="pfe-gallery-caption" aria-live="polite">
            {imageIndex + 1} / {galleryImages.length} — {caption}
          </figcaption>
        </figure>
        <button
          type="button"
          className="pfe-gallery-nav"
          onClick={() => navigate(1)}
          aria-label={isFrench ? "Image suivante" : "Next image"}
          disabled={galleryImages.length < 2}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div
        className="pfe-gallery-thumbnails"
        aria-label={isFrench ? "Captures du projet" : "Project screenshots"}
      >
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="pfe-gallery-thumbnail"
            aria-current={imageIndex === index ? "true" : undefined}
            aria-label={`${isFrench ? "Voir la capture" : "View screenshot"} ${
              index + 1
            } : ${image.caption[language]}`}
            onClick={() => setImageIndex(index)}
          >
            <img src={image.src} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
    </Modal>
  );
};

const BodyComp = ({ language, theme }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);
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
      <style>{galleryStyles}</style>
      <ProjectGallery
        isOpen={galleryIsOpen}
        onClose={() => setGalleryIsOpen(false)}
        language={language}
        theme={theme}
      />
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
            <button
              type="button"
              className="pfe-gallery-trigger"
              aria-haspopup="dialog"
              aria-label={language === "french"
                ? "Ouvrir la galerie du projet PFE Management"
                : "Open the PFE Management project gallery"}
              onClick={() => setGalleryIsOpen(true)}
            >
              <img
                className="featured-img"
                src={recentProjects.image}
                alt={recentProjects.title[language]}
              />
              <span className="pfe-gallery-hint" aria-hidden="true">
                {galleryImages.length} {language === "french"
                  ? "captures · Agrandir" : "screenshots · Enlarge"}
              </span>
            </button>
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
