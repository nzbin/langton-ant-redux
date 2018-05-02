import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cell from '../components/cell';

class Board extends Component {
    render() {
        return (
            <div className="board">
                {this.props.board.map((row, i) =>
                    <ul className="row" key={i}>
                        {row.map((cell, j) =>
                            <Cell
                                key={j}
                                black={cell.status}
                            />
                        )}
                    </ul>
                )}
            </div>
        )
    }
}

const mapStateToProps = ({ board }) => {
    return { board }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps)(Board);