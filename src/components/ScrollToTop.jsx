import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Issue : react-router scrolls to the position of previously scrolled page on every transition
// solution :=> Below Component will always scroll to top after shifting from one page to another

const ScrollToTop = () => {
    const history = useHistory()
    useEffect(() => {
        const unlisten = history.listen((location, action) => {
            if (action !== 'POP') {
                window.scrollTo(0, 0)
            }
        })
        return () => unlisten()
    }, [])

    return (null)
}

export default ScrollToTop;