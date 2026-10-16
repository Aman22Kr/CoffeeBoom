import { useState } from 'react'
import { Coffee } from 'lucide-react'

export default function SafeImg({ src, alt = '', className = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div role="img" aria-label={alt || 'Image unavailable'} className={`flex items-center justify-center bg-roast text-latte/60 ${className}`}>
        <Coffee size={28} />
      </div>
    )
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} {...rest} />
}
