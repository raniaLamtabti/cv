<template>
  <div class="home">
    <ParcourList title="Formation"/>
    <ParcourList title="Experience"/>
  </div>
</template>

<script>
import ParcourList from '@/components/ParcourList'

export default {
  name: "Home",
  components: {
    ParcourList,
  }
}
</script>
