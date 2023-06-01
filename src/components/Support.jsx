import { useState, useEffect } from 'react';
const pageTile = document.title;

export default () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if (count > 0) {
      document.title = `${pageTile}--${count}`
    }
  }
  )
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? "Click to support": `Supported ${count} times`}
    </button>
  )
}