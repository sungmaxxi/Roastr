import React from 'react'

class LeftSwipeArrow extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<button className = "leftArrow">
                <span className = "glyphicon glyphicon-chevron-left"></span>
            </button>)
    }
}

export default LeftSwipeArrow