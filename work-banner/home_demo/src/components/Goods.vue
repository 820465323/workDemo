<template>
  <div class="goods" style="width: 300px;height: 300px;border: 1px solid red">
    <h1>{{ goods.title }}</h1>
    <h1>{{ goods.imgUrl }}</h1>
    <h1>{{ goods.number }}</h1>
    <h1>{{ goods.price }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      goods:{title:`锤子手机`,price:2988,number:1,imgUrl:`./goods.kpg`}
    }
  }
}
</script>
