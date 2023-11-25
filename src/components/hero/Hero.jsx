import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"
const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./rony-pro.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
           Hi, I'm Nazrul Islam Rony
        </motion.h1>

        <TypeAnimation
          className="type-animation"
          sequence={[
            // Same substring at the start will only be typed once, initially
            "I am Web Designer",
            1000,
            "I am ReactJs Developer",
            1000,
            "I am Web Developer",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />

        <p className="sub-title">
        I am a beginner front-end developer and I am skilled in HTML, CSS and JavaScript web development, as well as the React framework. I am looking to gain valuable experience in an IT environment and expand my competence. I am ready for challenges and eager to learn and acquire new skills.
        </p>

        <div className="all-icons flex">
          <div className="icon icon-facebook-f"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>

      <button className="resumeBtn">Check Resume</button>

      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>

  )  
}

export default Hero