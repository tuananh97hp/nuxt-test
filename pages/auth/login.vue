<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="user.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="user.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "login",
    auth: 'guest',
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      async userLogin() {
        try {
          let response = await this.$auth.loginWith('local', { data: this.user })
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style scoped>

</style>
