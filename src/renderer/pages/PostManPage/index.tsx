import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
import { PostContainer } from '@/context/usePost';
import styles from './index.scss';
import Utils from './utils';
import PostMan from './postMan';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  {
    label: 'PostTab1',
    children: (
      <PostContainer.Provider>
        <PostMan tabKey="1" />
      </PostContainer.Provider>
    ),
    key: '1',
    closable: false,
  },
];
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
    Utils.tabActiveKey = newActiveKey;
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: `PostTab${newTabIndex.current + 1}`,
      children: (
        <PostContainer.Provider>
          <PostMan tabKey={newActiveKey} />
        </PostContainer.Provider>
      ),
      key: newActiveKey,
      closable: true,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
    Utils.tabActiveKey = newActiveKey;
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
    Utils.tabActiveKey = newActiveKey;
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      className={styles.app}
      style={{ height: '100%' }}
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};

export default App;
