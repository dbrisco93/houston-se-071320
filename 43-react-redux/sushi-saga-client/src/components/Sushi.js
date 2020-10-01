import React, { Fragment } from 'react'
import { connect } from 'react-redux'


const eatSushi = (sushi,props) => {
  if(sushi.price <= props.wallet){
    props.eat_sushi(sushi,props)
  }
}

const isSushiEaten = (sushi,props) => {
  const eatenSushi = props.eaten.filter(_ => _.id === sushi.id).length > 0
    ? true : false
  return eatenSushi
}

const Sushi = (props) => {

  const { name, price, img_url } = props.sushi

  return (
    <div className="sushi">
      <div className="plate"
           onClick={
             isSushiEaten(props.sushi,props) ? null : () => eatSushi(props.sushi,props)
           }>
        {
           isSushiEaten(props.sushi,props) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    eat_sushi: (sushi,props) => dispatch({
      type: 'EAT_SUSHI',
      eaten: [...props.eaten, sushi],
      wallet: props.wallet - sushi.price
    })
  }
}

const mapStateToProps = (state) => {
  return {
    wallet: state.wallet,
    eaten: state.eaten
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sushi)
