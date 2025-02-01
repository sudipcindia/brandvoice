import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

export default function Result() {

  function onRestart() {
    console.log('On Restat')
  }
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
          <span>Total Earned Points</span>
          <span className='bold'>50</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className='bold'>Passed</span>
        </div>
      </div>

      <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        <ResultTable></ResultTable>
      </div>

    </div>
  )
}
