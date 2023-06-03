import React from 'react';
import { Welcome } from './Welcome'

export class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello</h1>
                <Welcome name="Stephano" age={21}/>
            </div>
        )
    }
}