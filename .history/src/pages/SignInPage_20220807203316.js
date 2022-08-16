import { useAuth } from 'context/Auth-context';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
   const {userInfo} = useAuth()
   const navigate = useNavigate()
   useEffect(()=>{
      if(!userInfo.email) navigate("/sign-up")
      else navigate("/")
   })
   return (
      <div>
         
      </div>
   );
};

export default SignInPage;