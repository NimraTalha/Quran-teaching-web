"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '@/Style/Home.module.css';  // Adjust the path if needed
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);  // TypeScript type for state

  useEffect(() => {
    // Set the "isLoaded" state to true after a short delay to trigger background image opacity change
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);  // Delay in milliseconds for the effect

    return () => clearTimeout(timer);  // Clean up the timeout when the component unmounts
  }, []);

  return (
    <div className={`${styles.container} ${isLoaded ? 'loaded' : ''}`}>
      <Head>
        <title>Global Quran Academy - Learn Quran Online</title>
        <meta name="description" content="Global Quran Academy provides Quranic education and Language classes online..." />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.backgroundImage}></div> {/* Background image initially hidden */}

        <section className={styles.introSection}>
          <div className={styles.details}>
            <h1>Welcome to Our Quran Academy</h1>
            <p>We have been providing Quranic education for over 10 years.</p>
            <p>Classes available via Skype and Zoom.</p>
            <p>We offer classes worldwide, including USA, UK, Canada, UAE, and more.</p>
          </div>

          <motion.div className={styles.imageWrapper} animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Image src="/Images/teacher.jpg" alt="Teacher" width={250} height={180} />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
