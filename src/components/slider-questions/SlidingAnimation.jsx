import React from 'react'
import { Spring } from 'react-spring';

const SlidingAnimation = ({ children }) => {
    return (
        <Spring
            from={{ width: 0 }}
            to={{ opacity: 100, marginTop: 0 }}
            config={{delay: 1000, duration: 10000}}
        >
            {
                props => (
                    <div className="flex h-full justify-center items-center">
                        {children}
                    </div>
                )
            }
        </Spring>
    )
}

export default SlidingAnimation