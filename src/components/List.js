import Item from "./Item"

function List() {

    return (
        <>
            <h1>My list</h1>
            <ul>
                <Item marca="BMW" anoLancamento={1985} />
                <Item marca="Volkswagen" anoLancamento={1940} />
            </ul>
        </>
    )
}

export default List