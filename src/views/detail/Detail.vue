<template>
  <div id="detail">
    <detail-nar-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nar-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addTocart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
import DetailNarBar from "./childComps/DetailNarBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailBottomBar from "./childComps/DetailBottomBar"
import BackTop from "components/content/backTop/BackTop";



import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

// import Toast from "components/common/toast/Toast"

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { debounce } from "common/utils";

import {mapActions} from 'vuex'

export default {
  name: "Detail",
  components: {
    DetailNarBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    BackTop,
    Scroll,
    GoodsList,
    
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY:null,
      currentIndex:0,
      isShowBackTop: false,
      // message:'',
      // show:false

    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;

    //2.根据iid请求详情的数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      //1.获取顶部的图片轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3.创建店铺信息对象
      this.shop = new Shop(data.shopInfo);

      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      //5.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      //第二次获取：值不对
      //值不对的原因：图片没有计算在内
      //根据最新的数据，对应的DOM是已经被渲染出来
      //但是图片依然是没有加载完（目前获取到的offsetTop不包含其中的图片）
      //offsetTop值不对的时候，都是因为图片的问题

      // this.$nextTick(() => {
      //   this.themeTopYs = [];

      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)

      //   console.log(this.themeTopYs);
      // });
    });

    //3.请求详情推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 600);

    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },
  updated() {},
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh();

      this.themeTopYs = [];

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // this.themeTopYs.push(0);

    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position){
    //1.获取y值
    const positionY = -position.y

    //2.positionY和主题中的值进行对比
    let length = this.themeTopYs.length
    for(let i = 0;i < length; i++){
      if(this.currentIndex !== i && ((i < length - 1  && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) 
      || (i === length - 1 && positionY > this.themeTopYs[i]))){
        this.currentIndex = i
        console.log(this.currentIndex);
        this.$refs.nav.currentIndex = this.currentIndex
      
      }
    }

    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      //1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 800;
    },
    addTocart(){
      //1.获取购物车需要展示的信息
      const product = {}
      product.iid =  this.iid
      product.image =  this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice

      //2.将商品加入到购物车里面(1.Promise, 2.mapActions)
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res)
      // })

      this.addCart(product).then(res => {
        // this.show = true
        // this.message = res

        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 2000);

        this.$toast.show(res, 2000)
      })

      //3.添加到购物车成功


    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
     height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100% - 93px );
  /* height: 100vh; */
}
</style>