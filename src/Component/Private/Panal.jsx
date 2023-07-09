import { Button, Col, Drawer, Row } from "antd";
import React, { useEffect, useState } from "react";
import Menu from "./Manu";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
const Panal = () => {
  const [resNav, setResNav] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setResNav(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setResNav(true);
      } else if (window.innerWidth >= 1000) {
        setResNav(false);
      }
    });
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Row
        className="w-full flex max-md:flex-col gap-2"
        style={{ marginTop: "10px" }}
      >
        {resNav ? (
          <Col>
            <div className="flex justify-between items-center w-full">
              <Col className="m-[7px] cursor-pointer transition-all ease-in-out duration-100 hover:scale-125">
                <Button onClick={showDrawer}>
                  <MenuUnfoldOutlined />
                </Button>
              </Col>
              <Drawer
                width={window.innerWidth <= 450 ? "100%" : 380}
                title={"Ej Os"}
                placement="left"
                onClose={onClose}
                open={open}
              >
                <Menu />
              </Drawer>
            </div>
          </Col>
        ) : (
          <>
            <Col style={{ width: "19%", height: "100vh" }}>
              <Menu />
            </Col>
          </>
        )}
        <Col style={{ width: "80%", height: "100vh", marginLeft: "10px" }}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Panal;
