import React from 'react';
import { Welcome } from './Welcome'

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello</h1>
                <Welcome name={<span>Stephano</span>} age={21}/>
            </div>
        )
    }
}