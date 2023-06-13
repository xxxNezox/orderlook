import React, {Component} from "react";
import style from '../CSS/Registration.module.css'


class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            restaurantName: "",
            adminPassword: "",
            employeePassword: ""
        }
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
        [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch("/api/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                restaurantName: this.state.restaurantName,
                adminPassword: this.state.adminPassword,
                employeePassword: this.state.employeePassword,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            if (data.sucsess) {
                const url = `/main?restaurantName=${this.state.restaurantName}&isAdmin=true`;
                window.location.href = url;
            }
        })
        .catch((error) => {
            console.error(error)
        })
    }

    render() {
        return (
        <div className={style.block}>
            <h1>Регистрация</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
                Имя ресторана:
                <input type="text" name="restaurantName" value={this.state.restaurantName} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Пароль администратора:
                <input type="password" name="adminPassword" value={this.state.adminPassword} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Пароль работника:
                <input type="password" name="employeePassword" value={this.state.employeePassword} onChange={this.handleInputChange} />
            </label>
            <br />
            <button type="submit" className={style.button}>Зарегистрироваться</button>
            </form>
        </div>
        )
    }
}

export default Registration;
