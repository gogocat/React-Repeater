# React-Repeater
A simple React Repeater component that try to make writing loops more elegant.

```
npm install

npm start
```

Repeater is a super simple higher order component that take the child element and repeat it with data.
The child element must wrap inside an function in order to reference the data.

Example:

```
const dataSource = [
  {name: 'Adam', age: 3},
  {name: 'Eve', age: 2},
];

function App() {
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

```

This example app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
