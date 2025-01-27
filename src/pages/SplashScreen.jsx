import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Logo from '../assets/logoSplashScreen.png';
import { motion } from 'framer-motion';

export default function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/join');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <section className='h-screen w-full bg-[var(--color-primary)] flex items-center justify-center'>
            <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.8, duration: 2 }}
            viewport={{ once: true, amount: 1 }}
            src={Logo} className='w-[70%] h-auto' alt='Splash Screen Logo' />
        </section>
    );
}