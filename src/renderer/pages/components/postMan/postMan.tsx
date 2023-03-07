import React, { useState } from 'react';
import { Dropdown, Typography, Space, Input, Tabs, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { usePost } from '@/context/usePost';
import ParamsBody from './components/params';
import HeadersBody from './components/headers';
import BodyBody from './components/body';
import ResponsePane from './components/response';
import styles from './postMan.scss';
// eslint-disable-next-line react/function-component-definition
// eslint-disable-next-line react/function-component-definition
const PostMan: React.FC = () => {
  const { protocol, setProtocol, setBaseUrl, baseUrl, sendRes } = usePost();
  const inputConfig = [
    {
      key: 'get',
      text: 'GET',
      value: 'GET',
    },
    {
      key: 'post',
      text: 'POST',
      value: 'POST',
    },
    {
      key: 'put',
      text: 'PUT',
      value: 'PUT',
    },
    {
      key: 'patch',
      text: 'PATCH',
      value: 'PATCH',
    },
    {
      key: 'delete',
      text: 'DELETE',
      value: 'DELETE',
    },
  ];

  const items = inputConfig.map((item) => ({
    key: item.key,
    label: item.text,
    onClick: () => {
      setProtocol(item.value);
    },
  }));
  const tabsItems = [
    {
      key: 'params',
      label: `参数`,
      children: <ParamsBody />,
    },
    {
      key: 'header',
      label: `协议头`,
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
                {protocol}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
        <Input
          value={baseUrl}
          onChange={(e: any) => {
            setBaseUrl(e.target.value);
          }}
          className={styles.inputUrlBox}
          placeholder="网址Url"
        />
        <div className={styles.sendPost}>
          <Button
            onClick={() => {
              sendRes();
            }}
            style={{ height: '46px', width: '120px' }}
            type="primary"
            ghost
          >
            发送
          </Button>
        </div>
      </div>
      <div className={styles.mainBodyBox}>
        <Tabs
          style={{ height: '100%' }}
          defaultActiveKey="1"
          items={tabsItems}
        />
      </div>
      <div className={styles.responseBox}>
        <ResponsePane />
        {/* <div style={{ marginBottom: 5 }}>Response</div>
        <CodeMirror
          theme="dark"
          height="200px"
          extensions={[jsonLanguage]}
          onChange={onChange}
          editable={false}
        /> */}
      </div>
    </div>
  );
};
export default PostMan;
