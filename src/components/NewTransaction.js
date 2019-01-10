import React, { Component } from "react";
import "./NewTransaction.css";

class NewTransaction extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      error: false
    };
  }

  processTransaction = event => {
    event.preventDefault();
    const { _sender, _receiver, _amount } = this.refs;

    if (
      _sender.value.length > 0 &&
      _receiver.value.length > 0 &&
      _amount.value.length > 0 &&
      !isNaN(Number(_amount.value))
    ) {
      const transaction = {
        sender: _sender.value,
        receiver: _receiver.value,
        amount: Number(_amount.value)
      };

      _sender.value = "";
      _receiver.value = "";
      _amount.value = "";

      if (this.state.error) {
        this.setState({
          error: false
        });
      }
      this.props.addBlock(transaction);
    } else {
      console.log(
        "Error!: ",
        _sender.value.length,
        _receiver.value.length,
        Number(_amount.value)
      );

      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className="">
        <h2>New Transaction</h2>
        <br/>
        <form className="">
          <input
            className="form-control p-2 "
            ref="_sender"
            type="text"
            disabled={this.props.isModified}
            name="sender"
            placeholder="Sender (e.g. Jhonny)"
          />
          <br />

          <input
            className="form-control p-2"
            ref="_receiver"
            type="text"
            disabled={this.props.isModified}
            name="receiver"
            placeholder="Receiver (e.g. Mary)"
          />
          <br />

          <input
            className="form-control"
            ref="_amount"
            type="text"
            disabled={this.props.isModified}
            name="amount"
            placeholder="Amount (e.g. 50)"
          />
          <br />

          <button
            id="processTransaction"
            disabled={this.props.isModified}
            onClick={this.processTransaction}
          >
            Process
          </button>
        </form>

        {this.state.error ? <div> Wrong Format </div> : null}
      </div>
    );
  }
}

export default NewTransaction;
