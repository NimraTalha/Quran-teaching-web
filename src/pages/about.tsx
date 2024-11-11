"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '@/Style/About.module.css';
import Head from 'next/head'; // Import next/head for SEO

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* SEO Tags in the Head */}
      <Head>
        <title>About Our Quran Learning Program</title>
        <meta
          name="description"
          content="Learn about our Quran learning program, including Quran reading with Tajweed, Urdu language, and Arabic speaking and writing from basic to advanced levels."
        />
        <meta name="keywords" content="Quran learning, Tajweed, Urdu language, Arabic speaking, Quran lessons, Quran reading, online Quran classes" />
        <meta name="author" content="Maham Talha" />
        <meta property="og:title" content="About Our Quran Learning Program" />
        <meta
          property="og:description"
          content="Our Quran learning program offers a range of courses from Quran reading with Tajweed to Arabic speaking and writing. Flexible timings and affordable pricing."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/about" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourdomain.com/about" />
      </Head>

      <Navbar />
      <div className={styles.backgroundImage}></div> {/* Background image */}
      <main className={styles.main}>
        <h2 className={styles.title}>About Our Quran Learning Program</h2>
        <section className={styles.coursesSection}>
          <h3>Our Courses</h3>
          <div className={styles.courseCard}>
            <h4>Quran Learning with Tajweed</h4>
            <p>Learn to read the Quran with proper Tajweed (pronunciation and rules) to recite it beautifully and correctly.</p>
            <span className={styles.price}>$12 per hour</span>
          </div>
          <div className={styles.courseCard}>
            <h4>Urdu Language (Basic to Advanced)</h4>
            <p>Master the Urdu language from basic to advanced levels, including reading, writing, and conversation skills.</p>
            <span className={styles.price}>$12 per hour</span>
          </div>
          <div className={styles.courseCard}>
            <h4>Arabic Speaking and Writing (Basic to Advanced)</h4>
            <p>Learn Arabic from basic to advanced levels, focusing on speaking and writing skills for better communication and Quranic understanding.</p>
            <span className={styles.price}>$12 per hour</span>
          </div>
        </section>
        
        <section className={styles.classesSection}>
          <h3>Class Details</h3>
          <p>We offer flexible timings and class durations, including one-on-one and group sessions.</p>
          <ul className={styles.classDetails}>
            <li>30-minute session: $5</li>
            <li>1-hour session: $12</li>
            <li>Group sessions: $8 per hour</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
