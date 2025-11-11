import { motion } from "framer-motion";


function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: "#161b22",
        color: "white",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ fontSize: "5rem", marginBottom: "10px" }}>Zaheer Abbas</h1>
        <h2 style={{ fontSize: "1.6rem", color: "#58a6ff" }}>
          WordPress and React JS Developer
        </h2>
        <p style={{ maxWidth: "600px", marginTop: "20px" , textAlign:'center' }}>
          I design and develop modern, responsive websites and applications using React and WordPress.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "14px 30px",
            backgroundColor: "#58a6ff",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight:600,
          }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
// import { motion } from "framer-motion";

// function Hero() {
//   return (
//     <section
//       id="hero"
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "50px 80px",
//         minHeight: "90vh",
//         backgroundColor: "#161b22",
//         color: "white",
//       }}
//     >
//       {/* Left Text */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         style={{ flex: 1 }}
//       >
//         <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Zaheer Abbas</h1>
//         <h2 style={{ fontSize: "1.5rem", color: "#58a6ff", marginBottom: "20px" }}>
//           WordPress and React JS Developer
//         </h2>
//         <p style={{ maxWidth: "500px", marginBottom: "30px" }}>
//           I design and develop modern, responsive websites and applications using React and WordPress.
//         </p>
//         <a
//           href="#projects"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#58a6ff",
//             color: "white",
//             borderRadius: "8px",
//             textDecoration: "none",
//           }}
//         >
//           View My Work
//         </a>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         style={{ flex: 1, textAlign: "center" }}
//       >
//         <img
//           src={'about.png'}
//           alt="Zaheer Abbas"
//           style={{
//             width: "80%",
//             borderRadius: "20px",
//             boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
//           }}
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default Hero;