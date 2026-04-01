import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring config for the inner dot
  const springX = useSpring(cursorX, { damping: 25, stiffness: 400, mass: 0.1 })
  const springY = useSpring(cursorY, { damping: 25, stiffness: 400, mass: 0.1 })

  // Spring config for the outer ring
  const springRingX = useSpring(cursorX, { damping: 15, stiffness: 150, mass: 0.5 })
  const springRingY = useSpring(cursorY, { damping: 15, stiffness: 150, mass: 0.5 })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("cursor-crosshair") ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-crosshair") ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", mouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", mouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[#cef441] mix-blend-difference pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#cef441]/50 mix-blend-difference pointer-events-none z-[9998] hidden sm:block"
        style={{
          x: springRingX,
          y: springRingY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
  )
}
