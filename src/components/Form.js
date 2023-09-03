function userRegistration(e) {
    e.preventDefault();
    console.log('Success!')
}

function Form() {

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={userRegistration}>
                <div>
                    <input type="text" placeholder="Type your name"></input>
                </div>
                <div>
                    <input type="submit" value="Sign up"></input>
                </div>
            </form>
        </div>
    )
}

export default Form