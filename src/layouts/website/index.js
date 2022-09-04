import React from 'react';
import { WebHeader } from './header';

export const WebLayout = (props) => {
    return (
        <div>
            <WebHeader />
            {props.children}
            footer
        </div>
    )
}