'use strict'

import React from 'react'

const Square = ({ color, children }) => (
    <div style={{
        background: color,
        height: '100px',
        width: '100px'
    }}>
        <button>{children}</button>
    </div>
)

Square.defaultProps = {
    color: 'red'
}

export default Square
