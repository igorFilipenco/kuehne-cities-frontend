import React from 'react';
//component
import {Menu} from 'antd';
import HeaderLogo from './HeaderLogo';


const Header = () => {
    const menuItems = [
        {
            key: 'logo',
            icon: <HeaderLogo/>
        }
    ];

    return (
        <header>
            <Menu
                theme='light'
                mode='horizontal'
                items={menuItems}
                style={{zIndex: 1, width: '100%'}}
            />
        </header>
    );
};

export default Header;