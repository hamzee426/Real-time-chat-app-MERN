import React, { useState } from 'react';
import { Input } from "../../components/inputs/label";
import Button from "../../components/buttons/buttons";
import {handleSubmitSignIn,handleSubmitSignUp} from '../../components/handleSubmit/handleSubmit';

const Form = () => {

    let key=0;
    const isSignIn = true;
    const [showPopUp, setPopUp] = useState();
    const [SignIndata, setSignInData] = useState({
        email : '',
        password : ''
    });

    const [SignUpdata, setSignUpData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        userName : '',
        password : '',
        cpassword : ''
    });

    const handleSignInSubmit = () => {
        handleSubmitSignIn(SignIndata);
    }

    const handleSignUpSubmit = () => {
        handleSubmitSignUp(SignUpdata);
        
    }

    return (
        <>
            <div className="bg-white w-[500px] h-[580px] shadow-lg rounded-lg justify-center ">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mt-6">Welcome</h1>
                </div>
                <form name='form-chat' onSubmit={()=>{console.log("Submitted");}}>
                <div className="form-labels mt-5 text-center">
                    {
                        isSignIn === true ?
                            <>
                                <ul>
                                    <li><Input className="" type="email" placeholder="Email" value={SignIndata.email} onChange={(e) => setSignInData({...SignIndata, email:e.target.value})}/></li>
                                    <li><Input className="" type="password" placeholder="Password" value={SignIndata.password} onChange={(e) => setSignInData({...SignIndata,password:e.target.value})}/></li>
                                </ul>
                            </>
                            :
                            <>
                                <ul>
                                    <li><Input className="" placeholder="First name" value={SignUpdata.firstName} onChange={(e) => setSignUpData({...SignUpdata, firstName:e.target.value})}/></li>
                                    <li><Input className="" placeholder="Last name" value={SignUpdata.lastName} onChange={(e) => {setSignUpData({...SignUpdata,lastName:e.target.value})}}/></li>
                                    <li><Input className="" placeholder="Email" value={SignUpdata.email} onChange={(e) => {setSignUpData({...SignUpdata,email:e.target.value})}} type="email"/></li>
                                    <li><Input className="" placeholder="Username" value={SignUpdata.userName} onChange={(e) => {setSignUpData({...SignUpdata,userName:e.target.value})}}/></li>
                                    <li><Input className="" placeholder="Password" value={SignUpdata.password} onChange={(e) => {setSignUpData({...SignUpdata,password:e.target.value})}} type="password"/></li>
                                    <li><Input className="" placeholder="Re-Enter your Password" value={SignUpdata.cpassword} onChange={(e) => {setSignUpData({...SignUpdata,cpassword:e.target.value})}} type="password"/></li>
                                </ul>
                            </>
                    }

                </div>
                {
                    isSignIn ===  true ? 
                    <>
                    <Button text="Sign In" type="submit" color="primary" className="mt-[20px] ml-[30%] " onSubmit={handleSignInSubmit}/>
                    <p className="text-sm text-center mt-[8px]">Didn't have an account? <a href="#" className="text-primary cursor-pointer">Sign Up</a></p>
                    </>
                    :
                    <>
                    <Button text="Sign Up" type="submit" color="primary" className="mt-[20px] ml-[30%] " onSubmit={handleSignUpSubmit}/>
                    <p className="text-sm text-center mt-[8px]">Already have an account? <a href="#" className="text-primary cursor-pointer" >Sign in</a></p>
       
                    </>
                }
                
                </form>
                     </div>
        </>
    );
}

export default Form;