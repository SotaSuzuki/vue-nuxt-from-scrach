<template>
  <div>
    <h1>About me</h1>
    <p>count: {{ $store.state.counter }}</p>
    <button @click="$store.commit('increment')">push please</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
