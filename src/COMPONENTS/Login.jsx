import React, { Component } from "react";
import style from '../CSS/Login.module.css'

class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
        restaurantName: "",
        password: "",
        }
    }

    handleInputChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({
        [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                restaurantName: this.state.restaurantName,
                password: this.state.password,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    render() {
        return (
        <div className={style.block}>
            <h1>Вход в систему</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
                Ресторан:
                <input type="text" name="restaurantName" value={this.state.restaurantName} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Пароль:
                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
            </label>
            <br />
            <button type="submit">Войти</button>
            </form>
        </div>
        )
    }
}

export default Login;
