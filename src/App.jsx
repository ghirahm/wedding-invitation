import './App.css'

//Components
import SplashScreen from './pages/SplashScreen';
import JoinScreen from './pages/JoinScreen';
import GroupChat from './pages/GroupChat';

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router';
import VideoCall from './pages/VideoCall';
import GroupDescription from './pages/GroupDescription';
import PhoneCall from './pages/PhoneCall';

import { UserProvider } from './context/UserContext';
import MediaPage from './pages/MediaPage';
import FloatingMusic from './components/FloatingMusic';

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
      <RouterProvider router={router} />
        <FloatingMusic/>
    </UserProvider>
  );
}

export default App;