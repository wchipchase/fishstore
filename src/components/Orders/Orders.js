import React from 'react';
import 'firebase/auth';
import PropTypes from 'prop-types';
import OrderRow from '../OrderRow/OrderRow';
import orderShapes from '../../helpers/propz/orderShapes';
import './Orders.scss';


class Orders extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(orderShapes.orderShape),
    deleteOrder: PropTypes.func.isRequired,
  }

  // componentDidMount() {
  //   ordersData.getMyOrders(firebase.auth().currentUser.uid)
  //     .then(orders => this.setState({ orders }))
  //     .catch(err => console.error('can"t get orders', err));
  // }

  render() {
    const orderComponents = this.props.orders.map(order => (
      <OrderRow key={order.id} order = {order} deleteOrder={this.props.deleteOrder}/>
    ));
    return (
      <div className="Orders">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order Name</th>
              <th scope="col">Date</th>
              <th scope="col"># Fish</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orderComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
