
import React from 'react';
import Blockchain from '../components/Blockchain'

import './Layout.css';

const Layout = (props) =>  {

    return(
        <div className="layout">
            {props.children}
            <div>
            <Blockchain />
            </div>
        </div>
    );

}



export default Layout;

