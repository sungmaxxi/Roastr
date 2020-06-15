import React from 'react'
import ReactDOM from 'react-dom'
import CenterHeader from './Components/CenterHeader'
import LeftSwipeArrow from './Components/LeftSwipeArrow'
import RightSwipeArrow from './Components/RightSwipeArrow'
import Flipcard from './Components/Flipcard'

class App extends React.Component{
  render(){
    return <div>
      <CenterHeader/>
      <LeftSwipeArrow/>
      <RightSwipeArrow/>
      <Flipcard/>

    </div>

  }
}
export default App