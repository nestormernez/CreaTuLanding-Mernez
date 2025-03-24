import React from 'react'

const ItemListContainer = ({color , titulo}) => {
    
    return (
        <div>
            <h1 style={{color:color}}>
                {titulo}
            </h1>
        </div>  
    )
}

export default ItemListContainer