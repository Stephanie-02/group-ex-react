import React from 'react';
import { Hello } from './Hello';

export class Message extends React.Component {
    render() {
        return (
            <div>
                <h5>It's time to learn React!!!</h5>
                <Hello />
            </div>
        )
    }
}