import { useNavigate } from 'react-router';
import GroupLogo from '../assets/logoGroup.png';

import { motion } from 'framer-motion';
import { useUserContext } from '../context/UserContext';

import Leyla from '../assets/1.jpg';
import Aldo from '../assets/2.jpg';
import RT from '../assets/3.jpg';

export default function JoinScreen() {
    const navigate = useNavigate();

    const { togglePlayPause, isPlaying } = useUserContext();

    return (
        <section className="h-screen w-full bg-[var(--color-secondary)] flex flex-col items-center justify-center gap-[12px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.2, duration: 1 }}
                viewport={{ once: true, amount: 1 }}
                className="w-[240px] h-[240px] rounded-full overflow-hidden">
                <img src={GroupLogo} alt="Grup Warga Sukahati" className='w-full h-full' />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.4, duration: 1 }}
                viewport={{ once: true, amount: 1 }}
                className="text-[var(--color-primary)] stroke-[var(--color-tertiary)] text-3xl font-extrabold">Grup Warga Sukahati</motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.6, duration: 1 }}
                viewport={{ once: true, amount: 1 }}
                className='text-[var(--color-primary)] text-md font-normal'>Created by Aldo Giustino dan Leyla Aderina</motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.8, duration: 1 }}
                viewport={{ once: true, amount: 1 }}
                className='w-full flex flex-row items-center justify-center  relative'>
                <div className='w-[72px] h-[72px] rounded-full border-2 border-[var(--color-tertiary)] bg-[var(--color-primary)] z-10 overflow-hidden'>
                    <img src={Leyla} alt='Profile Image' className='w-full h-full object-cover' />
                </div>
                <div className='w-[72px] h-[72px] rounded-full border-2 border-[var(--color-tertiary)] bg-[var(--color-primary)] -ml-[24px] z-20 overflow-hidden'>
                    <img src={Aldo} alt='Profile Image' className='w-full h-full object-cover' />
                </div>
                <div className='w-[72px] h-[72px] rounded-full border-2 border-[var(--color-tertiary)] bg-[var(--color-primary)] -ml-[24px] z-30 overflow-hidden'>
                    <img src={RT} alt='Profile Image' className='w-full h-full object-cover' />
                </div>
                <div className='w-[72px] h-[72px] rounded-full border-2 border-[var(--color-tertiary)] bg-[var(--color-shadow)] -ml-[24px] z-40 flex justify-center items-center text-[var(--color-primary)] text-xl '>50+</div>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 1, duration: 1 }}
                viewport={{ once: true, amount: 1 }}
                onClick={() => { navigate('/group-chat'); if (!isPlaying) { togglePlayPause(); } }} className='w-[80%] mt-4 font-semibold p-4 border-2 border-[var(--color-tertiary)] rounded-full bg-[var(--color-accent)]'>Join Group</motion.button>
                
        </section>
    );
}