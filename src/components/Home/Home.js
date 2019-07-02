import React from 'react';
import firebase from 'firebase/app';
import fishData from '../../helpers/data/fishData';
import ordersData from '../../helpers/data/orderData';
import './Home.scss';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';

class Home extends React.Component {
  state = {
    orders: [],
    fishes: [],
    fishOrder: {},
  }

  getOrders = () => {
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('can"t get orders', err));
  }

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('Could not get fishes', err));
    this.getOrders();
  }

  deleteOrder = (orderId) => {
    ordersData.deleteOrder(orderId)
      .then(() => this.getOrders())
      .catch(err => console.error('can"t get orders', err));
  }

  addFishToOrder = (fishId) => {
    const fishOrderCopy = { ...this.state.fishOrder };
    fishOrderCopy[fishId] = fishOrderCopy[fishId] + 1 || 1;
    this.setState({ fishOrder: fishOrderCopy });
  }

  render() {
    const { fishes, orders, fishOrder } = this.state;
    return (
      <div className='Home'>
        <div className = 'row'>
          <div className = 'col'>
            <Inventory fishes={fishes} addFishToOrder = {this.addFishToOrder}/>
          </div>
          <div className = 'col'>
            <NewOrder
              fishes={fishes}
              fishOrder={fishOrder}

            />
          </div>
          <div className = 'col'>
            <Orders orders={orders} deleteOrder={this.deleteOrder}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
