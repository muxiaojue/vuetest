<template>
  <div class="comment" v-if="Object.keys(comment).length !== 0">
    <div class="comment-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-user">
      <img :src="comment.user.avatar" alt="">
      <div class="user-name">{{comment.user.uname}}</div>
    </div>
    <div class="comment-content">
      {{comment.content}}
    </div>
    <div class="comment-info">
      <span class="comment-date">{{comment.created | showDate}}</span>
      <span>{{comment.style}}</span>
    </div>
    <div class="comment-img" v-if="comment.images">
      <img :src="item" v-for="(item,index) in comment.images" :key="index" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      let data = new Date(value * 1000)
      return data.getFullYear() + '-' + 
      (data.getMonth() + 1) + '-' + 
      data.getDate()
      // return formatDate(date, 'yyyy-MM-dd')
    }
  },
  updated() {
    // console.log(this.comment);
    
  }
}
</script>

<style scoped>
  .comment {
    padding: 4%;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-top {
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #dae0e6;
    padding: 3% 0;
    color: #222;
  }
  .comment-user {
    padding: 4% 0;
    display: flex;
    align-items: center;
  }
  .comment-user img {
    width: 12%;
    border-radius: 50%;
    margin-right: 3%;
  }
  .comment-content {
    font-size: 15px;
    padding: 2% 0;
  }
  .comment-info {
    font-size: 80%;
    padding: 2% 0;
  }
  .comment-date {
    margin-right: 8px;
  }
  .comment-img {
    /* width: 50%; */
    display: flex;
    justify-content: left;
  }
  .comment-img img {
    flex: auto;
    width: 100%;
  }
</style>