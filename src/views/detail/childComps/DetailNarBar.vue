<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/detail/arrow-right.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="title-item"
        :class="{ active: currentIndex === index }"
        @click="titleClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNarBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "推荐","评论"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    backClick(){
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.nav-bar{
  position: fixed;
  background-color: #fff;

}

.back img{
  margin-top: 11px;
  width: 40%;
}

.title {
  display: flex;
}

.title-item {
  flex: 1;
  font-size: 15px;
}

.active {
  color: var(--color-high-text);
}
</style>