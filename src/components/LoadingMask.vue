<template>
  <div class="loading-mask" v-show="isActive">
    <div class="loading-box">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
      <div class="spinner-text">{{ loadingText }}</div>
    </div>
  </div>
</template>

<script>
import '../assets/LoadingMask.css';

export default {
  name: "LoadingMask",
  props: {
    active: Boolean,
  },
  data() {
    return {
      // Don't mutate the prop
      isActive: this.active,
      loadingText: 'Loading...'
    }
  },
  methods: {
    disableScroll() {
      document.documentElement.style.overflow = 'hidden'
    },
    enableScroll() {
      document.documentElement.style.overflow = 'auto'
    },
    closeMask() {
      this.active = false
      this.enableScroll()
    },
    openMask(options = {}) {
      this.loadingText = options?.loadingText ?? this.loadingText
      this.active = true
      this.disableScroll()
    }
  },
  watch: {
    active(value) {
      this.isActive = value
    },
    isActive(value) {
      if (value) {
        this.disableScroll()
      } else {
        this.enableScroll()
      }
    }
  }
}
</script>

<style scoped>

</style>
