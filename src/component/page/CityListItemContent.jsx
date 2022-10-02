import {useState} from "react";
import {editCityInfo} from "../api/editCityInfo";
//component
import {Button, Input} from "antd";
import {EditOutlined} from "@ant-design/icons";


const CityListItemContent = (props) => {
    const [cityName, setCityName] = useState(props.city.name);
    const [imageLink, setImageLink] = useState(props.city.image);
    const [editModeActive, setEditModeActive] = useState(false);

    const onEditCity = () => {
        setEditModeActive(!editModeActive)
    }

    const onNameChange = (e) => {
        setCityName(e.target.value);
    }

    const onImageLinkChange = (e) => {
        setImageLink(e.target.value);
    }

    const onCityDataUpdate = async () => {
        await editCityInfo({id: props.city.id, name: cityName, image: imageLink});
        props.requestCities(props.currentPage);
        setEditModeActive(false);
    }

    return (
        <>
            <Button
                type="primary"
                onClick={onEditCity}
                icon={<EditOutlined/>}
            />
            <div className='app-city-name-header'>
                {props.city.name}
            </div>
            {
                editModeActive &&
                <>
                    <Input
                        className='app-edit-city-input'
                        placeholder="Name"
                        value={cityName}
                        allowClear onChange={onNameChange}
                    />
                    <Input
                        className='app-edit-city-input'
                        placeholder="Image link"
                        value={imageLink}
                        allowClear
                        onChange={onImageLinkChange}
                    />
                    <Button onClick={onCityDataUpdate}>
                        Apply
                    </Button>
                </>
            }
        </>
    );
};

export default CityListItemContent;