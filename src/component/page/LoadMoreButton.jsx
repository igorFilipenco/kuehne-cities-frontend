import {Button} from "antd";

const LoadMoreButton = (props) => {
    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={props.onLoadMore}>View more</Button>
        </div>
    );
};

export default LoadMoreButton;