<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    ><scroll class="content" ref="scroll" >
      <cart-list></cart-list>   
    </scroll>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar"

import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
#cart{
   height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px - 40px );
  /* height: 100vh; */
  overflow: hidden;
}

.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  position: relative;
  z-index: 9;
  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
</style>
