import PropTypes from 'prop-types'

function Item({marca, anoLancamento}) {

    return (
        <>
            <li>
                {marca} - {anoLancamento}
            </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    anoLancamento: PropTypes.number
}

export default Item