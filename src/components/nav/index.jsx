'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../animate';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';
import data from '@/utils/data';

const links = [
  {
    title: "Home",
    href: "/",
    src: data.testImage
  },
  {
    title: "Properties",
    href: "/properties",
    src: "/images/bandstand.png"
  },
  {
    title: "About Us",
    href: "/about",
    src: "/images/bandstand.png"
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "/images/bandstand.png"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "/images/bandstand.png"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}