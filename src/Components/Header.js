import React from 'react'

const Header = (props) => {
  return (
    <>
    <div className='header text-center'>{props.HeadingName}<span className='text-muted'>{props.MutedHeadName}</span></div>
    <div className="header">sonali</div>
    </>
  )
}

export default Header