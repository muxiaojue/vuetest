<template>
  <div class="swiperBox">
    <div class="swiperImgs">
      <slot></slot>
    </div>

    <div class="indicator">
      <slot name="indicator">
        <div v-for="(item,index) in slideCount" :key="index" class="indi-item" :class="isActive(index)"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startIndex: {
      // 从第几张图开始
      type: Number,
      default: 1
    },
    interval: {
      // 滑动间隔
      type: Number,
      default: 3000
    },
    animDuration: {
      // 滑动时长
      type: Number,
      default: 500
    },
  },
  data() {
    return {
      totalWidth: 0,
      // 一个swiper的宽度
      slideCount: 0,
      // 传入的swiper个数
      currentIndex: 0,
      // 当前swiper的index
      style: null,
      // swiper的样式
    }
  },
  mounted() {
    // this.$nextTick(this.autoShow())
    setTimeout(() => {
      this.swiperInit()
      // 初始化
      this.autoShow()
    },200)
    
  },
  methods: {
    autoShow() {
      setInterval(() => {
        this.currentIndex++

        this.style.transition = 'transform ' + this.animDuration + 'ms'
      // transition实现样式过渡的设置
        this.imgSlide(-this.currentIndex * this.totalWidth)

        this.checkPosition()
      }, this.interval)
    },
    swiperInit() {
      let swiperImgs = document.querySelector('.swiperImgs')
      let slides = swiperImgs.getElementsByClassName('slide')
      
      this.slideCount = slides.length
      this.totalWidth = swiperImgs.offsetWidth
      this.style = swiperImgs.style
      // this.style指向了swiperImgs的style
      let cloneFirst = slides[0].cloneNode(true);
      let cloneLast = slides[this.slideCount - 1].cloneNode(true);
      swiperImgs.insertBefore(cloneLast, slides[0]);
      swiperImgs.appendChild(cloneFirst);
      // 前后各加一个swiper是为了最后一个与第一个的滑动过渡
      this.currentIndex = this.startIndex
      this.style.transform = `translate3d(${-this.totalWidth}px, 0, 0)`
    },
    checkPosition() {
      setTimeout(() => {
        // 这个计时器保证在动画滑动完成之后再取消transition
        this.style.transition = '0ms'
        // 取消transition设置，避免从最后一个跳到第二个产生逆向滑动动画
        if(this.currentIndex >= this.slideCount + 1) {
          // this.style.transition = '0ms'
          this.currentIndex = 1
          this.imgSlide(-this.currentIndex * this.totalWidth)
        }
        else if(this.currentIndex <= 0) {
          // this.style.transition = '0ms'
          this.currentIndex = this.slideCount
          this.imgSlide(-this.currentIndex * this.totalWidth)
        }
      }, this.animDuration);
    },
    imgSlide(position) {
      // 传入的参数是swiperImgs块移动的总距离
      
      this.style.transform = `translate3d(${position}px, 0, 0)`
      // transform实现样式变化，translate3d三个参数是x,y,z轴变化
    },

    isActive(index) {
      return {active: index === this.currentIndex - 1}
    },

    
    
  },
  
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .swiperBox {
    overflow: hidden;
    width: 100%;
    position: relative
  }
  .swiperImgs {
    display: flex;
    width:100%;
    height: 100%;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 5%;
  }

  .indi-item {
    box-sizing: border-box;
    width: 5%;
    height: 8px;
    /* border-radius: 4px; */
    background-color: #fff;
    /* line-height: 8px; */
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
  /* .sweiperImgs */
</style>