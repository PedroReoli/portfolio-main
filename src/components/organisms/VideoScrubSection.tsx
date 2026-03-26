import { useRef, useEffect, useState } from "react"
import { useScroll, useTransform, useMotionValueEvent, motion, useSpring } from "framer-motion"

export default function VideoScrubSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState(0)

  // Track the scroll progress exactly over the height of this 300vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Add spring physics to smooth the raw scroll value. 
  // This achieves a cinematic, fluid scrubbing effect without strictly needing an all-keyframe encoded video.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  })

  // We map the 0-1 smooth progress to the total video duration.
  const videoTime = useTransform(smoothProgress, [0, 1], [0, duration || 5])

  // Continually update playback time 
  useMotionValueEvent(videoTime, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      videoRef.current.currentTime = latest
    }
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => setDuration(video.duration)

    // Preload hack: force a play/pause to buffer the first frames on iOS/Safari
    const initVideo = async () => {
      try {
        await video.play()
        video.pause()
        video.currentTime = 0
      } catch (e) {
        // Auto-play block is fine, its purely visual
      }
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    if (video.readyState >= 1) {
      setDuration(video.duration)
      // Small timeout to ensure DOM is ready before play-pause hacking
      setTimeout(initVideo, 100)
    } else {
      video.load()
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [])

  return (
    // We make the outer container very tall (300vh) to generate "scroll distance" length
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#09090b] z-20">
      
      {/* The sticky wrapper locks to the screen while scrolling through the 300vh */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Isolated floating container inside the screen wrapper */}
        <motion.div 
          className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Strictly 16:9 aspect ratio to match the original video without cropping */}
          <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 ring-1 ring-zinc-800/50 bg-[#09090b]">
            {/* The Video Element */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-contain"
              src="/a-cartao.mp4"
              muted
              playsInline
              preload="auto"
            />
            {/* Liquid glass light reflection border */}
            <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl md:rounded-3xl pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
