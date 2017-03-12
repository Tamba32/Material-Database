import React from 'react';

import CardTextfield from './CardTextfield.jsx';

const Card = props => {
  const { group } = props;
  const keys = Object.keys(group);
  const sizeKeys = Object.keys(group.size);
  console.log(keys[0]);
  console.log(keys[0].toUpperCase());
  return (
    <div className="card">
      <div className="title">Basic Information</div>
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
            <div className="textfield">
              <label className="textfield-label">Description</label>
              <div className="textfield-textbox">{group[keys[8]]}</div>
            </div>
          </div>
        </div>
      <div className="title">Recognition</div>
      <div className="row">
        {[4,5,6].map(num => (
          <CardTextfield key={num} label={keys[num]} value={group[keys[num]]}/>
        ))}
      </div>
      <div className="row">
        <div className="column column-one-half">
          <div className="title">Contact</div>
          <div className="row">
            <CardTextfield label={keys[7]} value={group[keys[7]]} website={group[keys[7]]}/>
            <CardTextfield label={keys[9]} value={group[keys[9]] || 'No Time Provided'}/>
          </div>
        </div>
        <div className="column column-one-half">
          <div className="title">Member Makeup</div>
          <div className="group-table">
            <div className="header-row">
              {[0,1,2,3].map(num => {
                let cell;
                if (sizeKeys[num] === 'mitCommunity') cell = 'MIT Community' ;
                else cell = sizeKeys[num]
                                        .replace(/([A-Z])/g, ' $1')
                                        .replace(/^./, str => (str.toUpperCase()));
                return (
                  <div key={num} className="header-cell">
                    {cell}
                  </div>
                );
              })}
            </div>
            <div>
              <div className="body-row">
                {[0,1,2,3].map(num => (
                  <div key={num} className="row-cell">
                    {group.size[sizeKeys[num]]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Card;