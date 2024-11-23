import React from 'react'

function Sugestions({data}) {
  return (
    <lu>
        {data?data.map(item=><li>{item}</li>):null}
    </lu>
  )
}

export default Sugestions