
import Button from '../Components/Button';
import React from 'react'
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
        <h1>Welcome To App</h1>
         <span><Link to="/login"><Button classNames="LoginHere"  type='submit' btnName='Login Here'></Button></Link></span>
    </div>
  )
}

export default Home