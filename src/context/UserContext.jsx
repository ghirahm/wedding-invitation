import { createContext, useContext, useEffect, useState } from 'react';
import Song from '../assets/song.mp3';

import Undangan from '../assets/undangan.jpg';
import Poster from '../assets/poster.jpg';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: false, message: 'Assalamualaikum Wr. Wb warga Kabupaten Suka Hati.. Pengumuman 📣 dengan ini saya mengumumkan hajatan pernikahan salah satu warga kita Leyla dan Aldo. 🌷', timestamp: '13.57' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: true, message: 'Pernikahan dilaksanakan di Rumah Sarwono Jakarta Selatan, Sabtu 15 Februari 2025. 👍 bisa dilihat di undangan berikut ini', timestamp: '13.59' },
        { isSender: false, isImage: true, imageLink: Undangan, isSticker: false, senderName: 'Pak Camat', isContinue: false, message: '📌 Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: '📌 Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: true, isSticker: false, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: false, isSticker: true, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: false, message: 'Sekedar mengingatkan🙏 bakal ada nobar juga mulainya jam 18.30 tenggggg! Jadi usahakan jangan telat ya warga..', timestamp: '14.04' },
        { isSender: false, isImage: true, imageLink: Poster, isSticker: false, senderName: 'Pak Camat', isContinue: false, message: '', timestamp: '14.04' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: 'Absen siapa aja yang hadir? 😄', timestamp: '14.05' },
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

    const [imagePop, setImagePop] = useState();

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

    const handleImagePop = (imageLink) => {
        setImagePop(imageLink);
    };
    
    const handleCloseImagePop = () => {
        setImagePop(null);
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
            setSendLoading,
            imagePop,
            setImagePop,
            handleImagePop,
            handleCloseImagePop }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
