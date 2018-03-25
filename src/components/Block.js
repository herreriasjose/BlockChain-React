import sha1 from 'sha1';
// Check https://www.npmjs.com/package/sha1 for more info.

class Block {

    constructor(index, data, prevHash){

        this.index = index;
        this.timestamp = Math.floor(Date.now());
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }


    getHash() {
        // Using the data and the timestamp we will encode the hash of this block.
        return sha1(this.prevHash + this.index + JSON.stringify(this.data) +  this.timestamp )
    }

}


export default Block;