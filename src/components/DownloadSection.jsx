import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./../styles/download.scss";

export default function DownloadSection() {
    const btnRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            btnRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "bounce.out", delay: 1 }
        );
    }, []);

    return (
        <section className="download-section">
            <button ref={btnRef} className="download-btn">Download Chrome</button>
        </section>
    );
}
