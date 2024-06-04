import React from 'react';
import { Space } from 'antd';

export default function SectionArea({missions = [] }) {

    if (!Array.isArray(missions) ||!missions.length) return null;

    return (
        <Space wrap>
            <div style={{height: "100vh", display: "inline-block"}}>
                {missions && missions?.map((item, index) => {
                    return (
                        <div key={index} className='font-bold mt-5'>{item.name}</div>
                    )
                })}
            </div>
        </Space>
    )

}