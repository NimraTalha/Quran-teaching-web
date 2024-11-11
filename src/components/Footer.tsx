import styles from '@/Style/Footer.module.css';
import { FaFacebook } from 'react-icons/fa'; // Importing the Facebook icon from react-icons

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Quran Learning. All rights reserved.</p>
      {/* Social media icons section */}
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/qurante" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> {/* Facebook icon */}
        </a>
        {/* You can add more social icons here (e.g., Twitter, Instagram) */}
      </div>
    </footer>
  );
};

export default Footer;
