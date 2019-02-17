$(function() {
  function buildHTML(todo) {
    var html = $('<li class="todo">').append(todo.content);
    return html;
  }

