import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {


  return (
        <footer
      style={{
        backgroundColor: "#0d1117",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:your.email@example.com"
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          <FaEnvelope />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Zaheer Abbas. All rights reserved.</p>
    </footer>
  
    
   
    
  );
}

export default Footer;