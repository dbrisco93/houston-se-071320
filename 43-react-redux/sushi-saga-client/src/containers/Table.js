import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    eaten: state.eaten,
    wallet: state.wallet
  }
}

export default connect(mapStateToProps)(Table)
