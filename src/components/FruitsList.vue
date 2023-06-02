<template>
  <h1>{{ fruit }}</h1>
</template>

<script>
export default {
  props:{
    fruit:{
      type:String,
      default:''
    }
  }
}
</script>
