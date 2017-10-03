<template>
  <div>
    <h1 v-if="error.statusCode === 404">Not found</h1>
    <h1 v-else>エラーが発生しました</h1>
    <nuxt-link to="/">HOME</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'special'
}
</script>

<style>

</style>
