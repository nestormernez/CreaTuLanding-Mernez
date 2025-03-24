import React from 'react'

const ItemListContainer = ({mensaje}) => {
    mensaje = 'Bienvenidos a mi primer E-Commerce'
    return (
        <div>
            <h1>{mensaje}</h1>
        </div>
    )
}

export default ItemListContainer