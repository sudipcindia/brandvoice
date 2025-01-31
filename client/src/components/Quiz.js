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
          <Questions></Questions>
          <div className="grid">
              <button className="btn prev" onClick={onPrevious}>Previous</button>
              <button className="btn next" onClick={onNext}>Next</button>
          </div>
              
          
    </div>
  )
}
