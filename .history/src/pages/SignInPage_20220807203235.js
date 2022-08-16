import { useAuth } from 'context/Auth-context';
import React from 'react';
import { useEffect } from 'react';

const SignInPage = () => {
   const {userInfo} = useAuth()
   useEffect(()=>{
      if(!userInfo.email)
   })
   return (
      <div>
         
      </div>
   );
};

export default SignInPage;