import React from "react";
import { Age } from './Age';

export class Welcome extends React.Component {
    render () {
        const {name, age} = this.props;
        return (
            <div>
                <p> Welcome, <strong>{name}</strong>!</p>
                {age > 18 
                ? ({ age })
                :(<p>You are very young!</p>)
                }
            </div>
        )

    }
}