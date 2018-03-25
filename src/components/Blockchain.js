import React, { Component } from 'react';

import NewTransaction from './NewTransaction';
import Block from './Block';
import Blockdisplay from './Blockdisplay';
import Status from './Status';

import './Blockchain.css';


class Blockchain extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chain : [],
            blockModified : null,
            isChainModified: false,
            isChecking: false
        };


    }

    chainIsValid = () => {

        const chain = this.state.chain;
        for(var i=0; i<chain.length;i++){
            if((chain[i].hash !== chain[i].getHash()) || (i > 0 && chain[i].prevHash !== chain[i-1].hash) ){
                this.setState(
                    {
                        blockModified: i,
                        isChainModified: true,
                        isChecking: false
                    }
                )
                return false;
            }
        }

        this.setState(
            {
                isChecking: false
            }
        )
        return true;
    }

 
    modifyBlockchain = () => {

        const chain = this.state.chain;

                // Here, randomly, we are going to change one of the properties of the chain.
        
                const prop = Math.floor((Math.random() * 3) + 1);
                const blockToChange = Math.floor((Math.random() * chain.length));
                
                if(prop === 1){
                    chain[blockToChange].data.sender = "Mr.Pickpocket";
                } else if(prop === 2){
                    chain[blockToChange].data.receiver = "Mr.Pickpocket";
                } else {
                    chain[blockToChange].data.amount = "10000000000";
                }
                this.setState({
                    chain: chain,
                    
                });
                this.chainIsValid();


    }


    modifyBlockchainHandler = () => {
    

        if (this.state.chain.length > 0) {
                
            this.setState({
                isChecking: true
            })
 
            setTimeout(this.modifyBlockchain,2500);

        };
    }


    newTransactionHandler = (transaction) => { 
         
        const {sender,receiver,amount} = transaction;
        const chain = this.state.chain;
        const index = chain.length;
        const prevHash = chain.length !== 0 ? chain[chain.length -1].hash : 0;
        const data = { sender: sender,
                       receiver: receiver,
                       amount: amount};
        const block = new Block(index,data,prevHash);
        chain.push(block);
        this.setState({
            chain: chain
        })
        

    }

    render() {
       // const chainText = JSON.stringify(this.state.chain);
        let chainDisplay = [];

        if(this.state.chain.length > 0){
            for(let i=0; i<this.state.chain.length; i++){
                const data = JSON.stringify(this.state.chain[i]);
                const isModified = !(i === this.state.blockModified);
                chainDisplay.push(<Blockdisplay key={i} data={data} isModified={isModified}/>)
            }
        }
 
        return(
            <div className="Blockchain">
            <NewTransaction addBlock={this.newTransactionHandler} isModified={this.state.isChainModified} />
            <Status modifyBlockchain={this.modifyBlockchainHandler} isModified={this.state.isChainModified} isChecking={this.state.isChecking}/>
            <div>
                
                <div className="Blockchain-display">
                <h2>BlockChain</h2>
                {chainDisplay}
                </div>
                </div>
                
                
            </div>
        );

    }



}




export default Blockchain;


