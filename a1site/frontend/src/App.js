import './App.css';
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      items: [],
      cartItems: [],
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

  renderInventory = () => {
    const items = this.state.items;
    return (
      <inventory>
        <table-header>
          <h1>Store Inventory</h1>
          <h1>
            <i class="fas fa-warehouse"></i>
          </h1>
        </table-header>
        <table class="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Tax Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <th scope="row">{item.item_name}</th>
                <td>{item.item_price}</td>
                <td>{item.tax_rate}</td>
                <td>
                  <button class="add" onClick={() => this.addItemToCart(item)}>
                    <i class="far fa-plus-square"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </inventory>
    )
  }

  addItemToCart = (item) => {
    const cart = this.state.cartItems;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item === item) {
        cart[i].count ++;
        this.setState({ cartItems: cart })
        return;
      }
    }
    const new_item = {
      item: item,
      count: 1,
    }
    cart.push(new_item);
    this.setState({ cartItems: cart })
  }

  removeItemFromCart = (item) => {
    const cart = this.state.cartItems;
    if (item.count > 1) {
      cart[cart.indexOf(item)].count --;
      this.setState({ cartItems: cart })
    } else {
      const new_cart = cart.filter((i) => {
        return i !== item;
      })
      this.setState({ cartItems: new_cart })
    }
  }

  renderCart = () => {
    const cart = this.state.cartItems;
    return (
      <cart>
        <table-header>
          <h1>Your Shopping Cart</h1>
          <h1>
            <i class="fas fa-shopping-cart"></i>
          </h1>
        </table-header>
        <table class="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Tax Rate</th>
              <th scope="col">#</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <th scope="row">{item.item.item_name}</th>
                <td>{item.item.item_price}</td>
                <td>{item.item.tax_rate}</td>
                <td>{item.count}</td>
                <td>
                  <button class="remove" onClick={() => this.removeItemFromCart(item)}>
                    <i class="far fa-minus-square"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.checkEmptyCart()}
      </cart>
    )
  }

  checkEmptyCart = () => {
    if (this.state.cartItems.length === 0) {
      return (
        <empty-cart>
          <p>
            Your cart is empty
          </p>
        </empty-cart>
      )
    }
  } 

  render() {
    return (
      <main>
        {this.renderInventory()}
        {this.renderCart()}
      </main>
    )
  }
}

export default App;
