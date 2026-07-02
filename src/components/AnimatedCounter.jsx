import { useEffect, useState } from "react";

function AnimatedCounter({ target }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;

        // If target is 0, no need to animate
        if (target === 0) {
            setValue(0);
            return;
        }

        const duration = 1000; // 1 second animation (better visibility)
        const steps = 60; // smoother animation
        const increment = target / steps;

        const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
                start = target;
                clearInterval(timer);
            }

            setValue(Math.round(start));
        }, duration / steps);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span className="counter-animate">
            {value}
        </span>
    );
}

export default AnimatedCounter;