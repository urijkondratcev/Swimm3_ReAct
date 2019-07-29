import React, { Component } from 'react'
import HeaderComponent from './components/Header';
import InfoComponent from './components/InfoComponent';
import Tabs from "./components/Tabs";

export default class MainPage extends Component {
    state = {
        channel: 407507,
        data: []
    }

    componentDidMount(){
        fetch(`https://api.thingspeak.com/channels/${this.state.channel}/feeds.json?results=1`)
            .then(res => res.json())
            .then(data => this.setState({
                data: data
            }))

    }

    render() {
        const { channel, feeds } = this.state.data;
        console.log(channel, feeds)
        return (
            <main class="main-page">
                <HeaderComponent />
                <section className="page_data">
                    {channel &&
                        <>
                            <InfoComponent channel = {channel}/>
                            <Tabs channel = {channel} feeds = {feeds} />
                        </>
                    }
                </section>
            </main>
        )
    }
}

