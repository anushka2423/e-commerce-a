import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Form, Input, Typography, Alert } from "antd";
import axios from "axios";
import { login } from "../redux/slices/userSlice/userSlice";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

// Component styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "10vh auto",
    padding: "30px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  error: {
    marginBottom: "15px",
  },
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = response.data;
      dispatch(login({ username, token }));
      navigate("/");
      alert(`Welcome back, ${username}🎀! 🎉`);
    } catch (error) {
      const errorMsg =
        error.response?.data?.error || "Login failed. Please try again.";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>
        Login
      </Title>

      {errorMessage && (
        <Alert
          style={styles.error}
          message="Error"
          description={errorMessage}
          type="error"
          closable
          onClose={() => setErrorMessage("")}
        />
      )}

      <Form
        layout="vertical"
        onFinish={handleFormSubmit}
        style={styles.form}
        validateMessages={{
          required: "This field is required!",
          types: { text: "Please enter a valid value!" },
        }}
      >
        {/* Username Field */}
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input
            size="large"
            placeholder="Enter your username"
            prefix={<UserOutlined />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password!" }]}
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
          <Button type="primary" size="large" block htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
