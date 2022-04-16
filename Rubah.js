import React, { Component } from 'react'

export default class Rubah extends Component {

  render() {
    const {makanan, gantiMakanan} = this.props
    return (
      <div>
        <h2>Rubah State Ke Props = {makanan}</h2>
        <button onClick={() => gantiMakanan("soto")}></button>
      </div>
    )
  }
}
