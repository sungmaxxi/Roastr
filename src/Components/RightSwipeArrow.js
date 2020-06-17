import React from 'react'
import Button from 'react-bootstrap/button'

class RightSwipeArrow extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<Button className = "rightArrow">
        <span className = "glyphicon glyphicon-chevron-right"></span>
    </Button>)
    }
}

export default RightSwipeArrow