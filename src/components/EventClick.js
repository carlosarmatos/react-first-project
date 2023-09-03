function myEvent() {
    console.log('Activated! :)')
}

function EventClick() {

    return (
        <div>
            <h1>Click</h1>
            <button onClick={myEvent}>Activate</button>
        </div>
    )
}

export default EventClick