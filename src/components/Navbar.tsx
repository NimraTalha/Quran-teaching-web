import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Import Image component from Next.js
import styles from '@/Style/Navbar.module.css';

const Navbar: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/Images/logo.png" 
            alt="Quran Learning Logo" 
            width={150} // specify the width
            height={150} // specify the height
            layout="intrinsic" // or "responsive" for automatic resizing
          />
        </Link> {/* Closing Link tag */}
      </div>
      
      {/* Hamburger icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
