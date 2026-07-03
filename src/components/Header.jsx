import "../styles/Header.css";

function Header({
    title,
    user,
    date,
    darkMode,
    setDarkMode,
}) {
    return (
        <header className="header">
            <div>
                <h1>{title}</h1>
                <p>Welcome, {user}</p>
                <small>{date}</small>
            </div>

            <button
                className="theme-btn"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
        </header>
    );
}

export default Header;