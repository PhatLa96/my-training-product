import { Product } from 'models';
import React, { ReactElement } from 'react';
import { Table, Tag, Space, Button } from 'antd';
interface ProductTableProps {
  productList: Product[];
}

export default function ProductTable({ productList }: ProductTableProps): ReactElement {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Image',
      dataIndex: 'thumbnailUrl',
      key: 'thumbnailUrl',
      render: (text: string) => <img src={text} alt="text" style={{ width: 50, height: 50 }} />,
    },
    {
      title: 'Desc',
      dataIndex: 'description',
      key: 'description',
      render: (text: string) => <a>{text.slice(0, 30) + '...'}</a>,
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button >Add </Button>
          <Button type="primary">Edit </Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const data = productList;
  return <Table columns={columns} dataSource={data} />;
}
