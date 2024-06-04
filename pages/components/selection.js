import React from 'react';
import { Select, Space } from 'antd';

export default function SelectionHome ({items = [], onchange}) {
    if (!Array.isArray(items) ||!items.length) return null; 
    const item = items && items?.map((item) => ({
          value: item.key,
          label: item.name,
          ...item
    }))
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        onchange(value);
      };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
            <Space wrap>
                <p className='ml-12 mr-0'>Select a school to see different events: </p>
                <Select
                    showSearch
                    allowClear
                    defaultValue={item[0].value}
                    filterOption={filterOption}
                    style={{
                        height: 50,
                        width: 400,
                    }}
                    onChange={handleChange}
                    options={item}
                />
            </Space>
    )
}