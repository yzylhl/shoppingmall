<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <div class="left-img item-img">
          <img src="~assets/img/detail/kefu1.svg" alt="">
        </div>
        <div class="text">客服</div>
      </div>
      <div>
        <div class="center-img item-img">
          <img src="~assets/img/detail/dianpu1.svg" alt="">
        </div>
        <div class="text">进店逛逛</div>
      </div>
      <div>
        <div class="right-img item-img">
          <img src="~assets/img/detail/shoucang.svg" alt="">
        </div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
export default {
  name:"DetailBottomBar",
  methods:{
    addToCart(){
      this.$emit('addCart')
}
  }
}
</script>

<style scoped>
 .bottom-bar {
    height: 50px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 13;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

.item-img {
width: 18px;
height: 18px;
margin-top: 8px;
margin-left: 17px;
margin-bottom: 3px;
}

.item-img img{
  width: 100%;
}

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    border-radius: 35px 0 0 35px;
    background-color: #2b1edf;
    color:  #fff;
  }

  .bar-right .buy {
    border-radius: 0 35px 35px 0;
    background-color: rgb(221, 87, 9);
  }
</style>