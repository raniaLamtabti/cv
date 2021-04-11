<template>
  <div class="cv">
    <h1>CV</h1>
    <ParcourList title="Formation"/>
    <ParcourList title="Experience"/>
  </div>
</template>

<script>
import ParcourList from '@/components/ParcourList'

export default {
  name: "CvResult",
  components: {
    ParcourList,
  }
}
</script>