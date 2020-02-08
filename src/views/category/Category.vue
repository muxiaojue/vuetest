<template>
  <div id="category">
    <category-nav/>
    <div class="category-content">
      <scroll class="scroll-list scroll">
        <category-list :categoryList="categoryList" @categoryClick="categoryClick"/>
      </scroll>
      <scroll class="scroll-content scroll">
        <category-sub :subCategory="subCategory"/>
        <tab-control :titles="titles" @tabClick="tabClick"/>
        <good-lists :goods="categoryDetail"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import CategoryNav from './categoryComp/CategoryNav.vue'
import CategoryList from './categoryComp/CategoryList.vue'
import CategorySub from './categoryComp/CategorySub.vue'

import {getCategory, getSubCategory, getCategoryDetail, Detail} from 'network/category.js'

import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodLists from 'components/content/goodLists/GoodLists.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  data() {
    return {
      categoryList: [],
      subCategory: [],
      titles: ['流行', '新款', '精选'],
      tabTypes: ['pop', 'new', 'sell'],
      categoryDetail: [],
      currentCateIndex: 0,
      currentTabIndex: 0,
    }
  },
  components: {
    CategoryNav,
    CategoryList,
    CategorySub,
    TabControl,
    GoodLists,
    Scroll,
    
  },
  created() {
    this.getInitData()
  },
  computed: {
    maitKey() {
      return this.categoryList[this.currentCateIndex].maitKey
    },
    miniWallkey() {
      return this.categoryList[this.currentCateIndex].miniWallkey
    },
    tabType() {
      return this.tabTypes[this.currentTabIndex]
    }
  },
  methods: {
    // 获取数据方法
    getInitData() {
      getCategory().then(res => {
        this.categoryList = res.data.category.list
        this.getSubCategory(0)
        this.getCategoryDetail(this.miniWallkey, this.tabType)
      })
    },
    getSubCategory(index) {
      getSubCategory(this.maitKey).then(res => {
        this.subCategory = res.data.list
      })
    },
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then(res => {
        // console.log(res)
        this.categoryDetail = res
      })
    },

    // 事件监听方法
    categoryClick(index) {
      this.currentCateIndex = index
      this.getSubCategory(index)
      this.getCategoryDetail(this.miniWallkey, this.tabType)
    },
    tabClick(index) {
      this.currentTabIndex = index
      this.getSubCategory(index)
      this.getCategoryDetail(this.miniWallkey, this.tabType)
    }
  }
  
}
</script>

<style scoped>
  #category {
    height: 100vh;
    width: 100%;
    position: relative;
  }
  .category-content {
    /* position: relative; */
    /* width: 100%; */
    /* height: 100%; */
    margin: 6% 0;

  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .scroll-list {
    width: 20%;
    left: 0;
  }
  .scroll-content {
    width:80%;
    text-align: center;
    right: 0;
  }
  .tab-control {
    margin-top: 4%;
  }
</style>