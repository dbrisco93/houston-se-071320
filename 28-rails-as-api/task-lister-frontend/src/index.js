document.addEventListener("DOMContentLoaded", () => {
    getTasks()
    taskFormListener()
});


const taskFormListener = () => {
  const taskForm = document.querySelector('#create-task-form')
  taskForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const inputVal = e.target.querySelector('#new-task-description').value
    createTask(inputVal)

    e.target.reset()
  })
}

const createListItem = (task) => {

  const taskItem = document.createElement('li')
  taskItem.innerText = task.description
  taskItem.dataset.taskId = task.id

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'X'
  deleteBtn.addEventListener('click',(e) => {
    const taskId = e.target.parentElement.dataset.taskId
    removeTask(taskId)
    e.target.parentElement.remove()
  })

  taskItem.appendChild(deleteBtn)
  renderListItem(taskItem)
}

const renderListItem = (item) => {
  const taskList = document.querySelector('#tasks')
  taskList.appendChild(item)
}
