import React, { Component } from 'react';
import { connect } from 'react-redux';
import { play, stop, next, clear } from '../actions';

import Button from '../components/button';

class Control extends Component {

    render() {
        return (
            <p className="controls">
                <Button
                    handleClick={() => this.clear()}
                    title={'Clear'}
                    icon={'fa fa-undo'}
                />
                <Button
                    handleClick={() => this.togglePlay()}
                    icon={this.props.playState.isRunning ? 'fa fa-pause' : 'fa fa-play'}
                />
                <Button
                    handleClick={() => this.props.next()}
                    icon={'fa fa-step-forward'}
                />
            </p>
        )
    }

    togglePlay() {
        if (this.props.playState.isRunning) {
            clearInterval(this.props.playState.timerId);
            this.props.stop();
        } else {
            let interval = setInterval(this.props.next, 10);
            this.props.play(interval);
        }
    }
    clear() {
        if (this.props.playState.isRunning) {
            clearInterval(this.props.playState.timerId);
            this.props.stop();
        }
        this.props.clear();
    }


}

const mapStateToProps = ({ playState }) => {
    return { playState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        play: (timerId) => dispatch(play(timerId)),
        stop: () => dispatch(stop()),
        next: () => dispatch(next()),
        clear: () => dispatch(clear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);