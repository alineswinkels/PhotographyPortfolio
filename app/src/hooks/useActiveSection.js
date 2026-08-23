import { useEffect, useState } from "react";

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");

            // Punt waarop een sectie actief wordt
            const triggerPoint = window.innerHeight * 0.3;

            let active = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
                    active = section.id;
                }
            });

            if (active) {
                setActiveSection(active);
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return activeSection;
}