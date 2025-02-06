import { createContext, useContext, useEffect, useState } from 'react';
import Song from '../assets/song.mp3';

//PRELOAD
// import GroupLogo from '../assets/logoGroup.png';
// import Background from '../assets/bg-chat.png';
// import Stiker from '../assets/stiker.png';
// import Maps from '../assets/maps.png';
// import DC from '../assets/dress.jpg';
// import Video from '../assets/video.mp4';
// import Iuran from '../assets/iuran.jpg';
// import Image1 from '../assets/1.png';
// import Image2 from '../assets/2.png';
// import Image3 from '../assets/3.png';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: false, message: 'Assalamualaikum Wr. Wb. Pengumuman, dengan ini saya mengumumkan pernikahan Leyla dan Aldo. ✨', timestamp: '13.57' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: true, message: 'Pernikahan dilaksanakan di Rumah Sarwono Jakarta Selatan tanggal 15 Februari 2025. 👍', timestamp: '13.59' },
        { isSender: true, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: '📌 Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: true, isSticker: false, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: false, isSticker: true, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: 'Absen siapa aja yang hadir? 😄', timestamp: '14.02' },
    ]);

    const [messageData, setMessageData] = useState([]);
    const [sendLoading, setSendLoading] = useState(false);

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [openSticker, setOpenSticker] = useState(false);
    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [isVideoCall, setIsVideoCall] = useState(false);
    const [isPhoneCall, setIsPhoneCall] = useState(false);

    // MUSIC START
    useEffect(() => {
        const newAudio = new Audio(Song);
        newAudio.loop = true;
        setAudio(newAudio);

        return () => {
            newAudio.pause();
        };
    }, []);

    // MUSIC START
    useEffect(() => {
        if (audio) {
            if (isPlaying) {
                audio.play().catch((error) => console.error('Audio playback failed:', error));
            } else {
                audio.pause();
            }
        }
    }, [audio, isPlaying]);

    useEffect(() => {
        getChat();
    }, [])

    // MUSIC PLAY PAUSE
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    // SCROLL TO TOP
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // SCROLL TO BOTTOM
    const scrollToBottom = (sectionRef) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // SUBMIT FORM
    // const submitForm = async (event) => {
    //     event.preventDefault();
        
    //     const currentTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    //     if (!message.trim()) return;
    
    //     try {
    //         const response = await fetch(`${import.meta.env.API_URL}/invitations`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 isSender: false,
    //                 isImage: false,
    //                 isSticker: false,
    //                 senderName: name,
    //                 isContinue: false,
    //                 message: message,
    //                 timestamp: currentTimestamp,
    //             }),
    //         });
    
    //         if (!response.ok) throw new Error("Failed to send message");
    
    //         const data = await response.json();
    //         console.log("Message sent successfully:", data);
    
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    
    //     setName('');
    //     setMessage('');
    // };    


    // const getChat = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await fetch(`${import.meta.env.VITE_API_URL}/invitations`, {
    //             method: 'GET',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const data = await response.json();
    //         console.log(data)
    //     } catch (err) {
    //         console.error("Error:", err);
    //     }
    // };

    // SUBMIT FORM
    
    const submitForm = async (event) => {
        event.preventDefault();
        setSendLoading(true)
    
        const currentTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
        if (!message.trim()) return;
    
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: 1,
                    sender_name: name,
                    is_sender: false,
                    message_data: {
                        isImage: false,
                        isSticker: false,
                        isContinue: false,
                        message: message,
                        timestamp: currentTimestamp,
                    }
                }),
            });
    
            if (!response.ok) throw new Error("Failed to send message");
    
            const data = await response.json();
            getChat();
    
        } catch (error) {
            console.error("Error:", error);
        }
    
        setName('');
        setMessage('');
    };
    
    const getChat = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/messages/1`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMessageData(data);
        } catch (err) {
            console.error("Error:", err);
        } finally {
            setSendLoading(false);
        }
    };

    return (
        <UserContext.Provider
        value={{ 
            messages, 
            setMessages, 
            name, 
            setName, 
            message, 
            setMessage, 
            submitForm, 
            scrollToTop, 
            scrollToBottom, 
            openSticker, 
            setOpenSticker, 
            isPlaying, 
            setIsPlaying, 
            togglePlayPause, 
            isVideoCall, 
            setIsVideoCall, 
            isPhoneCall, 
            setIsPhoneCall, 
            getChat,
            messageData,
            setMessageData,
            sendLoading,
            setSendLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
