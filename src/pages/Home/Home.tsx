import { useQuery } from "@apollo/client";
import { Select } from "antd";
import { useState } from "react";
import { Continent, DataType } from "../../types";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { LIST_CONTINENTS, LIST_COUNTRIES } from "../../services/api";
import './Home.css'

const { Option } = Select;

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    render: (code: string) => <a href={`/${code.split(' ').join('')}`}>{code}</a>
  },
  {
    title: 'Capital',
    dataIndex: 'capital',
    key: 'capital',
    responsive: ['sm']
  }
];


const Home = () => {
  const continents = useQuery(LIST_CONTINENTS).data?.continents
  const countries = useQuery(LIST_COUNTRIES).data?.countries
  const [bottom] = useState<TablePaginationPosition>('bottomCenter');
  const [keyword, setKeyword] = useState('all')

  const defaultOption:Continent = {
    code: 'all',
    name: 'All',
    countries: countries
  }

  const handleChange = (value: string) => {
    setKeyword(value)
  };

  const data = continents?.find((continent:Continent) => {
    if(continent.code === keyword) {
      return continent.countries
    } else if (keyword === defaultOption.code) {
      return countries
    }
  })

  return (
    <div className="container">
      
      <Select defaultValue="all" className="select" onChange={handleChange}>
        <Option value={defaultOption.code} key={defaultOption.code} label={defaultOption.name}>{defaultOption.name}</Option>
        
        {
          continents?.map((continent : Continent) => {
            return <Option value={continent.code} key={continent.code} label={continent.name} > {continent.name} </Option>
          }) 
        }

      </Select>
      <Table columns={columns} pagination={{ position: [bottom] }} dataSource={data?.countries} />

    </div>
  )

};

export default Home;