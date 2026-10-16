import { motion } from 'framer-motion'
import { motionCfg } from '../settings.js'

export default function Reveal({ children, delay = 0, className = '' }) {
  if (motionCfg.duration === 0) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: motionCfg.distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: motionCfg.duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
