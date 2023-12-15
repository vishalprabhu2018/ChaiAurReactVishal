
import Person from './Person'
import Button from './Button'
import List from './list'
function App() {
  return (
    <div className="App">
  
    <Person name='vishal' age='23'/>
    <Person name='vikas' age='22'/>

    <Button text="Click me!" onClick={() => console.log("Button clicked")} />


    <List items={['apple', 'banana', 'orange']} />
    </div>
  );
}

export default App;
