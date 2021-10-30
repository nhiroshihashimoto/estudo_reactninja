'use strict'
import React from 'react'

// Smart Components (ECMAScript 6 - 2015)
const Title = ({ name, lastname }) => (
    // Template Strings
    <h1>Olá {`${name} ${lastname}`}</h1>
)

// Método estático
Title.defaultProps = {
    name: 'desconhecido',
    lastname: 'sem sobrenome'
}

// createClass (ECMAScript 5 - 2009)
/*
const Title = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'desconhecido',
            lastname: 'sem sobrenome'
        }
    },
    render: function () {
        return(
            <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>
        )
    }
})
*/

export default Title
