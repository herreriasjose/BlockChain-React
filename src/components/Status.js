
import React from 'react';

import './Status.css';


const Status = (props) =>  {
    let statusButton = 'greenButton';
    if (props.isChecking) statusButton = 'checkingButton'
    else if (props.isModified) statusButton = 'redButton';

    return(
        <div className="Status-display">
            {props.children}

            <h3>Status</h3>
            <div>
            <button className={statusButton}></button>
            </div>
            <div>
            <button onClick={props.modifyBlockchain} disabled={props.isModified}>Modify BlockChain</button>
            </div>
            
        </div>
    );

}



export default Status;
