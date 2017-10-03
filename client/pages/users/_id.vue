<template>
  <div>あああ</div>
</template>

<script>
export default {
  validate ({ params }) {
    // It must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>
