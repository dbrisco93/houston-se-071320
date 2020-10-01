import React from 'react'
import { connect } from 'react-redux';

const MoreButton = (props) => {
    return (
      <button onClick={() => {
        const newOffset = props.offset >= props.length-4
          ? 0 : props.offset + 4
        props.more_sushi(newOffset)
      }}>
          More sushi!
      </button>
    )
}

const mapStateToProps = (state) => {
  return {
    offset: state.offset,
    length: state.sushis.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    more_sushi: (newOffset) => dispatch({ type: 'MORE_SUSHI', offset: newOffset })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoreButton)
