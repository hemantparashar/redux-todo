import React from 'react';

const Link = ({children,text,onClick})=>(
    <a href="#" onClick={()=>{onClick(text)}}>{children}</a>
);

export default Link;
