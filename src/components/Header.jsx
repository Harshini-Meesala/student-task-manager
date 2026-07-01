function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>Welcome, {props.user}</p>
            <p>Today's Date: {props.date}</p>
        </header>
    );
}

export default Header;