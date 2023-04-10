import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
interface DataType {
    key: number,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryld: string
}
const ProductManagementPage = (props) => {
    const removeProduct = (id) => {
        props.onRemove(id)
    }

    const data = props.products.map(item => {
        return {
            key: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description,
            categoryld: item.categoryld

        }
    })

    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
            render: (theImageURL) => <img src={theImageURL} />
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'categoryld',
            dataIndex: 'categoryld',
            key: 'categoryld',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                // console.log(record.key)

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.key)}>Remove</Button>
                    <button type="primary" style={{ backgroundColor: 'red' }} ><Link to={`${record.key}/update`}>Update</Link></button>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 2, showQuickJumper: true }} />
}

export default ProductManagementPage