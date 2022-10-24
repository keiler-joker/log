const taskTemplate = document.querySelector('#template-task');

new FileUploader({
  element: document.querySelector('.dnd-file-uploader'),
  uploadUrl: 'http://localhost:8080/upload',
  taskRenderer: function (task) {
    const taskDOM = taskTemplate.content.firstElementChild.cloneNode(true);
    const nameDOM = taskDOM.querySelector('.task-name');
    nameDOM.textContent = task.name;
    const progressDOM = taskDOM.querySelector('.task-progress');
    const progress = `${task.progress}%`
    progressDOM.textContent = progress;
    if (task.status === TASK_STATUS.PROCESSING) {
      taskDOM.style.background = `linear-gradient(to right, #ffffff ${progress}, #ffffff ${progress}, #ffffff 50%)`
    } else if (task.status === TASK_STATUS.SUCCESS) {
      taskDOM.style.background = '#ffffff';
      nameDOM.href = task.url;
    } else if (task.status === TASK_STATUS.ERROR) {
      // taskDOM.style.length=500px;
      // taskDOM.style.right='500px'
      // taskDOM.style.height='50px';
      taskDOM.style.background = '#C9F1FD';

    }
    return taskDOM;
  }
});