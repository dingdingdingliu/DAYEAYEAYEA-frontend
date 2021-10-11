import { useState, useEffect } from 'react'
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
const Counter = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: solid 1.5px;
  padding: 5px;
`
const Number = styled.input`
  text-align: center;
  width: 100%;
`

export const ItemCounter = ({ marginStyle, value, handleUpdateCount, id }) => {
  const [count, setCount] = useState(value)
  const handleCount = (type) => {
    return type === 'increment' ? setCount(count + 1) : setCount(count - 1)
  }
  const handleChange = (e) => {
    setCount(parseInt(e.target.value))
  }

  useEffect(() => {
    handleUpdateCount(count, id)
  }, [count])
  return (
    <Counter style={marginStyle}>
      <RemoveIcon onClick={() => handleCount('decrement')} />
      <Number value={count} onChange={handleChange} />
      <AddIcon onClick={() => handleCount('increment')} />
    </Counter>
  )
}
