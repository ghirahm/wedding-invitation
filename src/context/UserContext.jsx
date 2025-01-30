import { createContext, useContext, useEffect, useState } from 'react';
import Song from '../assets/song.mp3';


//PRELOAD
// import GroupLogo from '../assets/logoGroup.png';
// import Background from '../assets/bg-chat.png';
// import Stiker from '../assets/stiker.png';
// import Maps from '../assets/maps.png';
// import DC from '../assets/dress.jpg'
// import Video from '../assets/video.mp4';
// import Iuran from '../assets/iuran.jpg';
// import Image1 from '../assets/1.png'
// import Image2 from '../assets/2.png'
// import Image3 from '../assets/3.png'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: false, message: 'Assalamualaikum Wr. Wb. Pengumuman, dengan ini saya mengumumkan pernikahan Leyla dan Aldo. ✨', timestamp: '13.57' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: true, message: 'Pernikahan dilaksanakan di Rumah Sarwono Jakarta Selatan tanggal 15 Februari 2025. 👍', timestamp: '13.59' },
        { isSender: true, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: '📌 Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: true, isSticker: false, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: false, isSticker: true, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: 'Absen siapa aja yang hadir? 😄', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Reza', isContinue: false, message: 'Happy wedding! Semoga ini menjadi awal dari kebahagiaan yang abadi. Selalu saling mencintai dan melengkapi ya! ✨', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Ichsan', isContinue: false, message: 'Gokil mantap, ga sabar mau nyobain zuppa soup!', timestamp: '14.03' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Risa', isContinue: false, message: 'Selamat menempuh hidup baru! Semoga cinta, kebahagiaan, dan kebersamaan selalu menjadi bagian dari perjalanan kalian. Semoga rumah tangga yang dibangun dipenuhi berkah dan kasih sayang. 💕', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Fatchur', isContinue: false, message: 'Semoga yang disemogakan tersemogakan, samawa sampai akhir hayat <3', timestamp: '14.02' },
    ]);

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [openSticker, setOpenSticker] = useState(false);
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [isVideoCall, setIsVideoCall] = useState(false);
    const [isPhoneCall, setIsPhoneCall] = useState(false);

    useEffect(() => {
        const newAudio = new Audio(Song);
        newAudio.loop = true;
        setAudio(newAudio);

        return () => {
            newAudio.pause();
        };
    }, []);

    useEffect(() => {
        if (audio) {
            if (isPlaying) {
                audio.play().catch((error) => console.error('Audio playback failed:', error));
            } else {
                audio.pause();
            }
        }
    }, [audio, isPlaying]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = (sectionRef) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const submitForm = (event) => {
        event.preventDefault();

        const currentTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                isSender: false,
                isImage: false,
                isSticker: false,
                senderName: name,
                isContinue: false,
                message: message,
                timestamp: currentTimestamp,
            },
        ]);

        setName('');
        setMessage('');
    };

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <UserContext.Provider value={{ messages, setMessages, name, setName, message, setMessage, submitForm, scrollToTop, scrollToBottom, openSticker, setOpenSticker, isPlaying, setIsPlaying, togglePlayPause, isVideoCall, setIsVideoCall, isPhoneCall, setIsPhoneCall }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
