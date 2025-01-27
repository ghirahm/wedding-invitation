import { Link } from 'react-router';
import { useRef, useState } from 'react';
import GroupLogo from '../assets/logoGroup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faNoteSticky, faShirt, faSmile, faVideo } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';

import DC from '../assets/dress.jpg'
import Video from '../assets/video.mp4';

import Image1 from '../assets/1.png'
import Image2 from '../assets/2.png'
import Image3 from '../assets/3.png'

const GroupDescription = () => {

    const { scrollToTop } = useUserContext();

    const images = {
        "Pre-Wedding": [
            Image1,
            Image2,
            Image3,
            Image1,
        ]
    }

    useEffect(() => {
        scrollToTop();
    }, [])

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);


    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleLoadedData = () => {
        setIsLoaded(true); // Video is ready to play
    };

    return (
        <main className='w-full h-fit bg-[var(--color-primary)] flex flex-col gap-2'>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { type: "spring", delay: 0.2, duration: 1 } }}
                viewport={{ once: true, amount: 1 }}
                className='w-full h-fit flex flex-col bg-[var(--color-primary)] border-b border-[var(--color-tertiary)] justify-start py-4 px-4 gap-4'>
                <div
                    className='w-full h-fit flex flex-row justify-between items-start gap-4'>
                    <Link to='/group-chat' className="w-[24px] h-[24px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[var(--color-tertiary)]">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <div className="w-[160px] h-[160px] rounded-full overflow-hidden">
                        <img src={GroupLogo} alt="Grup Warga Sukahati" className='w-full h-full' />
                    </div>
                    <div className='w-[24px] h-[24px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[var(--color-tertiary)] h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </div>
                </div>
                <div className='w-full h-fit flex flex-col text-center'>
                    <h1 className="text-[var(--color-tertiary)] text-3xl font-bold">Grup Warga Sukahati</h1>
                    <h2 className='text-[var(--color-tertiary)] text-md font-normal'>Hajatan Cinta Leyla dan Aldo</h2>
                </div>
                <div className='w-full grid grid-cols-4 h-fit gap-2'>
                    <Link to='/phone-call' className='relative w-full h-[72px] rounded-xl flex flex-col items-center justify-center border-[1px] border-[var(--color-tertiary)] active:scale-95'>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--color-shadow)] animate-pulse"></div>
                        <div className='w-[24px] h-[24px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[var(--color-shadow)] h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <p className='text-[var(--color-tertiary)] text-xs font-normal pt-2'>Panggilan</p>
                    </Link>
                    <Link to='/video-call' className='relative w-full h-[72px] rounded-xl flex flex-col items-center justify-center border-[1px] border-[var(--color-tertiary)] active:scale-95'>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[var(--color-shadow)] animate-pulse"></div>
                        <div className='w-[24px] h-[24px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-[var(--color-shadow)] h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <p className='text-[var(--color-tertiary)] text-xs font-normal pt-2'>Video</p>
                    </Link>
                    <Link to='/media' className='w-full h-[72px] rounded-xl flex flex-col items-center justify-center border-[1px] border-[var(--color-tertiary)]'>
                        <div className='w-[24px] h-[24px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[var(--color-shadow)] h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>
                        </div>
                        <p className='text-[var(--color-tertiary)] text-xs font-normal pt-2'>Media</p>
                    </Link>
                    <Link to='https://maps.app.goo.gl/zBNjFE6ffcvgttq98' target="__blank" className='w-full h-[72px] rounded-xl flex flex-col items-center justify-center border-[1px] border-[var(--color-tertiary)]'>
                        <div className='w-[24px] h-[24px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[var(--color-shadow)] h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                        </div>
                        <p className='text-[var(--color-tertiary)] text-xs font-normal pt-2'>Location</p>
                    </Link>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { type: "spring", delay: 0.2, duration: 1 } }}
                viewport={{ once: true, amount: 0.2 }}
                className='w-full h-fit flex flex-col bg-[var(--color-primary)] border-b border-[var(--color-tertiary)] justify-start py-4 px-4 gap-4'>
                <div className='w-full h-fit flex flex-col justify-between items-start gap-4 relative'>
                    <video ref={videoRef}
                        src={Video}
                        className={`w-full rounded-lg ${!isLoaded ? "gradient-loading" : "opacity-100"} duration-300`}
                        autoPlay
                        playsInline
                        onClick={togglePlayPause}
                        onLoadedData={handleLoadedData} />
                    <h2 className='text-[var(--color-tertiary)] text-md font-bold flex items-center gap-2'><FontAwesomeIcon icon={faNoteSticky} className='w-4 h-4' />Hajatan Cinta Leyla & Aldo</h2>
                    <p className='text-[var(--color-tertiary)] text-sm font-normal'>
                        Halo!
                        <br />Karena kalian adalah orang penting yang mengisi hari-hari kami, kami ingin informasikan bahwa kami akan segera menikah! 💖
                        <br /><br />Kami dengan sukacita mengundang kalian untuk merayakan momen bahagia ini bersama kami, pada acara Pernikahan Leyla & Aldo yang akan diselenggarakan pada:
                        <br /><br /><span className='font-bold'>Tanggal: 15 Februari 2025
                            <br />Tempat: Rumah Sarwono, Bekasi</span>
                        <br /><br />Karena acara ini akan diadakan dalam suasana yang lebih intim dan terbatas, kami memohon maaf karena tidak bisa mengundang banyak orang. Hanya keluarga dan sahabat terdekat yang akan hadir.
                        <br /><br />Namun, kami berharap kalian semua bisa mendoakan yang terbaik untuk perjalanan hidup kami bersama, dan semoga pernikahan ini membawa kebahagiaan yang abadi.
                        <br /><br />Dengan penuh cinta,
                        <br />The Bride & Groom, Leyla dan Aldo 💍</p>
                    <h2 className='text-[var(--color-tertiary)] text-md font-bold flex items-center gap-2'><FontAwesomeIcon icon={faShirt} className='w-4 h-4' /> Dress Code</h2>
                    <p className='text-[var(--color-tertiary)] text-sm font-normal'>Tema dresscode gaya tahun 80-an ya!</p>
                    <img src={DC} className='w-full h-auto bg-[var(--color-accent)] rounded-3xl'></img>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { type: "spring", delay: 0.2, duration: 1 } }}
                viewport={{ once: true, amount: 0.5 }}
                className='w-full h-fit flex flex-col bg-[var(--color-primary)] border-b border-[var(--color-tertiary)] justify-start py-4 px-4 gap-4'>
                <div className='w-full h-fit flex flex-col justify-between items-start gap-4'>
                    <Link to='/media' className='w-full flex flex-row justify-between items-center'>
                        <h2 className='text-[var(--color-tertiary)] text-md font-bold flex items-center gap-2'><FontAwesomeIcon icon={faVideo} className='w-4 h-4' />Media, Tautan, Dokumen</h2>
                        <div className='w-4 h-4'><FontAwesomeIcon icon={faAngleRight} className='w-full h-full' /></div>
                    </Link>
                    <div className='w-full flex flex-row'>
                        <div className='flex flex-row overflow-x-auto gap-2 w-full overflow-hidden scrollbar-hide'>
                            {
                                images["Pre-Wedding"].map((src, index) => (
                                    <div key={index} className='w-[200px] h-[200px] bg-[var(--color-secondary)] flex-shrink-0 rounded-lg overflow-hidden'>
                                        <img
                                            src={src}
                                            alt={`${"Pre-Wedding"} ${index + 1}`}
                                            className="w-full h-full object-cover bg-[var(--color-secondary)] hover:scale-105 transition-all duration-300"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { type: "spring", delay: 0.2, duration: 1 } }}
                viewport={{ once: true, amount: 0.2 }}
                className='w-full h-fit flex flex-col bg-[var(--color-primary)] justify-start py-4 px-4 gap-4'>
                <div className='w-full h-fit flex flex-col justify-between items-start gap-4'>
                    <h2 className='text-[var(--color-tertiary)] text-md font-bold flex items-center gap-2'><FontAwesomeIcon icon={faSmile} className='w-4 h-4' />Iuran Warga Suka-Suka Aja</h2>
                    <div className='w-full h-[240px] bg-[var(--color-accent)] rounded-lg'></div>
                </div>
            </motion.section>
        </main>
    )
}

export default GroupDescription;