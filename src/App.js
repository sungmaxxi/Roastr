import React from 'react'
import ReactDOM from 'react-dom'
import CenterHeader from './Components/CenterHeader'
import LeftSwipeArrow from './Components/LeftSwipeArrow'
import RightSwipeArrow from './Components/RightSwipeArrow'

class App extends React.Component{
  render(){
    return <div>
      <CenterHeader/>
      <LeftSwipeArrow/>
      <RightSwipeArrow/>
    </div>

  }
}
export default App