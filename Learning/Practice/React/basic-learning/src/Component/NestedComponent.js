import React from 'react';

const mydata=[{name:"myName", id:1}, {name:"name2", id:2}]

class NestedComponent extends React.Component
{
    render(){
        return(
            <div>
                <p>"This is nested Component"</p>
                {mydata.map(d=><RenderedComponent {...d}  />)}
                
                <p>"End</p>
            </div>
        );
    }

}

class RenderedComponent extends React.Component
{

    render(){
        
       return  (<div><p>{this.props.id} + {this.props.name}</p></div>);
    }

}


export default NestedComponent

