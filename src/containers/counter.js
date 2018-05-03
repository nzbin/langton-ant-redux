import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <p className="counter" >
                Steps: {this.props.generations}
            </p>
        )
    }
}

const mapStateToProps = ({ counter }) => {
    return {
        generations: counter
    }
}

export default connect(mapStateToProps)(Counter);