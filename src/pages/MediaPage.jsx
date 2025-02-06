import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Image1 from '../assets/A.jpg'
import Image2 from '../assets/B.jpg'
import Image3 from '../assets/C.jpg'

import { useUserContext } from "../context/UserContext";

const MediaPage = () => {
    const [activeTab, setActiveTab] = useState("Pre-Wedding");

    const images = {
        "Pre-Wedding": [
            Image1,
            Image1,
            Image1,
            Image1,
        ],
        "Akad": [
            Image2,
            Image2,
            Image2,
        ],
        "Magazine": [
            Image3,
            Image3,
            Image3,
        ],
    };

    const { scrollToTop } = useUserContext();
    
    
        useEffect(() => {
            scrollToTop();
        }, [])

    return (
        <section className="w-full h-fit grid grid-cols-3 content-start bg-[var(--color-primary)]">
            {/* Back Button */}
            <Link to="/description" className="flex flex-row items-center justify-start col-span-3 p-4">
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4"></FontAwesomeIcon>
            </Link>

            {/* Tabs */}
            {["Pre-Wedding", "Akad", "Magazine"].map((tab) => (
                <div key={tab} className={`w-full cursor-pointer ${activeTab === tab ? "border-b-2 border-[var(--color-shadow)]" : "border-b-2 border-transparent"} flex items-center justify-center py-2`} onClick={() => setActiveTab(tab)}>
                    <h1 className={`text-sm ${activeTab === tab ? "text-[var(--color-tertiary)]" : "text-gray-500"}`}>
                        {tab}
                    </h1>
                </div>
            ))}

            {/* Images */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-screen grid grid-cols-3 col-span-3 content-start gap-1 bg-[var(--color-primary)] py-2">
                {images[activeTab].map((src, index) => (
                    <motion.div key={index}
                       className="w-full h-[160px] overflow-hidden">
                        <img
                            src={src}
                            alt={`${activeTab} ${index + 1}`}
                            className="w-full h-full object-cover bg-[var(--color-secondary)] hover:scale-105 transition-all duration-300"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default MediaPage;
