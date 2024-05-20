import React from "react"
import ListItems from "./ListItems"

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
            {items.map((item)=>(
                <ListItems
                key={items.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ))}
        </ul>
  )
}

export default ItemList