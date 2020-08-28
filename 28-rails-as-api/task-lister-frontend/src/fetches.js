
const getTasks = () => {
  fetch('http://localhost:3000/tasks')
  .then(res => res.json())
  .then(tasks => {
    tasks.forEach(task => {
      createListItem(task)
    })
  })
}

const removeTask = (taskId) => {

  fetch(`http://localhost:3000/tasks/${taskId}`,{
    method: "DELETE"
  })
  .then(res => res.json())
  .then(data => console.log(data))
}

const createTask = (task) => {

  const newTask = {
    task: {
      description: task
    }
  }

  fetch('http://localhost:3000/tasks',{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  })
  .then(res => res.json())
  .then(task => createListItem(task))
}
