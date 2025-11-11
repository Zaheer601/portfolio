import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Notes App",
      description: "A React project to practice adding, editing, and deleting notes.",
      github: "https://github.com/yourusername/notes-app",
      live: "#",
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "My personal portfolio website built with React and Framer Motion.",
      github: "https://github.com/yourusername/portfolio",
      live: "#",
    },
    {
      id: 3,
      name: "Blog Website",
      description: "A simple blog built with WordPress and React integration.",
      github: "https://github.com/yourusername/blog-website",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 20px",
        backgroundColor: "#0d1117",
        color: "white",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ fontSize: "2rem", marginBottom: "50px", color: "#58a6ff" }}
      >
        My Projects
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: project.id * 0.2 }}
            style={{
              backgroundColor: "#161b22",
              padding: "20px",
              borderRadius: "12px",
              width: "300px",
              textAlign: "left",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{project.name}</h3>
            <p style={{ lineHeight: "1.5", marginBottom: "15px" }}>{project.description}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  padding: "8px 12px",
                  backgroundColor: "#58a6ff",
                  color: "white",
                  borderRadius: "6px",
                  fontSize: "0.9rem",
                }}
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  padding: "8px 12px",
                  backgroundColor: "#22c55e",
                  color: "white",
                  borderRadius: "6px",
                  fontSize: "0.9rem",
                }}
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;