import React from 'react';
import ViewingTab from './ViewingTab';
import ManagmentTab from './ManagmentTab';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: true,
        }
    }
    
    changeTab = () => {
        console.log(this.state.activeTab)
        this.setState ({
            activeTab: !this.state.activeTab, 
        })
    }
    render(){
        const { channel, feeds } = this.props; 
        console.log(this.props);
        return(
            <>
                <section className="tabs">
                    <div className = {this.state.activeTab ? `tabs__item active`: `tabs__item`} onClick = {this.changeTab}>Viewing</div>
                    <div className = {!this.state.activeTab ? `tabs__item active`: `tabs__item`} onClick = {this.changeTab}>Managment</div> 
                </section>
                <section>
                    {this.state.activeTab 
                        ? <ViewingTab channel = {channel} feeds = {feeds}/>
                        : <ManagmentTab />}
                </section>
            </>
        );
    }
}


export default Tabs;