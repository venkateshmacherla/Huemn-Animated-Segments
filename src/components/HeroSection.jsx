import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/hero.scss";

export default function HeroSection() {
    const sectionRef = useRef(null);
    const logoRef = useRef(null);
    const headingRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        // Animate Chrome logo, heading, and button sequentially
        const tl = gsap.timeline();
        tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.4 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
        )
            .fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "<"
            )
            .fromTo(
                btnRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                "<0.2"
            );
    }, []);

    return (
        <section className="hero-section" ref={sectionRef}>
            <img
                ref={logoRef}
                src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
                alt="Chrome Logo"
                className="chrome-logo"
            />
            <h1 ref={headingRef}>
                The browser <br />
                built to be yours
            </h1>
            <button
                ref={btnRef}
                className="download-btn flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
                <span className="icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="white"
                        width="25"
                        height="25"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                    </svg>
                </span>
                <span>Download Chrome</span>
            </button>
            <div className="minor-link">
                <a href="#">I want to update Chrome</a>
            </div>
            <div className="support-text">
                For Windows 11/10 64-bit
            </div>
            <div className="terms">
                <label>
                    <input type="checkbox" defaultChecked />
                    Help make Google Chrome better by automatically sending usage statistics and crash reports to Google Learn More.
                </label>
                <div className="terms-span">
                    By downloading Chrome, you agree to the <a href="#">Google Terms of Service</a> and <a href="#">Chrome Additional Terms of Service</a>
                </div>
            </div>
        </section>
    );
}
