<template>
  <div>
    <news-top></news-top>
    <cartoon-news></cartoon-news>
  </div>
</template>

<script>

import CartoonNews from '../components/CartoonNews.vue';
import NewsTop from '../components/newsTop.vue';

export default {
  data() {
    return {
      list:[]
    }
  },
  components:{
    CartoonNews,
    NewsTop
  }
};
</script>

<style>
</style>