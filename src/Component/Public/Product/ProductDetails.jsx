import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Card, message } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "./productData";

const ProductDetails = () => {
  const [got, setGot] = useState([]);
  const [data, setData] = useState({
    id: 0,
    name: "item",
    desc: "My name is Eftakhar",
  });
  const { id } = useParams();
  useEffect(() => {
    const product = JSON.parse(window.localStorage.getItem("products"));
    if (product) {
      setGot([...product, ...productData]);
    } else {
      setGot([...productData]);
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < got.length; i++) {
      if (Number(got[i].id) === Number(id)) {
        setData(got[i]);
        break;
      }
    }
  }, [got, id]);
  console.log(data);
  return (
    <>
      <div style={{ width: "60%", margin: "20px auto" }}>
        <Card
          style={{ width: "100%" }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <div
              style={{ display: "flex", justifyContent: "center" }}
              onClick={() => {
                const cart = JSON.parse(window.localStorage.getItem("cart"));
                const token = window.localStorage.getItem("token");
                if (token) {
                  if (cart) {
                    const cartData = [...cart, data];
                    let have = false;
                    for (let i = 0; i < cart.length; i++) {
                      if (Number(cart[i].id) === Number(data.id)) {
                        have = true;
                        break;
                      }
                    }
                    if (!have) {
                      window.localStorage.setItem(
                        "cart",
                        JSON.stringify(cartData)
                      );
                      message.success("Product added to the cart");
                    } else {
                      message.warning(
                        "This product already added to your cart list"
                      );
                    }
                  } else {
                    window.localStorage.setItem("cart", JSON.stringify([data]));
                    message.success("Product added to the cart");
                  }
                } else {
                  message.warning("You are UnAuthorized!");
                }
              }}
            >
              <h3>Add To Cart</h3>
              <ShoppingCartOutlined />,
            </div>,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={data?.name}
            description={
              <>
                <div>
                  <p
                    style={{
                      textAlign: "end",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    ${data?.price}
                  </p>
                  <p>{data?.desc}</p>
                </div>
              </>
            }
          />
        </Card>
      </div>
    </>
  );
};

export default ProductDetails;
