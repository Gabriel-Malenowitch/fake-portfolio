import { useEffect, useState } from "react"

export const useRandomBackground = ({ time = 500 }) => {
    const [background, setBackground] = useState('')
    
    useEffect(() => {
      let r = 100
      let g = 100
      let b = 100
      const addColors = () => {
        r += Number((Math.random() * 1000).toFixed())
        g += Number((Math.random() * 1000).toFixed())
        b += Number((Math.random() * 1000).toFixed())
        if(r > 255) r = 100
        if(g > 255) g = 100
        if(b > 255) b = 100
        // console.log(`rgb(${r}, ${g}, ${b})`)
        setBackground(`rgb(${r}, ${g}, ${b})`)
      }
      setInterval(addColors, time)
    }, [])

    return background
}