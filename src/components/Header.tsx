import React, { Component } from 'react'

interface Props {
  title: string
  subTitle?: string
}

interface State {
  count: number
}

class Header extends Component<Props, State> {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.title} - {this.state.count}
        </h1>
        <h3>{this.props.subTitle}</h3>
      </div>
    )
  }
}

export default Header

// |
// &
