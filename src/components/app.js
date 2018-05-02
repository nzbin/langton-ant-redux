import React from 'react';

import Board from '../containers/board';
import Control from '../containers/control';
import Counter from '../containers/counter';

export default () => (
    <div>
        <h1>Langton's Ant Built with React and Redux</h1>
        <Board />
        <Control />
        <Counter />
    </div>
)