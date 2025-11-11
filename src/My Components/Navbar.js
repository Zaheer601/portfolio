import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px ",
        position: "fixed",
        top: 0,
        width: "100%",
         marginLeft: "-50px",
        backgroundColor: "rgba(22,27,34,0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          style={{
            color: activeSection === link.id ? "#58a6ff" : "white",
            textDecoration: "none",
            margin: "0 35px",
            fontWeight: "bold",
            borderBottom:
              activeSection === link.id ? "2px solid #58a6ff" : "2px solid transparent",
            transition: "0.3s",
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;