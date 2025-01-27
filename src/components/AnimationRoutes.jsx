import React from 'react'
import { UserProvider } from '../context/userContext';
import { Routes, Route, useLocation } from 'react-router-dom';

//Components
import SplashScreen from '../pages/SplashScreen';
import JoinScreen from '../pages/JoinScreen';
import GroupChat from '../pages/GroupChat';
import VideoCall from '../pages/VideoCall';
import GroupDescription from '../pages/GroupDescription';
import PhoneCall from '../pages/PhoneCall';

import { AnimatePresence } from 'framer-motion';

const AnimationRoutes = () => {
    const location = useLocation();

    return (
        <UserProvider>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<SplashScreen />} />
                <Route path='/join' element={<JoinScreen />} />
                <Route path='/group-chat' element={<GroupChat />} />
                <Route path='/description' element={<GroupDescription />} />
                <Route path='/video-call' element={<VideoCall />} />
                <Route path='/phone-call' element={<PhoneCall />} />
            </Routes>
        </UserProvider>
    )
}

export default AnimationRoutes;