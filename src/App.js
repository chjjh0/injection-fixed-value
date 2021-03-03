import { useCallback, useEffect, useState } from 'react'
import ChildComp from './ChildComp'

function App() {
  const [value, setValue] = useState(0)
  const [option, setOption] = useState(null)

  console.log(value)
  const parentFunc = useCallback(() => {
    console.log('value', value)
    setValue((prev) => Number(prev) + 1)
  }, [value])

  useEffect(() => {
    setOption({
      func: parentFunc,
    })
    // setValue(1)
  }, [])

  return <>{option && <ChildComp option={option} />}</>
}

export default App
