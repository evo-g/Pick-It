import { useState, useEffect } from 'react'
// import './App.css'
import AddForm from './AddForm';

function App() {
  const [choices, setChoices] = useState(JSON.parse(localStorage.getItem('choices')) || []);
  const [choice, setChoice] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    let json = JSON.stringify(choices);
    localStorage.setItem('choices', json);
  }, [choices])

  function addChoices(item) {
    if (item === '') {
      alert('enter a choice');
      return
    }
    let id = ` ${new Date()}`;
    setChoices(prev => {
      return [{ name: item, id }, ...prev];
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let item = name;
    addChoices(item);
    setName('');
  }

  const deleteChoice = (id) => {
    const filteredChoice = choices.filter((choice) => choice.id !== id);
    console.log(filteredChoice);
    setChoices(filteredChoice);
  };

  const pickOne = (choices) => {
    let temp = choices[Math.floor(Math.random() * choices.length)];
    setChoice(temp.name);
  }

  if (choices.length === 0) {
    return (
      <main className='min-h-screen flex flex-col items-center justify-center'>
        <h2>Add some choices to the list</h2>
        <AddForm handleSubmit={handleSubmit} setName={setName} name={name} />
      </main>
    )
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <h2>Add some more to the list</h2>
      <AddForm handleSubmit={handleSubmit} setName={setName} name={name} />
      {choices.map(item => (
        <div key={item.id} className='p-5'>
          <span className='px-5'>
            {item.name}
          </span>
          <button
            className='bg-white hover:bg-red-500 hover:text-white text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow capitalize'
            onClick={() => deleteChoice(item.id)}
          >Delete</button>
        </div>
      )
      )}
      {choices.length >= 2 && 
        <section className='p-5 flex flex-col items-center'>
        <button
          className='bg-orange-400 hover:bg-orange-600 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded border-none capitalize'
          onClick={() => pickOne(choices)}
        >
          Make a choice
        </button>
        {choice &&
          <div className='flex flex-col items-center'>
            <h3>You should go to... </h3>
            <span className='font-bold uppercase'>{choice}!</span>
          </div>
        }
        </section>
      }
    </main>
  )
}

export default App

// adding to list now from here need to make a component that takes current array does Math.random()
