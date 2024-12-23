import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { login } from "../redux/slices/userSlice/userSlice";

// Form layout configuration
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

// Form validation messages
const validationMessages = {
  required: "This field is required!",
  types: {
    text: "Please enter a valid email!",
  },
};

// Component styles
const styles = {
  container: {
    width: "400px",
    margin: "20vh auto",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  },
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  // Handle form submission
  const handleFormSubmit = async (formValues) => {
    console.log(formValues);
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login successful:", response.data);
      const { token } = response.data;
      // Dispatch login action with username and token
      dispatch(login({ username, token }));

      alert(`Hello ${username} 🎀`);

    } catch (error) {
      console.error("Login error:", error.response?.data);
      setErrorMessage(error.response?.data?.error || "Login failed. Please try again.😔");
      alert(errorMessage);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <Form
        {...formLayout}
        name="login-form"
        onFinish={handleFormSubmit}
        style={{ maxWidth: 600 }}
        validateMessages={validationMessages}
      >
        {/* UserName Input */}
        <Form.Item
          name={["user", "username"]}
          rules={[
            {
              type: "text",
              required: true,
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Enter your good name"
            prefix={<UserOutlined />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "auto"}}
          />
        </Form.Item>

        {/* Password Input */}
        <Form.Item
          name={["user", "password"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Enter your password"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
