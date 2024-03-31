import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { Button, Input, message } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import sty from "./login.module.css";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("PhoneNumber:", phoneNumber);
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      if (response.ok) {
        const authorizationHeader = response.headers.get("Authorization");
        sessionStorage.setItem("userId", phoneNumber);
        sessionStorage.setItem("token", authorizationHeader as string);
        console.log("登录成功！");
        message.success("登录成功！");
        navigate("/layout");
      } else {
        setIsError("账号或者密码有误！请重新尝试！");
        message.error("账号或者密码有误！请重新尝试");
        console.error("登录失败！");
      }
    } catch (error) {
      console.error("发生错误：", error);
    }
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const changePhoneNumber = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={sty.login}>
      <div className={sty.logincontent}>
        <div className={sty.loginfonts}>Login</div>
        <Input
          size="large"
          placeholder="input id"
          style={{
            width: "200px",
            marginTop: "40px",
          }}
          status={isError ? "error" : ""}
          onChange={(e) => changePhoneNumber(e)}
          suffix={<UserOutlined />}
        ></Input>
        <Input.Password
          size="large"
          placeholder="input password"
          style={{
            width: "200px",
            marginTop: "20px",
          }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(e) => changePassword(e)}
          onKeyDown={handleEnterKey}
          status={isError ? "error" : ""}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "200px",
            height: "40px",
            backgroundColor: "#fa541c",
            color: "white",
            border: "0px",
            borderRadius: "7px",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          Login
        </button>
        <Button
          style={{
            fontSize: "12px",
            marginTop: "20px",
          }}
          type="link"
          href="/register"
        >
          Register
          <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
}
