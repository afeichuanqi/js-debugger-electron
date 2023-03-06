import React, { useState } from 'react';
import { Dropdown, Typography, Space, Input, Tabs } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ParamsBody from './components/params';
import HeadersBody from './components/headers';
import BodyBody from './components/body';
import styles from './postMan.scss';
// eslint-disable-next-line react/function-component-definition
const PostMan: React.FC = () => {
  const [sendType, setSendType] = useState('POST');
  const items = [
    {
      key: 'POST',
      label: 'POST',
      onClick: () => {
        setSendType('POST');
      },
    },
    {
      key: 'GET',
      label: 'GET',
      onClick: () => {
        setSendType('GET');
      },
    },
  ];
  const tabsItems = [
    {
      key: 'params',
      label: `Params`,
      children: <ParamsBody />,
    },
    {
      key: 'header',
      label: `Headers`,
      children: <HeadersBody />,
    },
    {
      key: 'body',
      label: `Body`,
      children: <BodyBody />,
    },
  ];
  return (
    <div className={styles.app}>
      <div className={styles.postToolsBox}>
        <div className={styles.dropdownBox}>
          <Dropdown
            menu={{
              items,
              selectable: true,
            }}
          >
            <Typography.Link>
              <Space style={{ color: 'white' }}>
                {sendType}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
        <Input className={styles.inputUrlBox} placeholder="Basic usage" />
      </div>
      <div className={styles.mainBodyBox}>
        <Tabs defaultActiveKey="1" items={tabsItems} />
      </div>
    </div>
  );
};
export default PostMan;
