<script>
export default {
  name: "Breadcrumbs",
  props: {
    items: {
      type: Array,
      required: true,
    },
    
  },
}
</script>

<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2">
      <li v-for="(item, index) in items" :key="index">
        <div class="flex items-center">
          <svg v-if="index != 0" class="h-5 w-auto text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
          <div v-if="item.disabled" class="ml-2 text-sm font-medium text-pink-500 cursor-default">
            {{ item.text }}
          </div>
          <router-link v-else :to="item.to" class="ml-2 text-sm font-medium text-pink-400 hover:text-pink-700">
            {{ item.text }}
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

