import React from 'react';

class ViewingTab extends React.Component {
    state = {
        activeGraph: 1,
    }
    changeGraph = (i) => {
        this.setState({
            activeGraph: i
        })
    }
    render(){
        const { channel, feeds } = this.props; 
        return (
            <section className="view-data">
                <div className="view-data__graph">
                    <iframe src={`https://api.thingspeak.com/channels/407507/charts/${this.state.activeGraph}`} frameBorder = "0"></iframe>  
                </div>
                <div className = "view-data__list">
                    <ul className = "view-data__ul">
                        <li className = "view-data__item" onClick = {() => this.changeGraph(1)}>
                            <div className="view-data__name">{channel.field1}</div>
                            <div className="view-data__value">{feeds[0].field1}</div>
                        </li>
                        <li className = "view-data__item" onClick = {() => this.changeGraph(2)} >
                            <div className="view-data__name">{channel.field2}</div>
                            <div className="view-data__value">{feeds[0].field2}</div>
                        </li>
                        <li className = "view-data__item" onClick = {() => this.changeGraph(3)}>
                            <div className="view-data__name">{channel.field3}</div>
                            <div className="view-data__value">{feeds[0].field3}</div>
                        </li>
                        <li className = "view-data__item" onClick = {() => this.changeGraph(4)}>
                            <div className="view-data__name">{channel.field4}</div>
                            <div className="view-data__value">{feeds[0].field4}</div>
                        </li>
                        <li className = "view-data__item" onClick = {() => this.changeGraph(5)}>
                            <div className="view-data__name">{channel.field5}</div>
                            <div className="view-data__value">{feeds[0].field5}</div>
                        </li>
                        <li className = "view-data__item" onClick = {() => this.changeGraph(6)}>
                            <div className="view-data__name">{channel.field6}</div>
                            <div className="view-data__value">{feeds[0].field6}</div>
                        </li>
                        <li className = "view-data__item" onClick = {() => this.changeGraph(7)}>
                            <div className="view-data__name">{channel.field7}</div>
                            <div className="view-data__value">{feeds[0].field7}</div>
                        </li>
                        <li className = "view-data__item" onClick = {() => this.changeGraph(8)}>
                            <div className="view-data__name">{channel.field8}</div>
                            <div className="view-data__value">{feeds[0].field8}</div>
                        </li>
                    </ul>
                </div> 
            </section>
        )
    }
}

export default ViewingTab;