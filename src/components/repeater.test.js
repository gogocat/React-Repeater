import React from 'react';
import {mount} from 'enzyme'
import Repeater from './repeater';

const dataSource = [
    {name: 'Adam', age: 3},
    {name: 'Eve', age: 2},
];

it('renders without crashing', () => {
    const wrap = mount(
        <div id="container">
          <Repeater
              data={dataSource}
              indexPrefix='name'
          > 
          {
            (item) => 
              <li>
                Hello {item.name} {item.age}
              </li>
          }
        </Repeater>
      </div>
    );
    
    expect(wrap.find('li').length).toBe(2);
    expect(wrap.find('li').at(0).text()).toEqual(`Hello ${dataSource[0].name} ${dataSource[0].age}`);
    expect(wrap.find('li').at(1).text()).toEqual(`Hello ${dataSource[1].name} ${dataSource[1].age}`);
});