import React, {Component} from 'react'


class Flipcard extends Component {

    render(){
        return <div className="card">
            <h2>Sung Yang</h2>
            <img style={{maxWidth : "300px",
             maxHeight:"300px"}}
              src = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/100789212_3200037833348523_5562347011870556160_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LXgJm8RyopoAX__1tg4&_nc_ht=scontent-iad3-1.xx&oh=5d692ae8e1d68a048662cd4281b995a2&oe=5F0E068F"/>
            <h3>Things I like:</h3>
            <p>Games, Chinchillas, Mexican food</p>
            <h3>Insecurities</h3>
            <p>Skin, achievements, foot size</p>
        </div>
    }
}

export default Flipcard