import {useLocation} from 'react-router-dom'
import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button"

const Hello= ({title,onAdd,showAdd}) => {
    /*const onClick = () => {
        console.log('Click')
    }*/
    const url_string=window.location.href;
    const url = new URL(url_string);
    const c = url.searchParams.get("name");


    const Location=useLocation();
    //const parsed=queryString.parse(location.search);
    //console.log(parsed)
    return (
    <div>
    <header className='header'>
         <h1>{title}</h1>
         {Location.pathname === '/home' &&
         <Button color={showAdd?'red':'green'}
          text={showAdd?'Close':'Add'}
          onClick={onAdd} />}         
    </header>   
    <h3> &nbsp;&nbsp;Heyy!! {c}  </h3>
    </div>
    )
}
Hello.defaultProps={
    title:'To Do List'
}

Hello.propTypes = {
    title:PropTypes.string
}


export default Hello