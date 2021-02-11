import React, { useState } from 'react'

interface Props {
  title: string
  subTitle?: string
}

const FuncHeader = ({ title, subTitle }: Props) => {
  const [count, setCount] = useState(0)

  const changeValue = () => setCount(10)

  return (
    <div>
      <h1 onClick={changeValue}>
        {title} - {count}
      </h1>
      <h3>{subTitle}</h3>
    </div>
  )
}

export default FuncHeader
