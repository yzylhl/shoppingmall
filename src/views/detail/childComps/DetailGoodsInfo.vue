<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"
      :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>
<script>
export default({
  name:"DetailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
    }
  },
  data(){
    return {
      counter:0,
      imagesLength:0
    }
  },
  methods:{
    imgLoad(){
      //判断，所有的图片都加载完了，那么进行一次回调就可以了
      if(++this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
})
</script>
<style scoped>
.goods-info{
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-list img{
width: 100%;
}

.desc{
  font-size: 15px;
  color: #145aa0;
}

.info-key{
  text-align: center;
  color:var(--color-high-text);
  font-size: 20px;
}
</style>