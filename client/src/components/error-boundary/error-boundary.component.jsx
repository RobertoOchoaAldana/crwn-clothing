import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageH1 } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
                    <ErrorImageH1>
                        A Dog Ate this Page
                    </ErrorImageH1>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }

}

export default ErrorBoundary;