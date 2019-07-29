import React from 'react';

class ManagmentTab extends React.Component{

    state = {
        registerToRead: 0,
        valueToRead: 0,
        registerToWrite: 0,
        valueToWrite: 0,
    }

    readFromRegister = () => {
        const rNumber = 99 * 256 + this.state.registerToRead;
        fetch(`https://api.thingspeak.com/update?api_key=8NO8ELWMMJPVX5B2&field1=${rNumber}`);
        setTimeout(() => {
            fetch(`https://api.thingspeak.com/channels/765605/feeds.json?results=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    valueToRead: data.feeds[0].field4,
                })
            })
        }, 3000);
            
    }

    writeToRegister = () => {
        
    }

    changeRegisterToRead = (e) => {
        this.setState({
            registerToRead: e.target.value,
        }) 
    }
    

    render(){
        return(
            <div className="manager">
                <div className = "manager__reading manager__item">
                    <label>Номер descone регистра <input className="manager__input" type = "number" min = "1" max="255" onChange = {(event) => this.changeRegisterToRead(event)}/></label>
                    <label>Значение descone регистра <input className="manager__input" type = "number" min = "1" max="255" value = {this.state.valueToRead} disabled/></label>
                    <button className="manager__button button" onClick = {this.readFromRegister}>Прочитать из регистра descone</button>   
                </div>
                <div className = "manager__changing manager__item">
                    <label>Адрес регистра (0..101)<input className="manager__input" type = "number" min = "0" max="101"/></label>
                    <label>Новое значение регистра (0..65535) <input type = "number" min = "0" max="65535"/></label>
                    <button className="manager__button button" onClick = {this.writeToRegister}>Записать в регистр descone</button>   
                </div>
            </div>
        )
    }
}

export default ManagmentTab;