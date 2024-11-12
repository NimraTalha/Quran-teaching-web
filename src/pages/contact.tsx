import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '@/Style/contact.module.css';
import Head from 'next/head'; // Import next/head for SEO

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles.backgroundImage}></div>

      {/* Add SEO Meta Tags in the Head */}
      <Head>
        <title>Contact Us - Quran Learning</title>
        <meta
          name="description"
          content="Get in touch with us for Quran learning classes, pricing, and schedule. Contact us via phone, email, or WhatsApp for more details."
        />
        <meta name="keywords" content="Quran learning, Quran classes, contact, WhatsApp, email, schedule, pricing" />
        <meta name="author" content="Maham Talha" />
        <meta property="og:title" content="Contact Us - Quran Learning" />
        <meta
          property="og:description"
          content="Reach out to us for personalized Quran learning classes. Contact us via email, phone, or WhatsApp."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/contact" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourdomain.com/contact" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <section className={styles.contactSection}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +923349766531</p>
            <p><strong>Email:</strong> namra.talha123@gmail.com</p>
            <p><strong>WhatsApp:</strong> +923349766531</p>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h3>Get in Touch</h3>
            <form
              action="https://getform.io/f/agddpxlb"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="hidden" name="_gotcha" style={{ display: "none" }} />
              <input
                className={styles.inputField}
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className={styles.inputField}
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                className={styles.inputField}
                type="text"
                name="whatsapp"
                placeholder="Your WhatsApp Number"
                required
              />
              <textarea
                className={styles.textArea}
                name="message"
                placeholder="Your Message"
                rows={4}
                required
              ></textarea>
              <div>
                <h4 className={styles.h4Class}>Class Schedule & Pricing</h4>
                <ul className={styles.contactList}>
                  <li className={styles.contactListItem}>30-minute Mo-Fri  per session: $5</li>
                  <li className={styles.contactListItem}>1-hour Mon-Fri per session: $10</li>
                  <li className={styles.contactListItem}>Group Mon-Fri per session: $8 per hour</li>
                </ul>
              </div>
              <button className={styles.submitButton} type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer will be styled through its own CSS */}
      <Footer />
    </div>
  );
};

export default Contact;
