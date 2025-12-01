import { img } from "framer-motion/client";
import { useState, useEffect } from "react";



function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [ismobmenuopen, setIsmobmenuopen] = useState(false);

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
  const mobnavLinks = [
    { id: "hero", label: "Home", img: "/assets/home.png" },
    { id: "about", label: "About", img: "/assets/aboutmenu.png" },
    { id: "skills", label: "Skills",  img: "/assets/skill.png" },
    { id: "projects", label: "Projects", img: "/assets/verified.png" },
    { id: "contact", label: "Contact", img:"/assets/contact-us.png" }
  
  ];

  return (
    <>
    <nav className="navbar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px ",
        position: "fixed",
        top: 0,
        width: "100%",
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
  <div className="mobileNav">
  <logo><img src="/assets/logo.png" style={{
    width:'80px'

  }}/></logo>
 <span> <img src="/assets/menu.png" onClick={()=>{setIsmobmenuopen(!ismobmenuopen)}} style={{width:'25px'}}></img></span>
  </div>
  <div style={{position:'relative', boxSizing:'border-box'}}>
  {ismobmenuopen &&<nav className="mobnav">
    {mobnavLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          style={{color:'ghostwhite',textDecoration:'none', padding:'10px 0px', fontFamily:'sans-serif', fontWeight:'bold'}}
          > <img src={link.img} style={{width:'25px'}}></img></a>
            ))}
  
  </nav>
}
  </div>
  



</>
  );
}

export default Navbar;