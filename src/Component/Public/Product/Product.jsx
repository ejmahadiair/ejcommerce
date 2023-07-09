import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const Product = ({ data }) => {
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<></>]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={data?.name}
          description={
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
          }
        />
      </Card>
    </>
  );
};

export default Product;
