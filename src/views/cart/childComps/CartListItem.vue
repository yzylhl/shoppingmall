<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-checked="itemInfo.checked" @click.native="checkedChange"></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">
          ￥{{itemInfo.price}}
        </div>
        <div class="item-count right">
          <div class="count-frame">
          x{{itemInfo.count}}
          </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name:"CartListItem",
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
  CheckButton
  },
  methods:{
    checkedChange(){
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style scoped>
#shop-item{
  width: 100%;
  display:flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title, .item-desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img{
  padding: 5px;
}

.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px
}

.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc{
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}


.info-bottom{
  margin-top: 10px;
  text-align: center;
  position:absolute;
  bottom: 4px;
  left: 10px;
  right: 10px;
}


.info-bottom .item-price{
  margin-top: 6px;
  color: rgb(214, 117, 7);
}

.item-count{
  color: rgb(14, 11, 182);
}

.item-count .count-frame{
  padding: 3px;
  border: 1px solid rgb(18, 209, 161);
  border-radius: 5px;
}
</style>