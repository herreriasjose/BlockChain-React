import React from 'react'
import block from '../block.svg';

import './Blockdisplay.css';

const Blockdisplay = (props) => {
    const displayClass = props.isModified ? "valid" : "modified";
    return(
        <div className={displayClass}>
        <div className="image">
            <img src={block} className="block-img" alt="block" />
        </div>
        <div className="data">    
            {props.data}
        </div>
        </div>
    );

};




export default Blockdisplay;