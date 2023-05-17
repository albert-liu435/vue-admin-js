<template>
  
    <h1>hello</h1>
  <p>{{ username }}</p>

</template>

<script>
export default {
    computed: {
        username() {
        // 我们很快就会看到 `params` 是什么
        console.log(this.$route.params)
        // return this.$route.params.username
        return 'abc';
        },
  }
}
</script>

<style>

</style>