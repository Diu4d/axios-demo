<template>
  <div>
    <el-card
      :body-style="{ padding: '0px' }"
      style="margin-bottom: 1.5vh"
      v-for="(item, index) in list"
      :key="index"
    >
      <a :href="item.url">
        <img :src="item.picUrl" class="image"/>
        </a>
      <div style="padding: 14px">
        <span style="font-size: 1em">{{ item.title }}</span>
        <div class="bottom">
          <time class="time">{{ item.ctime }}</time>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getCartoon() {
      this.$axios
        .get(
          "http://api.tianapi.com/dongman/index?key=afc2c53bc5efcfc684244a45118cea30"
        )
        .then((res) => {
          this.list = res.data.newslist;
          console.log(res);
        });
    },
    gourl() {

    }
    // getImage(url) {
    //   // console.log(url);
    //   if (url !== undefined) {
    //     return url[0].replace(
    //       /http\w{0,1}:\/\/p/g,
    //       "https://images.weserv.nl/?url=p"
    //     );
    //   }
    // },
  },
  created() {
    this.getCartoon();
  },
};
</script>

<style>
.time {
  font-size: 1em;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 20%;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style> 