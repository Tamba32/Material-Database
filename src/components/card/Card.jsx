import React from 'react';

import CardTextfield from './CardTextfield.jsx';

const Card = props => {
  const { group } = props;
  const keys = Object.keys(group);
  const sizeKeys = Object.keys(group.size);
  return (
    <div className="card">
      <div className="legend-title">Basic Information</div>
        <div className="row">
          <div className="column column-one-third">
            <CardTextfield label={keys[1]} value={group[keys[1]]}/>
            <div className="row">
              <CardTextfield label={keys[2]} value={group[keys[2]]}/>
              <CardTextfield label={keys[0]} value={group[keys[0]]}/>
            </div>
            <CardTextfield label={keys[3]} value={group[keys[3]]}/>
          </div>
          <div className="column column-two-thirds">
            <div className="mui-textfield">
              <label>Description</label>
              <div className="textarea">{group[keys[8]]}</div>
            </div>
          </div>
        </div>
      <div className="legend-title">Recognition</div>
      <div className="row">
        {[4,5,6].map(num => (
          <CardTextfield key={num} label={keys[num]} value={group[keys[num]]}/>
        ))}
      </div>
      <div className="row">
        <div className="column column-one-half">
          <div className="legend-title">Contact</div>
          <div className="row">
            <CardTextfield label={keys[7]} value={group[keys[7]]} type="website"/>
            <CardTextfield label={keys[9]} value={group[keys[9]] || 'No Time Provided'} type="time"/>
          </div>
        </div>
        <div className="column column-one-half">
          <div className="legend-title">Member Makeup</div>
          <div className="material-album">
            <div className="song-table tight" data-type="album">
              <div className="header-row">
                {[0,1,2,3].map(num => (
                  <div className="header-cell">{sizeKeys[num]
                                      .replace(/([A-Z])/g, ' $1')
                                      .replace(/^./, str => (str.toUpperCase()))
                  }</div>
                ))}
              </div>
              <div className="body">
                <div className="song-row">
                  {[0,1,2,3].map(num => (
                    <div className="row-cell">{group.size[sizeKeys[num]]}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Card;