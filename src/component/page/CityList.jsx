import React, {useEffect, useState} from 'react';
//component
import {List} from 'antd';
import LoadMoreButton from "./LoadMoreButton";
//api
import {getCities} from "../api/getCities";


const CityList = () => {
    const [cityData, setCityData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getCities(currentPage).then(response => setCityData(response?.data));
    }, []);

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
    );
};

export default CityList;