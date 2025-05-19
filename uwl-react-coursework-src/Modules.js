
import React from 'react';

function Modules(props) {
  return (
    <div>
      <h3>Modules List</h3>
      <ul>
        {props.modules.map((mod, index) => (
          <li key={index}>
            {mod.name} | {mod.code} | {mod.startDate} to {mod.endDate} | {mod.courseName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Modules;
