// import { img } from "framer-motion/client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


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
  <logo><img src="/assets/logo.png" alt="" style={{
    width:'80px'

  }}/></logo>
 <span> <img src="/assets/menu.png" alt="" onClick={()=>{setIsmobmenuopen(!ismobmenuopen)}} style={{width:'25px'}}></img></span>
  </div>
  <div style={{ position: "relative", zIndex: 1000 }}>
  <AnimatePresence>
    {ismobmenuopen && (
      <motion.nav
        initial={{ opacity: 0, y: -20 }}      // start hidden
        animate={{ opacity: 1, y: 0 }}        // animate in
        exit={{ opacity: 0, y: -20 }}         // animate out
        transition={{ duration: 0.3 }}
        style={{
         position: 'absolute',
             right: 0,   
              display: 'flex',
              flexDirection: 'column',
  
            borderRadius: '8px',
            opacity: 1,
             width: '10%',
 
              alignItems: 'center',
               filter: 'contrast(0)',
        }}
      >
        {mobnavLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsmobmenuopen(false)}
            style={{
              color: "ghostwhite",
              textDecoration: "none",
              padding: "10px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              position: "relative",
            }}
          >
            <img src={link.img} alt={link.label} style={{ width: "25px" }} />
            {/* Tooltip */}
            <span
              style={{
                position: "absolute",
                left: "35px",
                backgroundColor: "#222831",
                padding: "3px 8px",
                borderRadius: "4px",
                fontSize: "12px",
                opacity: 0,
                whiteSpace: "nowrap",
                pointerEvents: "none",
                transition: "0.2s",
              }}
              className="tooltip"
            >
              {link.label}
            </span>
          </a>
        ))}
      </motion.nav>
    )}
  </AnimatePresence>
</div>
  



</>
  );
}

export default Navbar;