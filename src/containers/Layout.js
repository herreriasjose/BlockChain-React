
import React from 'react';
import Blockchain from '../components/Blockchain'

import './Layout.css';

const Layout = (props) =>  {

    return(
        <div>
            {props.children}
            <Blockchain />
        </div>
    );

}



export default Layout;

