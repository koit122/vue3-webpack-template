<template>
  <ul>
    <FruitsList
    v-for="fruit in fruits"
    :key="fruit"
    :name="fruit">
    {{ fruit }}
  </FruitsList>
  </ul>
</template>

<script>
import FruitsList from '~/components/FruitsList'
export default {
  components:{
    FruitsList
  },
  data() {
    return {
      fruits:['Apple','Banana','Cherry']
    }
  }
}
</script>