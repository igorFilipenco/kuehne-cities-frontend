import React from "react";
import Header from "../common/Header";


const BaseLayout = (props) => {
    return (
        <>
            <Header/>
            <section className='app-layout'>
                {props.children}
            </section>
        </>
    );
};

export default BaseLayout;