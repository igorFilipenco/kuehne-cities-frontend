import BaseLayout from "../layout/BaseLayout";
import CityList from "./CityList";
import {Col, Divider, Row} from "antd";


const MainPage = () => {

    return (
        <BaseLayout>
            <Row>
                <Col span={12} offset={6}>
                    <Divider orientation="left">Cities App</Divider>
                    <CityList/>
                </Col>
            </Row>
        </BaseLayout>
    );
};

export default MainPage;