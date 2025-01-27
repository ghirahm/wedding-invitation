import { createContext, useContext, useEffect, useState, useRef } from 'react';
import Song from '../assets/song.mp3'


// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: false, message: 'Assalamualaikum Wr. Wb. Pengumuman, dengan ini saya mengumumkan pernikahan Leyla dan Aldo.', timestamp: '13.57' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Camat', isContinue: true, message: 'Pernikahan dilaksanakan di Rumah Sarwono Jakarta Selatan tanggal 15 Februari 2025.', timestamp: '13.59' },
        { isSender: true, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: true, isSticker: false, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: true, isImage: false, isSticker: true, senderName: 'Pak Lurah', isContinue: true, message: 'Lokasinya di sini ya!', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Pak Lurah', isContinue: false, message: 'Absen siapa aja yang hadir?', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Reza', isContinue: false, message: 'Selamat Selimit', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Ichsan', isContinue: false, message: 'Gokil mantap, ga sabar mau nyobain zuppa soup!', timestamp: '14.03' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Risa', isContinue: false, message: 'Keren banget kalian!', timestamp: '14.02' },
        { isSender: false, isImage: false, isSticker: false, senderName: 'Fatchur', isContinue: false, message: 'Semoga yang disemogakan tersemogakan, samawa sampai akhir hayat <3', timestamp: '14.02' },
    ]);

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [openSticker, setOpenSticker] = useState(false);

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
    }

    const [audio] = useState(new Audio(Song));
    const [isPlaying, setIsPlaying] = useState(false)
    audio.loop = true;

    useEffect(() => {
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause()
        } return () => {
            audio.play()
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };


    return (
        <UserContext.Provider value={{ messages, setMessages, name, setName, message, setMessage, submitForm, scrollToTop, scrollToBottom, openSticker, setOpenSticker, isPlaying, setIsPlaying, togglePlayPause }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
