import React from 'react';

import classes from './Order.css'

const order =(props) => (
    <div classes={classes.Order}>
        <p>Ingredients:Salad(1)</p>
        <p>price:<strong>USD 5.45</strong></p>
    </div>
);

export default order;