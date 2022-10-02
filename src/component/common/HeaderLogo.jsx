import React from 'react';
import Icon from '@ant-design/icons';

const HeaderLogo = () => {
    return (
        <Icon component={() => (
            <img
                src='/app_logo.png'
                alt='kuehne'
                width={65}
            />
        )}/>
    );
};

export default HeaderLogo;