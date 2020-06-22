import React from 'react'

class RightSwipeArrow extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<button className = "rightArrow">
        <span className = "glyphicon glyphicon-chevron-right"></span>
    </button>)
    }
}

export default RightSwipeArrow