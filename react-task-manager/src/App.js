import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'March 20th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at work',
      day: 'March 21st at 5pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery shopping',
      day: 'March 23rd at 5pm',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 5000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder 

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => {
        setShowAddTask
          (!showAddTask)
      }}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0
        ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        :
        'No tasks to show'}
    </div>
  );
}

export default App;