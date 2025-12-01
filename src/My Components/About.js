import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      style={{
               
        backgroundColor: "#0d1117",
        color: "white",       
       

      }}
    >
      <div className="aboutContainer" style={{width:'85%', margin:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
       <div>
        <img src='/assets/bg_1.png' style={{width:'90%'}}></img>
      </div>
      <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#58a6ff" }}>
          About Me
        </h2>
        
        <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
          Hi! I'm Zaheer Abbas, a passionate WordPress and React JS Developer.
          I create responsive, modern, and user-friendly websites and web applications
          for clients and personal projects. I love learning new technologies and
          building projects that make a real impact.
        </p>
      </motion.div>
      </div>
     </div>
    </section>
  );
}

export default About;