<template>
    <swiper class="detail-swiper">
      <swiper-item :key="index" v-for="(item, index) in topImages" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"

export default {
  name:"DetailSwiper",
  components:{
    Swiper, 
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
  
}
</script>

<style scoped>
  .detail-swiper{
    height: 400px;
    overflow: hidden;
  }
</style>