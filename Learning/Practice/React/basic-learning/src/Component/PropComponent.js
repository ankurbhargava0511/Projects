import React from 'react';
const PropComponent=(props)=>
{
    return <div><p>{props.message}</p></div>
}

// Class component state and props both are manage by this keyword
export class classComponentWithProps extends React.Component
{
    render(){
        return(
            <div><p>{this.props.message}</p></div>
        )
    }
}

export default PropComponent

// function must return with a container element