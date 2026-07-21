import { useEffect } from 'react'

export default function useReveal(threshold = 0.12) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible')
                    observer.unobserve(e.target)
                }
            }),
            { threshold }
        )
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [threshold])
}