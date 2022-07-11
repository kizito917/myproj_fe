<template>
  <div class="container">
    <h4 class="mt-4">My Tasks</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task Name</th>
          <th scope="col">Task Description</th>
          <th scope="col">Start Date</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Priority</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Shop</td>
          <td>Go Shopping</td>
          <td>09/09/2001</td>
          <td>09:56am</td>
          <td>09/09/2003</td>
          <td>12:34pm</td>
          <td>High</td>
          <td>
            <button class="btn btn-success edit-btn" @click="editTask(1)">Edit</button>
            <button class="btn btn-warning">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Shop</td>
          <td>Go Shopping</td>
          <td>09/09/2001</td>
          <td>09:56am</td>
          <td>09/09/2003</td>
          <td>12:34pm</td>
          <td>High</td>
          <td>
            <button class="btn btn-success edit-btn">Edit</button>
            <button class="btn btn-warning">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Shop</td>
          <td>Go Shopping</td>
          <td>09/09/2001</td>
          <td>09:56am</td>
          <td>09/09/2003</td>
          <td>12:34pm</td>
          <td>High</td>
          <td>
            <button class="btn btn-success edit-btn">Edit</button>
            <button class="btn btn-warning">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ViewTask',
  methods: {
    editTask(id) {
      this.$router.push(`/edit-task/${id}`);
    }
  }
}
</script>

<style scoped>
  .edit-btn {
    margin-right: 2%;
  }
</style>