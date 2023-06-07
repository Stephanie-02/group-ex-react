export default function LoginComponent ({visible, setLoggedIn, setUsername}) {
    return (
        <div className={visible ? "" : "hidden"}>
            <h3>Login</h3>
            <input id="username" type="text"></input>
            <button onClick = {() => {
                let text = document.querySelector("#username").value;
                setUsername(text);
                setLoggedIn(true);
            }}>Log In</button>
        </div>
    );
}