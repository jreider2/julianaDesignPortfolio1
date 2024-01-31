import React from 'react';
import Header from '../useCaseGenerics/header'
import convoImage from '../../public/images/macPlaceHolder.png'

export default function ConvoscopeUseCase(){
    return (
        <div>
            {/* <h1>Convoscope Use Case header test</h1> */}
            <Header 
                heading="ConvoScope" 
                subheading="Designing an experimental AI interface for MIT Media Lab researchers"
                image={convoImage}
                />
            {/* Rest of the component */}
        </div>
    );
};