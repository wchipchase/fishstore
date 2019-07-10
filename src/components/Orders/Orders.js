import React from 'react';
import PropTypes from 'prop-types';

import orderShapes from '../../helpers/propz/orderShapes';
import OrderRow from '../OrderRow/OrderRow';

import './Orders.scss';

class Orders extends React.Component {
  static propTypes = {
    orders: PropTypes.arrayOf(orderShapes.orderShape),
    deleteOrder: PropTypes.func.isRequired,
    selectOrderToEdit: PropTypes.func.isRequired,
  }

  render() {
    const { orders, deleteOrder, selectOrderToEdit } = this.props;
    const orderComponents = orders.map(order => (
      <OrderRow key={order.id} order={order} deleteOrder={deleteOrder} selectOrderToEdit={selectOrderToEdit}/>
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
