import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';



export default class Coin extends Component {
    constructor(props){
        super(props);
        //Creates a state where it can update the price
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // componentDidMount(){
        // const callback = () => {
        //     //set the state to a new random value that changes every second or 1000 miliseconds
        //     const randomPercentage = 0.995 + Math.random() * 0.01;
        //     //DON'T DO THIS:
        //     //this.state.price = this.state.price * randomPercentage;
        //     //instead use 
        //     this.setState(function(oldState){
        //         return {
        //             price: oldState.price * randomPercentage
        //         };
        //     });
            /*
            or can also define it like: 
            this.setState({price: oldState.price * randomPercentage})   However function methods are safer so stick to the method above.
    //         */
    //     }
    //     setInterval( callback, 1000);
    // }
    handleClick(event) {
        //Prevent the default action of submitting the form
        event.preventDefault();
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState){
        return {
        price: oldState.price * randomPercentage
        };
    });
}
  render() {
    return(
        <tr className='coin-row'>
            <td>{this.props.name}</td>
            <td>{this.props.ticker}</td>
            <td>${this.state.price}</td>
            <td>
                <form action="#" method='POST'>
                <button onClick={this.handleClick}>Refresh</button>
                </form>
            </td>
        </tr>
        // needs to change props -> state in order to add state to the price
    );
  }
}


Coin.propTypes = {
    name:PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}