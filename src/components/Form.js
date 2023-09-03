import { useState } from "react";



function Form() {
    function userRegistration(e) {
        e.preventDefault();
        console.log(`User ${name} registrated with the password: ${password}`);
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={userRegistration}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Type your name" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Type your password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Sign up"></input>
                </div>
            </form>
        </div>
    )
}

export default Form