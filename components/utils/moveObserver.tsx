// import type { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'

export const MoveObserver = (props: any) => {
  const [inView, setInView] = useState(false) //state change loads image.
  const objRef = useRef() //same as document.querySelector('img')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            obs.disconnect() //disconnect once in view.
          }
        }
      },
      {
        // rootMargin: '1000px',  //consider isIntersecting 1000px before item reaches viewport.
      }
    )
    if (objRef.current) {
      observer.observe(objRef?.current) //attach observer to 'objRef'
    }
    return () => {
      observer.disconnect() //when unmount disconnect observer
    }
  }, [])

  return <>{props.children}</>
}
