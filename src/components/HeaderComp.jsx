import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "antd";
import { header } from "../data/headerFooter";
import profile from "../assets/images/FBA.png";
import qrcode from "../assets/images/qrcode_phone1.png";
import qrcode_WhatsApp from "../assets/images/qrcode_whatsapp.png";
import {
  LinkedinOutlined,
  GithubOutlined,
  GitlabFilled,
  FacebookOutlined,
  TwitterOutlined,
  MessageOutlined,
} from "@ant-design/icons";

Modal.setAppElement("#root");

const HeaderComp = ({ language, theme }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const themeClass = theme === "dark" ? "header-dark" : "header-light";

  return (
    <header className={themeClass}>
      <div className="left">
        <img src={profile} alt="firas img" className="firas-pic" />
        <div className="user-infos">
          <h1>Firas Ben Abdallah</h1>
          <h3>{header.subtitle[language]}</h3>
          <div className="contacts">
            {/* Linkedin */}
            <div className="contact-item">
              <a
                href="https://www.linkedin.com/in/firas-ben-abdallah-614126239"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined style={{ color: "white" }} />
              </a>
            </div>

            {/* Github */}
            <div className="contact-item">
              <a
                href="https://github.com/FirasBenAbdallah?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined style={{ color: "white" }} />
              </a>
            </div>

            {/* Gitlab */}
            <div className="contact-item">
              <a
                href="https://gitlab.com/FirasBenAbdallah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitlabFilled style={{ color: "white" }} />
              </a>
            </div>

            {/* Facebook */}
            <div className="contact-item">
              <a
                href="https://www.facebook.com/firas.benabdallah.3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined style={{ color: "white" }} />
              </a>
            </div>

            <div className="contact-item">
              <a
                href="https://twitter.com/FBA_1920"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterOutlined style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        {/* Contact Details */}
        <Button
          className="contact-btn"
          icon={<MessageOutlined />}
          onClick={() => setModalIsOpen(true)}
        >
          {header.contactMe[language]}
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
              textAlign: "center",
            }}
          >
            {header.contactDetails[language]}
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {/* QR Phone */}
            <div style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: "10px" }}>{header.phone[language]}</h3>
              <img
                src={qrcode}
                alt="QrCode_Phone"
                style={{ width: 200, height: 200 }}
              />
            </div>

            {/* Ligne verticale */}
            <div
              style={{
                height: 220,
                width: 1,
                backgroundColor: "#ccc",
              }}
            />

            {/* QR WhatsApp */}
            <div style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom: "10px" }}>WhatsApp</h3>
              <img
                src={qrcode_WhatsApp}
                alt="QrCode_WhatsApp"
                style={{ width: 200, height: 200 }}
              />
            </div>
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default HeaderComp;
