import React from 'react'
import '../styles/Result.css'

export default function Result() {
  return (
    <div className='container'>
      <h1 className="title text-light">Brand Voice</h1>

      <div className='result flex-center'>
        <div className="flex">
          <span>UserName</span>
          <span className='bold'>Brand Voice</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className='bold'>50</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className='bold'>05</span>
        </div>
        <div className="flex">
          <span>Total Attempts</span>
          <span className='bold'>03</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className='bold'>50</span>
        </div>
      </div>
    </div>
  )
}
