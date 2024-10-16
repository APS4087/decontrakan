import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../animate';

export default function Body({ links, selectedLink, setSelectedLink }) {
  const getChars = (word) => {
    return word.split("").map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));
  };

  const handleLinkClick = (index, href) => {
    // Close the menu
    setSelectedLink({ isActive: false, index });

    // Use setTimeout to allow for menu animation to complete
    setTimeout(() => {
      window.location.href = href; // Navigate to the link
    }, 300); // Adjust the duration as needed to match your animations
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href} passHref>
            <motion.p
              onMouseOver={() => { setSelectedLink({ isActive: true, index }); }}
              onMouseLeave={() => { setSelectedLink({ isActive: false, index }); }}
              onClick={() => handleLinkClick(index, href)} // Close the menu on link click
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
