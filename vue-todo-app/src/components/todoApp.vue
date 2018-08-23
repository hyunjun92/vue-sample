<template>
  <div>
    <div class="form-group">
      <h1>Vue To-Do
        <small>List</small>
      </h1>
      <form role="form">
        <input type="text" class="form-control" placeholder="해야 할 일" name="task">
      </form>
      <button type="button" class="btn btn btn-primary">Add</button>
    </div>
    <div></div>
    <ul class="list-unstyled" id="todo"></ul>
  </div>
</template>

<script>
export default {
  name: 'todoApp'
}
</script>

<style scoped>
form {
    display: inline-block;
}
.form-group {
    text-align: center;
    margin: 10em;
    padding-bottom: 25px;
}
#todo {
    margin: 0 auto;
    width: 500px;
}
a.close {
  float: right;
}
</style>