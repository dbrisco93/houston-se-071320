import React from "react"

const Pizza = (props) => {
  const { size, topping, vegetarian } = props.pizza

  return(
    <tr>
      <td>{ topping }</td>
      <td>{ size }</td>
      <td>{ vegetarian.toString() }</td>
      <td>
        <button onClick={() => props.handleEditPizza(props.pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza
