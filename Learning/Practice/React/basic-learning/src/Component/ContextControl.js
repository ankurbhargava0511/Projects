import React from 'react';
const ThemeContext= React.createContext('dark');

class ContextClass extends React.Component{
    render()
    {
        return(
            <ThemeContext.Provider value="light">
                <Toolbar/>
            </ThemeContext.Provider>
        )
    }

}
function Toolbar(props)
{
    return (
        <div>
            <TheamedButton/>
        </div>
    )
}
function TheamedButton(props)
{
    return(
        <ThemeContext.Consumer>
            {theme=><button  theme={theme}>Context Control</button>}
        </ThemeContext.Consumer>
    )
}

export default ContextClass;