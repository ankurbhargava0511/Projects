import React from 'react';
// Class component state and props both are manage by this keyword
export default class ClassComponentWithProps extends React.Component
{
    render(){
        return(
            <div><p>{this.props.message}</p></div>
        )
    }
}