import React from 'react';
import Repeater from './components/repeater';
import './App.css';

const dataSource = [
  {name: 'Adam', age: 3},
  {name: 'Eve', age: 2},
];

function App(props) {
  return (
    <div className="App">
      <Repeater
        data={dataSource}
        indexPrefix='name'
      > 
        {
          (item) => 
            <li>
              Hello {item.name}, age: {item.age}
            </li>
        }
      </Repeater>
    </div>
  );
}

export default App;
