'user strict'

// Shorthand Notation
import React, { Component } from 'react'
import Title from './title'
import Square from './square.js'

// Classe (ECMAScript 6 - 2015)
class App extends Component {
    render () {
        return (
            <div className='titulo' onClick={(e) => {
                alert('clicou')
            }}>
                <Title name='Fulano' className='Sobrenome' />
                {['blue', 'yellow', 'green'].map((e, index) => (
                    <Square key={index} color={e}>
                        <span>span</span>
                        palavra</Square>
                ))}
            </div>
        )
    }
}

// createClass (ECMAScript 5 - 2009)

/*
const App = React.createClass({
    render: function () {
        return (
        <div className='titulo'>
            <Title name='nome' className='Sobrenome' />
        </div>
        )
    }
})
*/

export default App
