import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "../styles/animated.scss";

export default function YoursHeader() {
    const controls = useAnimation();

    useEffect(() => {
        // Starts the animation once component is mounted (or customize with intersection observer)
        controls.start({
            clipPath: "inset(0% 0% 0% 0%)", // fully visible
            transition: { duration: 2, ease: "easeInOut" },
        });
    }, [controls]);

    return (
        <div className="center-block">
            <motion.h2
                className="yours-title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Make it{" "}
                <span
                    className="yours-pill"
                    aria-label="Brush icon with color reveal animation"
                >
                    <span
                        className="yours-icon"
                        style={{ position: "relative", display: "inline-block", width: 40, height: 40 }}
                    >
                        {/* Gray brush background */}
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="gray"
                            aria-hidden="true"
                            style={{ position: "absolute", top: 0, left: 0 }}
                        >
                            <rect x="5" y="5" width="14" height="5" rx="1.5" />
                            <rect x="7" y="10" width="2" height="7" rx="1" />
                        </svg>

                        {/* Animated color reveal; initially clipped */}
                        <motion.svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="#ff6752"
                            aria-hidden="true"
                            style={{ position: "absolute", top: 0, left: 0 }}
                            initial={{ clipPath: "inset(100% 0% 0% 0%)" }} // hidden (clip top)
                            animate={controls} // animates to visible
                        >
                            <rect x="5" y="5" width="14" height="5" rx="1.5" />
                            <rect x="7" y="10" width="2" height="7" rx="1" />
                        </motion.svg>
                    </span>
                    <span className="yours-highlighted">yours</span>
                </span>
                <br />
                and take it with you
            </motion.h2>
        </div>
    );
}
