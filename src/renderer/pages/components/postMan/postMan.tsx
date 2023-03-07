import React, { useRef, useState } from 'react';
import {
  Dropdown,
  Typography,
  Space,
  Input,
  Tabs,
  Button,
  Modal,
  Popover,
} from 'antd';
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
  const { protocol, setProtocol, setBaseUrl, baseUrl, sendRes, importCurl } =
    usePost();
  const [isOpenCurl, setIsOpenCurl] = useState(false);
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
  const content = (
    <div>
      <p>Chrome-F12-Network-url</p>
      <p>-右键-copy-Curl(bash)</p>
    </div>
  );
  const curlRef = useRef<any>();
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
        <div className={styles.importCurl}>
          <Popover placement="bottom" content={content} title="如何使用?">
            <Button onClick={() => setIsOpenCurl(true)} type="link">
              import curl
            </Button>
          </Popover>
        </div>
      </div>
      <div className={styles.responseBox}>
        <ResponsePane />
      </div>
      <Modal
        getContainer={false}
        title="curl"
        open={isOpenCurl}
        okText="import - CURL"
        cancelText="cancel"
        onOk={() => {
          importCurl(curlRef.current.resizableTextArea.textArea.value);
          setIsOpenCurl(false);
        }}
        onCancel={() => setIsOpenCurl(false)}
      >
        <Input.TextArea
          ref={curlRef}
          style={{ height: 220, maxHeight: '225px' }}
        />
      </Modal>
    </div>
  );
};
export default PostMan;
