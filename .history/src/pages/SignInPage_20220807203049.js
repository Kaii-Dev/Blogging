import { useAuth } from 'context/Auth-context';
import React from 'react';

const SignInPage = () => {
   const {userInfo} = useAuth()
   console.log(user);
   return (
      <div>
         
      </div>
   );
};

export default SignInPage;