import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dot   = useRef(null)
  const ring  = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => ring.current?.classList.add('cursor--hover')
    const onLeave = () => ring.current?.classList.remove('cursor--hover')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    raf = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor__dot"  />
      <div ref={ring} className="cursor__ring" />
    </>
  )
}
