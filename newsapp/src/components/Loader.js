import React, { Component } from 'react'
import loading from './Hourglass.gif'
export default class Loader extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="Loading..." />
            </div>
        )
    }
}
