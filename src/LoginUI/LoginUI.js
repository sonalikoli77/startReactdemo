
import React from 'react'
import Button from '../Components/Button';
import './LoginUI.css';
import user from '../assets/img/user.png';
import { useForm } from "react-hook-form";
function LoginUI() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <section className='LoginForm'>
      <div className='container'>
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-3'></div>
            <div className=' col-6 pt-4 col-social'>
              <span className='fa fa-envelope Loginemail'><span className='login-email mx-4'>johnsmith@gmail.com</span></span>
             
             <span className='social-i'> <i className='fa fa-facebook Loginemail'></i></span>
             <span className='social-i'><i className='fa fa-instagram Loginemail'>
              </i></span>
              <span className='social-i'><i className='fa fa-twitter  Loginemail '></i></span>
                  <img className='img-fluid admin-img' src={user} alt="admin"></img>
            </div>       
        </div>
        <div className='row'>
          <div className='col-6'>
            <div className='section-exchange'>
              <span className='text-white head-login'>EXCHANGE <br></br><span className='start-txt'>STAR POINTS</span></span>
              <p className='text-light para-login'>It is a established fact that a reacher will be distracted by the reachable<br></br><span className='para-txt'> content of a page when looking at its layout.</span></p>
            </div>
            <div className='btn-section'>
              <Button classNames="btn-style" type="submit" btnName="HOW IT WORKS" name="submit"></Button>
            </div>
          </div>
          <div className='col-6'>
              <div className='card card-bg'>
                <div className='Login-card'>
                 {/* <hr style={"height:2px"}/> */}
                  <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='card-begin '>
                     <span className="text-light"> Available starts</span>
                      <div className="num">300</div>
                     <div className="form-group ">
                      <label className='d-flex mx-2 text-secondary fw-bold amount-label' for="email">Enter amount:</label>
                      <input type="text" className="form-control form-input" id="amount" name="amount"{...register("amount",{ required: true },{ min: 10, max: 15 })}/>
                     </div>
                     <span className='form-error'>{errors.amount && "please Enter Amount"}</span>
                     <span>
                      <p className="para-sub">Or select from below available options</p>
                     </span>
                     <div className='d-flex justify-content-center align-items-center'>
                      <span className='card ligth-card-box text-light'>5</span>
                      <span className='card ligth-card-box text-light'>10</span>
                      <span className='card ligth-card-box-odd text-info'>50</span>
                      <span className='card ligth-card-box text-light'>100</span>
                      <span className='card ligth-card-box text-light'>200</span>
                     </div>
                     <div className='my-4 py-4'>
                      <span>
                        <Button classNames="btn-cardinfo" id="info-btn" btnName="Exchange Now" type="submit"></Button>
                      </span>
                     </div>
                     </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginUI