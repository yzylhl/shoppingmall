<template>
  <div class="profile">
    <div class="top">
      <p>我的档案</p>
      <div class="register">
        <div class="head">
          <img src="~assets/img/profile/denglu1.svg" alt="" />
        </div>
        <div class="info">
          <h4>登录/注册</h4>
          <p>暂无绑定手机号码</p>
        </div>
        <div class="right-img">
          <img src="~assets/img/profile/right.svg" alt="" />
        </div>
      </div>
      <div class="personal-info">
        <div class="left">
          <h5>0.00元</h5>
          <p>我的余额</p>
        </div>
        <div class="center">
          <h5>0个</h5>
          <p>我的优惠券</p>
        </div>
        <div class="right">
          <h5>0分</h5>
          <p>我的积分</p>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="my-info">我的消息</div>
      <div class="my-total">积分商城</div>
      <div class="my-vip">会员卡</div>
    </div>
    <div class="floor">
      <div class="my-cart">我的购物车</div>
      <div class="my-app">下载购物APP</div>
      <div class="my-set">设置</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  components: {

  },
};
</script>

<style scoped>
.top{ 
  background-color:var(--color-tint);
  color: #fff;
}

.top>p{
  text-align: center;
  font-weight: 700;
}

.register{
  display: flex;
  margin-top: 30px;
}

.head{
  width: 50px;
  height: 50px;
  margin-left: 10px;
}

.head img{
  width: 100%;
}

.info{
  margin-left: 20px;
  flex: 1;
  font-size: 13px;
}

.info>p:before{
content: '';
  width: 15px;
  height: 13px;
  margin-right: 1px;
  display: inline-block;
  background: url(~assets/img/profile/shouji.svg) no-repeat;
  background-size: 100%;
}

.info>h4{
  margin-bottom: 15px;
  font-size: 17px;
}

.right-img{
  width: 30px;
  height: 60px;
}

.right-img img{
  width: 60%;
  margin-left: 10px;
  margin-top: 15px;
}

.personal-info{
  background-color:#fff;
  display: flex;
  border-bottom: 15px solid #eaeaeb;
}

.personal-info 
.left,.center,.right{
  flex: 1;
  padding: 15px;
  text-align: center;
  font-size: 13px;
  color: black;
}

h5{
  color: red;
  font-weight: 800;
  font-size: 17px;
  margin-bottom: 5px;
}

.body{
  height: 135px;
  border-bottom: 15px solid #eaeaeb;

}

.my-info,
.my-total,
.my-vip{
  height: 40px;
  line-height: 40px;
  color: black;
  font-size: 14px;
}

.my-info,
.my-total{
  border-bottom: 2px solid #eaeaeb;
}


.my-info:before{
  content: '';
  width: 14px;
  height: 14px;
  margin: 0 5px;
  display: inline-block;
  background: url(~assets/img/profile/xiaoxi.svg) no-repeat;
  background-size: 100%;
}

.my-total:before{
 content: '';
  width: 14px;
  height: 14px;
   margin: 0 5px;
  display: inline-block;
  background: url(~assets/img/profile/jifenshangcheng.svg) no-repeat;
  background-size: 100%;
}

.my-vip:before{
 content: '';
 width: 14px;
  height: 14px;
  margin: 0 5px;
  display: inline-block;
  background: url(~assets/img/profile/huiyuanka.svg) no-repeat;
  background-size: 100%;
}

.my-cart,
.my-app,
.my-set{
  height: 40px;
  line-height: 40px;
  color: black;
  font-size: 14px;
}

.my-cart:before{
 content: '';
  width: 14px;
  height: 14px;
  margin: 0 5px;
  display: inline-block;
  background: url(~assets/img/profile/gouwuche.svg) no-repeat;
  background-size: 100%;
}

.my-app:before{
 content: '';
 width: 14px;
  height: 14px;
  margin: 0 5px;
  display: inline-block;
  background: url(~assets/img/profile/wodeapp.svg) no-repeat;
  background-size: 100%;
}

.my-app:before{
 content: '';
 width: 14px;
  height: 14px;
  margin: 0 5px;
  display: inline-block;
  background: url(~assets/img/profile/wodeapp.svg) no-repeat;
  background-size: 100%;
}

.my-set:before{
 content: '';
 width: 14px;
  height: 14px;
  margin: 0 5px;
  display: inline-block;
  background: url(~assets/img/profile/shezhi.svg) no-repeat;
  background-size: 100%;
}
</style>