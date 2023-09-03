import Button from "./Button";

function EventClick() {
    function myEvent() {
        console.log(`Number activated!`);
    }


    return (
        <div>
            <p>Click</p>
            <Button event={myEvent} text="First Event" />
        </div>
    )
}

export default EventClick