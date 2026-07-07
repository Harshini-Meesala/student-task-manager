// components/WelcomeBanner.jsx

import "./WelcomeBanner.css";

function WelcomeBanner() {
    const hour = new Date().getHours();

    let greeting = "Hello";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    return (
        <div className="welcome-banner">
            <h2>{greeting}, Harshini 👋</h2>
            <p>Stay productive and finish today's tasks!</p>
        </div>
    );
}

export default WelcomeBanner;