import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserContext } from '../context/userContext';
import { faVolumeLow, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
import { useState } from 'react';

const FloatingMusic = () => {

    const { isPlaying, togglePlayPause } = useUserContext();
    const [position, setPosition] = useState({ top: 36, right: 20 });

    // const handleDragEnd = (_, info) => {
    //     const windowWidth = window.innerWidth;
    //     const windowHeight = window.innerHeight;

    //     // Get the current position
    //     const { x, y } = info.point;

    //     // Calculate distances to each corner
    //     const distanceToTopLeft = Math.sqrt(x ** 2 + y ** 2);
    //     const distanceToTopRight = Math.sqrt((windowWidth - x) ** 2 + y ** 2);
    //     const distanceToBottomLeft = Math.sqrt(x ** 2 + (windowHeight - y) ** 2);
    //     const distanceToBottomRight = Math.sqrt(
    //         (windowWidth - x) ** 2 + (windowHeight - y) ** 2
    //     );

    //     // Find the closest corner
    //     const closestCorner = Math.min(
    //         distanceToTopLeft,
    //         distanceToTopRight,
    //         distanceToBottomLeft,
    //         distanceToBottomRight
    //     );

    //     // Snap to the closest corner
    //     if (closestCorner === distanceToTopLeft) {
    //         setPosition({ top: 8, left: 8, right: 'unset', bottom: 'unset' });
    //     } else if (closestCorner === distanceToTopRight) {
    //         setPosition({ top: 8, right: 8, left: 'unset', bottom: 'unset' });
    //     } else if (closestCorner === distanceToBottomLeft) {
    //         setPosition({ bottom: 8, left: 8, right: 'unset', top: 'unset' });
    //     } else if (closestCorner === distanceToBottomRight) {
    //         setPosition({ bottom: 8, right: 8, left: 'unset', top: 'unset' });
    //     }
    // };

    return (
        <motion.button
            drag
            dragElastic={0.5}
            dragMomentum={false}
            // onDragEnd={handleDragEnd}
            style={{ position: 'fixed', ...position }}
            className="fixed w-12 h-12 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full shadow-lg flex items-center justify-center z-50"
            onClick={() => togglePlayPause()}
        >
            {isPlaying ? 
                <FontAwesomeIcon icon={faVolumeLow} className="text-lg" />:
                <FontAwesomeIcon icon={faVolumeMute} className="text-lg" />
            }
        </motion.button>
    )
}

export default FloatingMusic;