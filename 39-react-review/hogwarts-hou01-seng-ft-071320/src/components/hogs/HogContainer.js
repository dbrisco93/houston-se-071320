import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';

import HogTile from './HogTile';

const HogContainer = (props) => {

  return (
    <Card.Group>
      {
        props.hogs.map(hog => {

          const showInfo = hog.name === props.selectedHog.name ? true : false

          return (<HogTile
                    showInfo={showInfo}
                      handleClickCard={props.handleClickCard}
                        hog={hog} />)
        })
      }
    </Card.Group>
  )
}

export default HogContainer;
