document.addEventListener ("DOMContentLoaded", () => {
  let form = document.querySelector ('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault ()
    buildToDo (document.getElementById ('new-task-description').value)
    form.reset ()
  })
});

function buildToDo (todo) {
  console.log (todo)
  let ul = document.createElement ('ul')
  let btn = document.createElement ('button')
  btn.addEventListener ('click', handleDelete)
  btn.textContent = 'x'
  ul.textContent = `${todo} `
  ul.appendChild (btn)
  document.querySelector ('#list').appendChild(ul)
  console.log (ul)
}

function handleDelete (e) {
  e.target.parentNode.remove ()
}