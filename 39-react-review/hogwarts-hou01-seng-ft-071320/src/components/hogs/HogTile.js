import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const HogFront = (props) => {
  const { name } = props.hog
  const hog_name = name.toLowerCase().split(" ").join("_")
  const slug = require(`../../hog-imgs/${hog_name}.jpg`)

  return (
    <div>
      <Image src={slug} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </div>
  )
}

const HogBack = (props) => {

  const { specialty, greased, weight } = props.hog

  return (
    <Card.Content>
      <Card.Header>Specialty: {specialty}</Card.Header>
      <Card.Header>Greased: {greased ? '✅' : '❌' }</Card.Header>
      <Card.Header>Weight: {weight}</Card.Header>
      <Card.Header>Highest Medal: {props.hog['highest medal achieved']}</Card.Header>
    </Card.Content>
  )
}

export default (props) => {
  return (
    <Card centered onClick={() => props.handleClickCard(props.hog)}>
      {
        props.showInfo ? <HogBack hog={props.hog} /> : <HogFront hog={props.hog} />
      }
    </Card>
  )
}

// export default HogTile;
