import { motion, useTransform, useViewportScroll } from "framer-motion";

// import "normalize.css";
import "./styles.css";
import { ReactComponent as Logo } from '../../HomeScreen/assets/logo.svg'
const rainbow = [
  "#00eeff",
  "#bf00ff",
  "#00eeff",
  "#bf00ff",
  "#00eeff",
  "#00eeff",
  "#00eeff",
  
];

export default function ScrollText() {
  const { scrollYProgress } = useViewportScroll();
  const range = Array.from(Array(rainbow.length).keys()).map(
    (v) => v / (rainbow.length-3)
  );
  const rainbowColors = useTransform(scrollYProgress, range, rainbow);
  const forwardX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const backwardsX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  return (
    <div style={{ height: "300vh" }}>
      <div className="container">
        <div className="motion-progress">
          <motion.div
            style={{
              scaleX: scrollYProgress,
              background: rainbowColors,
              originX: 0
            }}
          />
        </div>
       
      </div>
      <div className="sticky-wrapper scrollText">
        <motion.p
          className="motion-paragraph"
          style={{ x: forwardX, WebkitTextStrokeColor: rainbowColors }}
        >
          {"...iNUPAD... ".repeat(4).trim()}
        </motion.p>
        <Logo/>
        <motion.p
          className="motion-paragraph scrollText"
          style={{ x: backwardsX, WebkitTextStrokeColor: rainbowColors,  }}
        >
         
          {"...$iPAD...".repeat(4).trim()}
        </motion.p>
      </div>
    </div>
  );
}