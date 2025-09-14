import React from "react";
import { motion } from "framer-motion";
import "../styles/updates.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function UpdatesSection() {
    return (
        <section className="updates-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="discover-title"
            >
                Discover the latest <br />
                <motion.span
                    className="updates-pill"
                    initial={{ y: 100, opacity: 0 }}   // start below
                    animate={{ y: 0, opacity: 1 }}     // move up to normal position
                    transition={{
                        duration: 0.6, // fast
                        ease: "easeOut",
                    }}
                >
                    <i className="fa-solid fa-history"></i>
                    updates
                </motion.span>{" "}
                from Chrome
            </motion.h2>

            <div className="updates-container">
                {/* Left Card */}
                <motion.div
                    className="update-card blue"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3>Automatic updates</h3>
                    <p>
                        There's a new Chrome release every four weeks, making it easy to have
                        the newest features and a faster, safer web browser.
                    </p>
                    <a href="#">Learn about Automatic updates</a>
                    <img
                        src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png"
                        alt="Automatic updates"
                    />
                </motion.div>

                {/* Right Card */}
                <motion.div
                    className="update-card yellow"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    style={{ position: "relative", overflow: "hidden" }} // keep inside card
                >
                    <h3>New from Chrome</h3>
                    <p>
                        Chrome regularly updates with tools and features that make it faster,
                        safer, and easier to use.
                    </p>
                    <a href="#">Learn what’s new on Chrome</a>

                    {/* Chrome logo animation inside the card */}
                    <motion.div
                        animate={{ x: [0, "calc(100% - 160px)"] }}
                        transition={{
                            duration: 2, // speed (2s from left to right)
                            ease: "linear",
                        }}
                        style={{
                            marginTop: "2rem",
                            position: "absolute",
                            left: 0,
                            right: 0,
                        }}
                    >
                        <img
                            src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
                            alt="Chrome logo"
                            style={{ width: 160, height: 160 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
