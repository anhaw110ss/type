import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProps } from '../types/product';
import { Link } from 'react-router-dom';
import './giaodien';
interface DataType {
    key: string | number;
    name: string;
    price: number;
    image: string,
    description: string,
    categoryld: number
  }
const ProductPage = (props:IProps)=>{
    const data:DataType[]=props.products.map(item=>{
return{
    key:item.id,
    name:item.name,
    price:item.price,
    image:item.image,
    description:item.description,
    categoryld:item.categoryld
}
    })
   
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
          },
        {
          title: 'name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'image',
          dataIndex: 'image',
          key: 'image',
          render: (theImageURL) => <img src={theImageURL} />,
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
          },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
            <Button type="primary" style={{ backgroundColor: "red" }}><Link to={`/products/${record.key}`}>Chi tiet</Link></Button>
            </Space>
          ),
        },
      ];
      return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
      )
      
}
export default ProductPage