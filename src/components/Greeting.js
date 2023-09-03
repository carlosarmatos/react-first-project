function Greeting({ name }) {
    function greetingGenerator(specificName) {
        return `Hello, ${specificName}, how's it going?`
    }

    return<>{name && <p>{greetingGenerator(name)}</p>}</>
}

export default Greeting