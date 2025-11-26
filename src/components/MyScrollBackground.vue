<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const container = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (!container.value) return

  const scrollTop = window.scrollY
  const screenHeight = window.innerHeight

  const elementTop = container.value.offsetTop
  const elementBottom = elementTop + container.value.offsetHeight

  // 0% : scrollTop = elementTop (haut écran = haut div)
  // 100% : scrollTop + screenHeight = elementBottom (bas écran = bas div)
  // Donc scrollTop va de elementTop à (elementBottom - screenHeight)

  const startScroll = elementTop
  const endScroll = elementBottom - screenHeight
  const totalDistance = endScroll - startScroll

  const currentProgress = ((scrollTop - startScroll) / totalDistance) * 100

  progress.value = Math.max(0, Math.min(100, Math.round(currentProgress)))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div ref="container" class="background">
    <div class="background__content">{{ progress }}%</div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  height: 2000px;
  background: black;
  color: white;
  &__content {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
