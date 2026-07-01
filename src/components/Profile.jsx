function Profile(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Branch: {props.branch}</p>
            <p>Year: {props.year}</p>
        </div>
    );
}

export default Profile;