import React, {useEffect, useState} from 'react';
//component
import {List, Space} from 'antd';
import LoadMoreButton from "./LoadMoreButton";
import Search from "antd/es/input/Search";
//api
import {getCities} from "../api/getCities";
import {getCityByName} from "../api/getCityByName";


const CityList = () => {
    const [cityData, setCityData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getCities(currentPage).then(response => setCityData(response?.data));
    }, []);

    const onSearch = (cityName) => {
        if (cityName.length === 0) {
            getCities(currentPage).then(response => setCityData(response?.data));
        }
        getCityByName(cityName).then(response => setCityData(response?.data));
    }

    const onLoadMore = () => {
        const nextPage = currentPage + 1;
        getCities(nextPage)
            .then(response => {
                let clonedCityData = {...cityData}
                let currentCityList = [...clonedCityData.data];
                response?.data?.data.forEach(city => currentCityList.push(city));
                clonedCityData.data = currentCityList;
                clonedCityData.page = response?.data?.page;
                setCityData(clonedCityData);
            });
        setCurrentPage(nextPage);
    }

    return (
        <>
            <Space direction="vertical">
                <Search
                    placeholder="Search your city..."
                    onSearch={onSearch}
                    allowClear
                    style={{width: 500}}/>
            </Space>
            <List
                itemLayout="vertical"
                size="large"
                loadMore={<LoadMoreButton onLoadMore={onLoadMore}/>}
                dataSource={cityData?.data}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={290}
                                alt="logo"
                                src={item.image}
                            />
                        }
                    >
                        {item.name}
                    </List.Item>
                )}
            />
        </>
    );
};

export default CityList;