import React from "react";
import { useLocation } from "react-router-dom";

const OrderView = () => {
  const { state } = useLocation();
  console.log("state: ", state);
  return (
    <div>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Products</th>
            <th>Address</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state?.record?.name}</td>
            <td>
              {state?.record?.products.map((itm, idx) => {
                return (
                  <div key={idx}>
                    name: {itm?.name} price:{itm?.price}
                  </div>
                );
              })}
            </td>
            <td>{state?.record?.address}</td>
            <td>{state?.record?.price}</td>
            <td>{state?.record?.qty}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderView;
