import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { DeleteOutlined } from '@ant-design/icons';
import { usePost } from '@/context/usePost';
import styles from './params.scss';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface EditableRowProps {
  index: number;
}

// eslint-disable-next-line react/function-component-definition
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

// eslint-disable-next-line react/function-component-definition
const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        // rules={[
        //   {
        //     required: true,
        //     message: `${title} is required.`,
        //   },
        // ]}
      >
        <Input
          style={{ border: 'none', height: 22 }}
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24, height: '32px', lineHeight: '32px' }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  describe: string;
  paramsKey: string;
  value: string;
  selected: boolean;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const {
    params: dataSource,
    setParams: setDataSource,
    count,
    setCount,
    selectedRowKeys,
    setSelectedRowKeys,
    resizableDe,
  } = usePost();
  const handleDelete = (key: React.Key) => {
    if (dataSource.length === 1) {
      return;
    }
    const newData = dataSource.filter((item) => item.key !== key);

    setDataSource(newData);
  };

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: 'KEY',
      dataIndex: 'paramsKey',
      width: '30%',
      editable: true,
      ellipsis: true,
    },
    {
      title: 'VALUE',
      width: '30%',
      dataIndex: 'value',
      editable: true,
      ellipsis: true,
    },
    {
      title: '描述',
      dataIndex: 'describe',
      editable: true,
      width: '30%',
      ellipsis: true,
    },
    {
      title: '操作',
      width: '10%',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            okText="确定"
            cancelText="取消"
            title="确定删除?"
            onConfirm={() => handleDelete(record.key)}
          >
            <DeleteOutlined style={{ color: 'red' }} />
          </Popconfirm>
        ) : null,
    },
  ];

  const handleSave = (row: DataType) => {
    const newDatas = [...dataSource];
    const index = newDatas.findIndex((item) => row.key === item.key);
    const item = newDatas[index];
    newDatas.splice(index, 1, {
      ...item,
      ...row,
    });
    // 判断每个row是否有k或者v
    if (
      newDatas[newDatas.length - 1].paramsKey ||
      newDatas[newDatas.length - 1].value
    ) {
      const newData: DataType = {
        key: count,
        paramsKey: '',
        describe: '',
        value: '',
        selected: true,
      };
      setDataSource([...newDatas, newData]);
      setSelectedRowKeys([...selectedRowKeys, count]);
      setCount(count + 1);
      return;
    }
    setDataSource(newDatas);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  const rowSelection = {
    selectedRowKeys,
    // eslint-disable-next-line no-shadow
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      // console.log(selectedRowKeys, 'selectedRowKeys');
      // eslint-disable-next-line no-underscore-dangle
      setSelectedRowKeys(selectedRowKeys);
      // eslint-disable-next-line no-underscore-dangle
      let _dataSource: any = [...dataSource];
      _dataSource = _dataSource.map((data: any) => ({
        ...data,
        selected: selectedRows.some((item: any) => item.key === data.key),
      }));
      setDataSource(_dataSource);
    },
  };
  return (
    <div className={styles.app}>
      {/* <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button> */}
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        rowSelection={{ ...rowSelection }}
        dataSource={dataSource}
        columns={columns as ColumnTypes}
        pagination={false}
      />
    </div>
  );
};

export default App;
