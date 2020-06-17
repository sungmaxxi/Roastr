import React from 'react'
import Button from 'react-bootstrap/button'

class LeftSwipeArrow extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(<Button className = "leftArrow">
                <span className = "glyphicon glyphicon-chevron-left"></span>
            </Button>)
    }
}

export default LeftSwipeArrow