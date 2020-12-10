<template>
    <div class="check-button" :class="{check:isChecked}">
      <!-- <img src="~assets/img/common/gou6.svg" alt=""> -->
    </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{
  height: 16px;
  border: 2px solid #677;
  width: 16px;
  border-radius: 50%;
}

/* .check-button img{
  width: 100%;
} */

.check{
  /* border-color: rgb(31, 3, 189); */
  background-color: rgb(16, 231, 177);
}
</style>