import Link from "next/link";

//import React from 'react';

const Index = () => (
   <div>
       <ul>
           <li> <Link href="/" ><a> Inicio</a></Link></li>
           <li> <Link href="/about" ><a> About</a></Link></li>
       </ul>
   </div>
    );

export default Index;