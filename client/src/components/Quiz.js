import React from 'react'
import Questions from './Questions'

export default function Quiz() {

    function onNext() {
        console.log('Next Click')
    }

    function onPrevious() {
        console.log('Previous Click')
    }

  return (
      <div className="container">
          <h1 className="title text-light">Brand Voice</h1>
          
          {/*Display Questions*/}

          <div className="grid">
              <Questions></Questions>
              <button className="btn" onClick={onPrevious}>Previous</button>
              <button className="btn" onClick={onNext}>Next</button>
          </div>
              
          
    </div>
  )
}
