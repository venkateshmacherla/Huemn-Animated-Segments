import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/features.scss";

export default function FeaturesSection() {
    const ref = useRef(null);

    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Horizontal sliding (slower movement)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    // Shrink slightly while scrolling
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1]);

    return (
        <section className="features-section" ref={ref}>
            <motion.div className="features-container" style={{ x }}>
                {[
                    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp",
                    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp",
                    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp",
                    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp",
                    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp",
                ].map((src, i) => (
                    <motion.div
                        key={i}
                        className={`feature-card ${i === 1 ? "main" : ""}`}
                        style={{ scale }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    >
                        <img src={src} alt={`Feature ${i + 1}`} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
