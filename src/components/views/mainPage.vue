<template>
  <div id="Root">
    <HeaderComponent />
    <div class="Main_Wrapper">
      <div class="Main_Container">
        <section id="Section1">
          <hgroup class="Main_Title">
            <h4>WEB PUBLISHER</h4>
            <h2>PortFolio</h2>
          </hgroup>
          <!-- <ul class="MenuBtn_Container">
            <li>Introduce</li>
            <li>Web Projects</li>
            <li>Design Projects</li>
          </ul> -->
        </section>
        <section id="Section2">
          <hgroup>
            <h3>Introduce</h3>
            <h2>Foundation fuels <span>'Excellence'</span></h2>
            <h4>
              7년간 사인물 디자이너로서 기초 설계부터 디자인, 제작, 감리까지 전 과정을 책임지며 쌓아온 탄탄한 경험을 바탕으로, 구조적 사고와 세심한 요구 분석을 통해 클라이언트의 기대를 뛰어넘는 결과물을 지속적으로 만들어왔습니다.
              이러한 현장 경험은 자연스럽게 웹 퍼블리싱 업무로 확장되어, 사용자 중심의 직관적이고 강렬한 첫인상을 전달하는 UI/UX 설계 역량으로 발전할 수 있었습니다.
              HTML, CSS, JavaScript를 활용한 정확하고 효율적인 코딩과 크로스브라우징, 반응형 웹 구현 능력을 갖추었으며, SEO와 웹 접근성 기준을 철저히 반영하여 최적의 사용자 경험을 제공합니다.
              특히, 브랜드의 핵심 메시지와 정체성을 명확하게 시각화하고, 오프라인과 온라인을 아우르는 통합 퍼블리싱 전략을 수립 및 실행하는 데 강점을 가지고 있습니다.<br>
              앞으로도 다양한 플랫폼에서 차별화된 사용자 경험과 일관된 브랜드 아이덴티티를 완성하는 웹 퍼블리셔로 성장해 나가겠습니다.</h4>
          </hgroup>
        </section>
        <ul class="MenuBtn_Container">
          <li><a href="#Section2">Introduce</a></li>
          <li><a href="#Section3">Web Projects</a></li>
          <li><a href="#Section4">Design Projects</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from 'vue'
import HeaderComponent from "../HeaderComponent.vue"

export default defineComponent({
  components: {
    HeaderComponent
  },
  setup() {
    let scrollTarget = window
    let isScrolling = false
    let targetScroll = 0
    let currentScroll = 0
    let rafId = null

    const scrollSpeed = 4  // 스크롤 속도 배율 (기본 1.0, 높일수록 빨라짐)

    function smoothScroll() {
      currentScroll += (targetScroll - currentScroll) * 0.1
      scrollTarget.scrollTo(0, currentScroll)

      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        rafId = requestAnimationFrame(smoothScroll)
      } else {
        isScrolling = false
      }
    }

    function onWheel(e) {
      e.preventDefault()

      targetScroll += e.deltaY * scrollSpeed
      targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight))

      if (!isScrolling) {
        isScrolling = true
        smoothScroll()
      }
    }

    onMounted(() => {
      scrollTarget = window
      targetScroll = window.scrollY
      currentScroll = window.scrollY

      window.addEventListener('wheel', onWheel, { passive: false })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(rafId)
    })

    return {}
  }
})
</script>


<style scoped>
  @import url('../../assets/main.css');
</style>