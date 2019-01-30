import React from 'react';

const HomeView = (props) => (
  <div>
    <ul>
    {props.list.map(item => (
      <li key={item._id}>{item.start} - {item.end}</li>
    ))}
    </ul>
  </div>
);

export default HomeView;