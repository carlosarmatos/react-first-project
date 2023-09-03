function ListTwo({ items }) {

    return (
        <>
            <h3>Good things:</h3>
                {items.length > 0 ? (
                    items.map((item, index) => (
                    <p key={index}>{item}</p>
            ))) : (
                <p>No items to show!</p>
            )}
        </>
    )
}

export default ListTwo