import './App.css';
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      items: [],
    }
  }

  componentDidMount() {
    this.refreshItems();
  }

  refreshItems = () => {
    axios
      .get("api/items")
      .then((res) => this.setState({ items: res.data }))
      .catch((err) => console.log(err))
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  }

  renderItems = () => {
    const items = this.state.items;
    return (
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <th scope="row">{item.item_name}</th>
              <td>{item.item_price}</td>
              <td>{item.tax_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <main>
        {this.renderItems()}
      </main>
    )
  }
}

export default App;
