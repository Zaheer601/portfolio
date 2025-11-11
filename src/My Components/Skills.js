import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWordpress } from "react-icons/fa";

function Skills() {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" /> },
    { id: 3, name: "JavaScript", icon: <FaJsSquare size={40} color="#f7df1e" /> },
    { id: 4, name: "React JS", icon: <FaReact size={40} color="#61dbfb" /> },
    { id: 5, name: "WordPress", icon: <FaWordpress size={40} color="#00749C" /> },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        backgroundColor: "#161b22",
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
        My Skills
      </motion.h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: skill.id * 0.2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#0d1117",
              padding: "20px",
              borderRadius: "12px",
              width: "120px",
            }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;




// import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaWordpress } from "react-icons/fa";

// function Skills() {
//   const skills = [
//     { id: 1, name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
//     { id: 2, name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" /> },
//     { id: 3, name: "JavaScript", icon: <FaJsSquare size={40} color="#f7df1e" /> },
//     { id: 4, name: "React JS", icon: <FaReact size={40} color="#61dbfb" /> },
//     { id: 5, name: "WordPress", icon: <FaWordpress size={40} color="#00749C" /> },
//   ];

//   return (
//     <section
//       id="skills"
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "100px 80px",
//         backgroundColor: "#161b22",
//         color: "white",
//       }}
//     >
//       {/* Left Text */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//         style={{ flex: 1 }}
//       >
//         <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#58a6ff" }}>
//           My Skills
//         </h2>
//         <p style={{ lineHeight: "1.6" }}>
//           I work with a range of technologies in the web development world. From
//           front-end design using React to content management using WordPress.
//         </p>
//       </motion.div>

//       {/* Right Skills Grid */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//         style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "30px",
//         }}
//       >
//         {skills.map((skill) => (
//           <motion.div
//             key={skill.id}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: skill.id * 0.2 }}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: "10px",
//               backgroundColor: "#0d1117",
//               padding: "20px",
//               borderRadius: "12px",
//               width: "120px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//             }}
//           >
//             {skill.icon}
//             <p>{skill.name}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// export default Skills;