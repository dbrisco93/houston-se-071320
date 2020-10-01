import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

import { connect } from 'react-redux';

const API = "http://localhost:3000/sushis"

class SushiContainer extends React.Component{

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.props.eat_sushi(sushis))
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis.slice(this.props.offset,this.props.offset+4).map(sushi => {
                return (
                    <Sushi key={sushi.id} sushi={sushi} />
                )
              }
            )
          }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    eat_sushi: (sushis) => dispatch({ type: 'GET_SUSHI', sushis: sushis })
  }
}

const mapStateToProps = (state) => {
  return {
    sushis: state.sushis,
    offset: state.offset
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SushiContainer)
