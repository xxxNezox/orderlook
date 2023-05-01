import React, {Component} from "react";
import { Link } from "react-router-dom";
import style from '../CSS/Welcome.module.css'

class Welcome extends Component{

    render(){
        return(
            <div className={style.block}>
                <Link to='/registration'>
                    <button className={style.button}>Get started</button>
                </Link>
                <Link to='/login'className={style.link}>Im already in!</Link>
            </div>
        )
    }
    
}

export default Welcome;