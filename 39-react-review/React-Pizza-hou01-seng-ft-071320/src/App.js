import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {
      topping: '',
      size: 'small',
      vegetarian: true
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  handleEditPizza = (selectedPizza) => {
    this.setState({ ...this.state, selectedPizza })
  }

  createPizza = (newPizza) => {
    fetch('http://localhost:3000/pizzas',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newPizza)
    })
    .then(res => res.json())
    .then(newPizzaObj => this.setState({ pizzas: [...this.state.pizzas, newPizzaObj] }))
  }

  updatePizza = (updatedPizza) => {

    fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updatedPizza)
    })
    .then(res => res.json())
    .then(newPizzaObj => {

      const newPizzaList = [...this.state.pizzas].map((pizza) => {
        if(pizza.id === newPizzaObj.id){
          return newPizzaObj
        }else{
          return pizza
        }
      })

      this.setState({
        ...this.state,
        pizzas: newPizzaList,
        selectedPizza: {
          topping: '',
          size: 'size',
          vegetarian: true
        }
      })
    })
  }

  handlePizzaMaking = (newPizza) => {
    if(!newPizza.id){
      this.createPizza(newPizza)
    }else{
      this.updatePizza(newPizza)
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm {...this.state.selectedPizza} handlePizzaMaking={this.handlePizzaMaking} />
        <PizzaList handleEditPizza={this.handleEditPizza} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
