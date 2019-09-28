import React from 'react'

export default ({name, handler}) => {

  return (
    <button className="btn btn-light mr-2" onClick={handler}>{name}</button>
  )
}
