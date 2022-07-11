<template>
  <div class="container">
    <h4 class="text-center mt-2">Welcome Back...Login!!!</h4>
    <div>
      <div class="form-group mb-4">
        <label for="username">Username</label>
        <input type="text" class="form-control" placeholder="Enter Email" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Password</label>
        <input type="password" class="form-control" placeholder="Enter Password" />
      </div>
      <div>
        <button class="btn btn-success">Login</button>
      </div>
      <div>
        <p>Don't have an account? <router-link to="/register">Register an account</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>