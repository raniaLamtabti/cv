<template>
    <div class="container card">
        <h1>{{ title }}</h1>
        <ParcourInput/>
        
        <ParcourItem title="Item 1"/>
        <ParcourItem title="Item 2"/>
        <!-- <div v-for="item in parcourListItems" :key="item.id" class="item">
            <div class="">
                <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled v-model="item.title">
            </div>
        </div> -->
    </div>
</template>

<script>
import ParcourInput from '@/components/ParcourInput'
import ParcourItem from '@/components/ParcourItem'

export default ({
  name: 'ParcourList',
  components: {
    ParcourItem,
    ParcourInput
  },
  props: {
    title: '',
  },
//   data () {
//     return {
//       newList: '',
//       parcourListItems: [
//         {
//           'id': 1,
//           'title': 'Finish Vue Screencast',
//         },
//         {
//           'id': 2,
//           'title': 'Take over world',
//         },
//       ]
//     }
//   },
})
</script>

<style>
.card{
    padding-bottom: 20px;
    margin-bottom: 20px;
}
/* .item{
    margin-bottom: 20px;
} */
</style>