import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import TimeInfo from './components/TimeInfo';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>To-Do List</h1>
        <TimeInfo />
      </header>
      <main>
        <div className="controls-container">
          <TodoForm />
          <FilterBar />
        </div>
        <TodoList />
      </main>
    </div>
  );
}

export default App;