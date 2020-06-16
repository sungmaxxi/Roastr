import React, {Component} from 'react'
import LeftSwipeArrow from "./SwipeArrow"
import RightSwipeArrow from "./SwipeArrow"
import Flipcard from "./Flipcard"
class Fightr extends Component{

    render(){
        return(
            <div>
                <LeftSwipeArrow/>
                <Flipcard />
                <RightSwipeArrow/>
            </div>
        )
    }
}

export default Fightr