import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserContext } from '../context/UserContext';
import { faVolumeLow, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
import { useState } from 'react';

const FloatingMusic = () => {
    const { isPlaying, togglePlayPause } = useUserContext();
    const [position, setPosition] = useState({ top: 36, right: 20 });

    const handleDragEnd = (event) => {
        console.log(event)
        const x = event.clientX;
        const y = event.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const distances = [
            { corner: "topLeft", distance: Math.sqrt(x ** 2 + y ** 2) },
            { corner: "topRight", distance: Math.sqrt((windowWidth - x) ** 2 +  y ** 2) },
            { corner: "bottomLeft", distance: Math.sqrt(x ** 2 + (windowHeight - y) ** 2) },
            { corner: "bottomRight", distance: Math.sqrt((windowWidth - x) ** 2 + (windowHeight - y) ** 2) },
        ];

        const closest = distances.reduce((prev, curr) =>
            prev.distance < curr.distance ? prev : curr
        );

        switch (closest.corner) {
            case "topLeft":
                setPosition({ top: 64, left: 20, right: "unset", bottom: "unset" });
                break;
            case "topRight":
                setPosition({ top: 64, right: 20, left: "unset", bottom: "unset" });
                break;
            case "bottomLeft":
                setPosition({ bottom: 64, left: 20, top: "unset", right: "unset" });
                break;
            case "bottomRight":
                setPosition({ bottom: 64, right: 20, top: "unset", left: "unset" });
                break;
            default:
                break;
        }
    };

    return (
        <motion.button
            drag
            dragElastic={1}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={(event) => handleDragEnd(event)}
            style={{ position: "fixed", ...position }}
            className="w-12 h-12 bg-white text-[var(--color-secondary)] rounded-full shadow-lg flex items-center justify-center z-50"
            onClick={() => togglePlayPause()}
        >
            {isPlaying ? (
                <FontAwesomeIcon icon={faVolumeLow} className="text-lg" />
            ) : (
                <FontAwesomeIcon icon={faVolumeMute} className="text-lg" />
            )}
        </motion.button>
    );
};

export default FloatingMusic;