import React from 'react';
import Header from './Header';

const Layout = ({children}) => {
   return (
      <>
         <Header></Header>
         {Layout}
      </>
   );
};

export default Layout;