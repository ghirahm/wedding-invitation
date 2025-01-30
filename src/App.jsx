import './App.css'
import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router';

//Components
import { UserProvider } from './context/UserContext';

const SplashScreen = lazy(() => import ('./pages/SplashScreen'))
const JoinScreen = lazy(() => import ('./pages/JoinScreen'))
const GroupChat = lazy(() => import('./pages/GroupChat'))
const GroupDescription = lazy(() => import('./pages/GroupDescription'))
const MediaPage = lazy(() => import('./pages/MediaPage'))
const VideoCall = lazy(() => './pages/VideoCall')
const PhoneCall = lazy(() => './pages/PhoneCall')
const FloatingMusic = lazy(() => './component/FloatingMusic')

// import SplashScreen from './pages/SplashScreen';
// import JoinScreen from './pages/JoinScreen';
// import GroupChat from './pages/GroupChat';
// import GroupDescription from './pages/GroupDescription';
// import MediaPage from './pages/MediaPage';
// import VideoCall from './pages/VideoCall';
// import PhoneCall from './pages/PhoneCall';
// import FloatingMusic from './components/FloatingMusic';
import Loading from './components/Loading';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<SplashScreen />} />
            <Route path='/join' element={<JoinScreen />} />
            <Route path='/group-chat' element={<GroupChat />} />
            <Route path='/description' element={<GroupDescription />} />
            <Route path='/video-call' element={<VideoCall />} />
            <Route path='/phone-call' element={<PhoneCall />} />
            <Route path='/media' element={<MediaPage />} />
        </Route>
    )
)

function App() {

    return (

        <UserProvider>
            <Suspense fallback={<Loading/>}>
                <RouterProvider router={router} />
                <FloatingMusic />
            </Suspense>
        </UserProvider>
    );
}

export default App;