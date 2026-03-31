import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

export default function StackedSection({ 
  children, 
  index, 
  total 
}: { 
  children: ReactNode; 
  index: number; 
  total: number 
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll position of this specific container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when top of this section hits top of viewport
    // End when bottom of this section hits top of viewport (meaning we've scrolled past it)
    offset: ["start start", "end start"]
  })

  // We only want the shrink/fade effect if it's NOT the last section
  const isLast = index === total - 1

  // Scale shrinks from 100% to 85% as we scroll past it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  
  // Fade out a bit to emphasize the next section overlapping
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  // Slight float effect to make it look like it's recessing into the background
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div
      ref={containerRef}
      className={`sticky top-0 w-full bg-[#0a0a0a] flex flex-col justify-center origin-top border-t border-zinc-900/40 shadow-xl`}
      style={{
        zIndex: index, // Lower sections have higher z-index DOM-wise naturally, but let's be explicit
        scale: isLast ? 1 : scale,
        opacity: isLast ? 1 : opacity,
        y: isLast ? 0 : y,
      }}
    >
      {/* We make the inner container max-h-screen so that if it's sticky, we can scroll the content if it overflows */}
      {/* no-scrollbar is a utility we'll add to hide scrollbars */}
      <div className="w-full max-h-[100svh] overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </motion.div>
  )
}
