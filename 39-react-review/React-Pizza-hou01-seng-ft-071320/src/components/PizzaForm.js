import React from "react"

class PizzaForm extends React.Component {

  state = {
    id: null,
    topping: '',
    size: 'small',
    vegetarian: true
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      this.setState({
        topping: this.props.topping,
        size: this.props.size,
        vegetarian: this.props.vegetarian,
        id: this.props.id
      })
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleVegToggle = (isVeg) => {
    this.setState({
      ...this.state,
      vegetarian: isVeg
    })
  }

  handleSubmit = () => {
    const newPizza = {
      ...this.state
    }
    this.setState({
      id: null,
      topping: '',
      size: '',
      vegetarian: true
    })
    this.props.handlePizzaMaking(newPizza)
  }

  render(){
    return(
        <div className="form-row">
          <div className="col-5">
              <input
                type="text"
                  name="topping"
                    onChange={(e) => this.handleInputChange(e)}
                      className="form-control"
                        placeholder="Pizza Topping"
                          value={this.state.topping}
              />
          </div>
          <div className="col">
            <select name="size" onChange={(e) => this.handleInputChange(e)}
                value={this.state.size} className="form-control"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                  type="radio"
                    value="Vegetarian"
                      checked={this.state.vegetarian}
                        onChange={() => this.handleVegToggle(true)}
              />
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                  type="radio"
                    value="Not Vegetarian"
                      checked={!this.state.vegetarian}
                        onChange={() => this.handleVegToggle(false)}
              />
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button
              type="submit"
                className="btn btn-success"
                  onClick={this.handleSubmit}>
                  Submit
            </button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
