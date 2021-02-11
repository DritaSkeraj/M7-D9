import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ICustomInterface } from '../types/interfaces'

type MyMixedCustomInterface = RouteComponentProps & ICustomInterface

// type and interface can be used for the same purposes, but interfaces:
// 1) are only for objects
// 2) interfaces can be extended

// interface MyMixedCustomInterface extends RouteComponentProps {
//     title: string
// }

class DetailComponent extends Component<MyMixedCustomInterface> {
  render() {
    return <h1>{this.props.data.strive}</h1>
  }
}

export default DetailComponent
