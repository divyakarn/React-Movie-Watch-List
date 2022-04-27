import React from 'react'
import CallJokes from './CallJokes'
import StoredJokes from './StoredJokes'

function joke() {
  return (
    <div className='container mt-5 p-3'>

    <CallJokes/>
    <hr />
    <StoredJokes/>
    </div>
  )
}

export default joke
