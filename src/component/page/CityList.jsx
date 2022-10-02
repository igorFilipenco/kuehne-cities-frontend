import React from 'react';
//component
import { List } from 'antd';


const CityList = () => {
    const data = Array.from({length: 23}).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={data}

            renderItem={item => (
                <List.Item
                    key={item.title}
                    extra={
                        <img
                            width={290}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >

                    {item.content}
                </List.Item>
            )}
        />
    );
};

export default CityList;