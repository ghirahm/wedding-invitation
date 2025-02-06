
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';

import { motion } from 'framer-motion';

import { useUserContext } from '../context/UserContext.jsx';

import BubbleChat from '../components/BubbleChat';

import GroupLogo from '../assets/logoGroup.png';
import Background from '../assets/bg-chat.png';
import Stiker from '../assets/stiker.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faClose } from '@fortawesome/free-solid-svg-icons';

export default function GroupChat() {

    // Context
    const { messages, name, message, setName, setMessage, submitForm, scrollToTop, scrollToBottom, openSticker, setOpenSticker, isPlaying, togglePlayPause, isVideoCall, isPhoneCall, messageData, sendLoading, setSendLoading } = useUserContext();

    // Scroll Function
    const messagesEndRef = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        scrollToTop();
    }, [])

    useEffect(() => {
        if (hasScrolled) {
            scrollToBottom(messagesEndRef);
        } else {
            setHasScrolled(true);
        }
    }, [messageData])

    const dropdownRef = useRef(null);
    const stickerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (stickerRef.current && !stickerRef.current.contains(event.target)) {
                setOpenSticker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Dropdown Function
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
        <main className='w-full h-fit relative'>

            {/* Button Floating Scroll To Top */}
            <div className='fixed bottom-20 right-8 flex flex-col items-center gap-2 z-50'>
                <button
                    className=" w-8 h-8 bg-white text-[var(--color-secondary)] rounded-full shadow-lg flex items-center justify-center transition duration-30"
                    onClick={() => scrollToTop()}
                >
                    <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                </button>
            </div>

            {/* Section Header Chat Group */}
            <header className="fixed top-0 w-full h-[96px] flex flex-row justify-between items-center bg-[var(--color-primary)] px-2 gap-4 z-30">
                <div className="flex flex-row items-center justify-start gap-2 w-[70%]">

                    {/* Button Back */}
                    <Link to='/join' className="w-[24px] h-[24px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[var(--color-tertiary)]">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </Link>

                    {/* Button Group Description */}
                    <Link to='/description' onClick={() => { if (isPlaying) { togglePlayPause(); } }} className='bounce bounce-delay-1 w-full flex flex-row items-center justify-start gap-2'>
                        <div className="w-[20%] h-[20%] rounded-full overflow-hidden">
                            <img src={GroupLogo} alt="Grup Warga Sukahati" className='w-full h-full' />
                        </div>
                        <div className='flex flex-col items-start justify-center w-[70%]'>
                            <h1 className='text-[var(--color-tertiary)] text-xl font-bold truncate'>
                                Warga Sukahati
                            </h1>
                            <p className='text-[var(--color-tertiary)] text-sm font-normal truncate'>
                                Pak RT, Pak Camat, ...
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-row items-center justify-end gap-4 w-[30%]">
                    {/* Button Video Call */}
                    <Link to='/video-call' onClick={() => { if (isPlaying) { togglePlayPause(); } }} className='h-[24px] bounce bounce-delay-2 relative'>
                        {
                            !isVideoCall &&
                            <div className="absolute -top-2 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--color-shadow)] animate-pulse"></div>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[var(--color-tertiary)] h-full"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                    </Link>

                    {/* Button Phone Call */}
                    <Link to='/phone-call' onClick={() => { if (isPlaying) { togglePlayPause(); } }} className='h-[24px] bounce bounce-delay-3 relative'>
                        {
                            !isPhoneCall &&
                            <div className="absolute -top-2 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--color-shadow)] animate-pulse"></div>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[var(--color-tertiary)] h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                    </Link>

                    {/* Button Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <div className="h-[24px] cursor-pointer" onClick={toggleDropdown}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="text-[var(--color-tertiary)] h-full"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                />
                            </svg>
                        </div>
                        <div className={`absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                            <ul className="py-2 flex flex-col">
                                <Link to='/description' onClick={() => { if (isPlaying) { togglePlayPause(); } setIsOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Deskripsi Grup</Link>
                                <Link to='/join' onClick={() => { setIsOpen(false) }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Keluar dari Grup</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Background Chat */}
            <div className='fixed w-full h-screen bg-[var(--color-secondary)] z-0'>
                <img src={Background} className="w-full h-full" />
            </div>

            {/* Message Bubble Chat Map */}
            <div className='w-full h-fit z-20 py-[120px]'>
                <div className='w-full flex flex-col gap-2 z-10 px-4'>
                    {
                        messages.map((m, index) => (
                            <motion.div key={index} className='w-full z-20'
                                initial={{
                                    opacity: 0,
                                    y: 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        delay: 0.2,
                                        duration: 1
                                    }
                                }}
                                viewport={{
                                    once: true,
                                    amount: 1
                                }}>
                                <BubbleChat isSender={m.isSender} isSticker={m.isSticker} isImage={m.isImage} senderName={m.senderName} isContinue={m.isContinue} message={m.message} timestamp={m.timestamp} />
                            </motion.div>
                        ))
                    }
                    {messageData &&
                        messageData.map((m, index) => (
                            <motion.div key={index} className='w-full z-20'
                                initial={{
                                    opacity: 0,
                                    y: 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        delay: 0.2,
                                        duration: 1
                                    }
                                }}
                                viewport={{
                                    once: true,
                                    amount: 1
                                }}>
                                <BubbleChat isSender={m.isSender} isSticker={m.message_data.isSticker} isImage={m.message_data.isImage} senderName={m.sender_name} isContinue={m.message_data.isContinue} message={m.message_data.message} timestamp={m.message_data.timestamp} />
                            </motion.div>
                        ))
                    }
                    <div ref={messagesEndRef}></div>
                </div>
            </div>

            {/* Sticker Details */}
            <div className={`fixed bottom-0 w-full h-[240px] rounded-t-3xl bg-[var(--color-primary)] z-50 p-8 flex flex-col items-center justify-start gap-4 transition-transform duration-300 ${openSticker ? "translate-y-0" : "translate-y-full"}`} ref={stickerRef}>
                <button onClick={() => setOpenSticker(false)} className='w-full flex flex-row items-center justify-end'>
                    <FontAwesomeIcon icon={faClose} className='w-[24px] h-[24px] text-[var(--color-tertiary)]'></FontAwesomeIcon>
                </button>
                <div className='w-[70%]'>
                    <img src={Stiker} alt='Sticker' />
                </div>
                <p className='text-sm text-[var(--color-tertiary)]'>Dress Code ada di deskripsi grup, cuy!</p>
            </div>

            {/* Background Cut Footer */}
            <div className='fixed w-full h-[72px] z-30 bg-[var(--color-secondary)] bottom-0 overflow-hidden'>
                <img src={Background} className="absolute w-full h-screen bottom-0" />
            </div>

            {/* Button Form Chat */}
            <footer className='fixed bottom-0 w-full h-[72px] z-40 flex items-center bg-transparent'>
                <form onSubmit={(event) => submitForm(event)} className='w-full flex flex-row justify-center items-center gap-1 z-30'>
                    <input value={name} onChange={(e) => setName(e.target.value)} required className='px-4 py-2 rounded-full w-[30%] border border-gray-300' type="name" placeholder="Name..."></input>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} required className='px-4 py-2 rounded-full w-[50%] border border-gray-300' type="text" placeholder="Messages..."></input>
                    <button type="submit" className="w-[42px] h-[42px] bg-[var(--color-shadow)] rounded-full flex items-center justify-center">
                        {
                            sendLoading ?
                                <svg className='animate-spin size-4 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white">
                                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                </svg>
                        }
                    </button>
                </form>
            </footer>
        </main>
    );
}