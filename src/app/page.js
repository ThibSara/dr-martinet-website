'use client'
import styles from './page.module.scss'
import useMousePosition from './utils/useMousePosition';
import {motion} from 'framer-motion';
import {useState} from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = useMousePosition();
  const size = isHovered ? 200: 40;

  return (
<main className = {styles.main} >
  <motion.div className={styles.mask}
  animate={{WebkitMaskPosition : `${x - size/2}px ${y- size/2}px`,
  WebkitMaskSize: `${size}px`
}}
  transition={{type:"tween",ease:"backOut",duration:0.5}}>
<p onMouseEnter={()=> {setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>BDSM Leather Goods
</p>
  </motion.div>
  <div className={styles.body}>
        <p>Dr<span> Martinet</span></p>
      </div>
  </main>
  );
}
