


export default function (state) {
  function addTodo(){
    var value = state.newTodo && state.newTodo.trim();
    if (!value) {
      return;
    }
    state.todos.push({
      id: state.todos.length + 1,
      title: value,
      completed: false
    });
    state.newTodo = "";
  }
  return {addTodo}
}