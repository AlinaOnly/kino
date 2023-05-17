
<template>
    <div class="events" v-if="events" v-for="event of events">
        events
        <NuxtLink :to="'/index/' + event.id">{{ event.name }}</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
  .events{
    color: black;
  }

</style>

<script setup lang="ts">
  import {ref} from 'vue'
  const events = ref([
    {id: 1, name: "Event 1"},
    {id: 2, name: "Event 2"},
    {id: 3, name: "Event 3"},
    {id: 4, name: "Event 4"},
  ])
</script>
