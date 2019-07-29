import React from 'react';

const InfoComponent = (props) => {
    const { channel }  = props;
    const name = channel.name.replace(/_/g, ' ');
    return(
        <div class = "info">
            {channel && 
                <div className="info__headers">
                    <h2>{name}</h2><br/>
                    <h2>{channel.description}</h2>
                </div>
            }
            <div class="info__image">
                <img src="http://ipic.su/img/img7/tn/BIG_bass_Lutck.1550263763.jpg" alt="Picture of Pool"/>
            </div>
        </div>
    )
}

export default InfoComponent;