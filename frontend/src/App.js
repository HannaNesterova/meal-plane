import { useEffect, useState } from 'react';
import './App.css';
import MyMeals from './MyMeals';
import { addMeal, getAllMeals } from './FetchMeals';



function App() {
const[myMeal, setMeal] = useState([]);
const [title, setTitle] = useState('');

useEffect(() => {
  getAllMeals(setMeal) //setMeals что это значит,откуда мы это берем и для чего,или это меняет наше состояние?
},[])

  return (
    <div>
      <h1>MEAL PLAN</h1>
      <input type="text"
      placeholder="Add a meal"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => addMeal(title, setTitle, setMeal)}>
        ADD
      </button>
    {myMeal.map((meal) => <MyMeals key={meal._id} addText={meal.title} />)}
    </div>
  );
}

export default App;
