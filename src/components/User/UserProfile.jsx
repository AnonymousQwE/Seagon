import React from "react";

import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';


export default function UserProfile() {
  return <> <Avatar shape="square" size={64} icon={<UserOutlined />} /></>;
}
