import React, { Component } from 'react'
import Rubah from './Rubah';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      makanan: "Nanas"
    })
  }
  
  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan: makanan_baru
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.gantiMakanan("soto")}>Ganti</button>
        <Rubah makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>

        <hr />
        <h3>I Gusti Dzulqarnain / 1120101837</h3>
      </div>
    )
  }
}
