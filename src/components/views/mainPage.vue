<template>
  <div id="Root">
    <HeaderComponent />
    <div class="Main_Wrapper">
      <div class="Main_Container">
        <section id="Section1">
          <hgroup class="Main_Title">
            <h3>좋아하니까, 나답게 :D</h3>
            <h2>PortFolio</h2>
            <h4>탄탄한 코드 위에 감각적인 인터페이스를 그리는 나나입니다.<br />
            사용하기 쉬운 UI와 기억에 남는 UX를 개발하는 일을 해요.<br />
            좋아하면 더 잘한다는 마음으로, 오늘도 즐겁게 일하고 있어요!</h4>
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
              이러한 현장 경험은 자연스럽게 웹 퍼블리싱 업무로 확장되어, 사용자 중심의 직관적이고 강렬한 첫인상을 전달하는 UI/UX 설계 역량으로 발전할 수 있었습니다.<br>
              HTML, CSS, JavaScript를 활용한 정확하고 효율적인 코딩과 크로스브라우징, 반응형 웹 구현 능력을 갖추었으며, SEO와 웹 접근성 기준을 철저히 반영하여 최적의 사용자 경험을 제공합니다.<br>
              특히, 브랜드의 핵심 메시지와 정체성을 명확하게 시각화하고, 오프라인과 온라인을 아우르는 통합 퍼블리싱 전략을 수립 및 실행하는 데 강점을 가지고 있습니다.<br>
              앞으로도 다양한 플랫폼에서 차별화된 사용자 경험과 일관된 브랜드 아이덴티티를 완성하는 웹 퍼블리셔로 성장해 나가겠습니다.</h4>
          </hgroup>
        </section>
        <section id="Section3" ref="containerRef" :style="sectionStyle">
          <hgroup>
            <h3>Web Project</h3>
          </hgroup>
          <div v-for="(project, index) in projects" :key="index" class="Proj_Container">
            <ul class="Proj_Title">
              <li class="date">{{ project.year }}</li>
              <li class="Title">{{ project.title }}</li>
              <li class="role">{{ project.role }}</li>
              <li class="desc">{{ project.desc }}</li>
            </ul>
            <div class="Btn_Container">
              <a href="#" @click.prevent="openPopup(project)">Work Process</a>
            </div>
          </div>
          <div v-if="popupVisible" class="popup-overlay" @click.self="closePopup">
            <div class="popup-content">
              <div class="popBtnContainer">
                <button @click="closePopup">닫기</button>
              </div>
              <div class="popImgContainer" v-if="selectedProject.images && selectedProject.images.length">
                <button class="prevBtn" @click="prevImage">◀</button>
                <img
                  :src="selectedProject.images[currentImageIndex]"
                  alt="Project Image"
                  class="slide-image"
                />
                <button class="nextBtn" @click="nextImage">▶</button>
              </div>
              <div class="introContainer">
                <h2>💼{{ selectedProject.title }}</h2>
                <p><strong>개발기간</strong><br>{{ selectedProject.year }}</p>
                <p><strong>담당역할</strong><br>{{ selectedProject.role }}</p>
                <p><strong>사용기술</strong><br>{{ selectedProject.used }}</p>
              </div>
              <div class="descContainer">
                <h2>📌프로젝트 개요</h2>
                <p>{{ selectedProject.intro }}</p>
              </div>
              <div class="workContainer">
                <h2>🔧주요업무 및 역할</h2>
                <p v-html="selectedProject.work"></p>
              </div>
              <div class="majorContainer">
                <h2>📊 주요기능</h2>
                <p v-html="selectedProject.major"></p>
              </div>
            </div>
          </div>
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
import { defineComponent,  onBeforeUnmount, ref, computed } from 'vue'
import HeaderComponent from "../HeaderComponent.vue"

export default defineComponent({
  components: {
    HeaderComponent
  },
  setup() {
    let rafId = null
    const containerRef = ref(null)

    // 보여줄 프로젝트 목록
    const projects = ref([
      { 
        year: '2024 - 2025', 
        title: '(주)해안건축 PCM 경영관리시스템',
        role:'Prototype 제작 | Web Publishing + FrontEnd 개발 Support',
        desc:'(주)해안건축의 사내 업무 효율화를 위한 경영관리시스템 구축' ,
        intro:'(주)해안건축의 내부 업무 효율화를 위한 경영관리시스템을 구축하였습니다. 기존 Excel 위주로 관리되던 수주, 매출, 인원 등의 데이터를 웹 기반 시스템으로 통합하여 실시간 관리 및 이력 추적이 가능하도록 하였습니다.관리자 권한에 따라 페이지 접근을 제어할 수 있으며, 다양한 지표를 월간 / 연간 단위로 시각화하여 제공하는 것이 핵심 목적입니다.',
        used:'Figma, Vue.js, MSSQL, Excel.js, Chart.js',
        work:'- 시스템 전체 기획 및 아키텍처 설계<br>- 사용자 권한(Access)에 따른 현황 / 관리 페이지 접근 제한 기능 구현<br>- 매출, 수금, 수주, 배분, 프로젝트, 단가, 인원, 목표, 비용 등 각 관리/현황 페이지 개발<br>- 월간 / 연간 데이터를 차트 및 테이블 형태로 시각화관리 이력(History) 기능을 통한 변경 로그 관리<br>- Excel 업로드 / 다운로드 기능을 통한 자료 연동 및 대량 처리 지원<br>- 데이터 무결성과 실시간 반영을 고려한 UX 개선',
        major:'- 사용자 권한 기반의 접근 제어 및 메뉴 노출 제어<br>- 다중 테이블 기반 복합 데이터 구조 설계 및 관리<br>- DevExtreme 라이브러리를 활용한 데이터 그리드, 차트 구성<br>- Excel 파일을 통해 대량 데이터 등록 / 수정<br>- 각 페이지별 수정 내역 이력 관리 (사용자, 시간, 내용)',
        images:[
          '/img/pcm-1.png',
          '/img/pcm-2.png',
          '/img/pcm-3.jpg',
          '/img/pcm-4.png',
          '/img/pcm-5.png',
          '/img/pcm-6.png',
          '/img/pcm-7.jpg',
          '/img/pcm-8.png',
          '/img/pcm-9.png',
          '/img/pcm-10.png',
        ],
        backgroundImage: 'url(/img/pcm-bg.jpg)' 
      },
    ])
    const currentIndex = ref(0)
    const popupVisible  = ref(false);
    const selectedProject = ref(projects.value[0] || {})
    const currentImageIndex = ref(0)

    const sectionStyle = computed(() => {
      if (selectedProject.value?.backgroundImage) {
        return {
          backgroundImage: selectedProject.value.backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      }
      return {}
    })

    const openPopup = (project) => {
      selectedProject.value = project
      currentImageIndex.value = 0 // 슬라이더 초기화
      popupVisible.value = true
    }

    const closePopup = () => {
      popupVisible.value = false
    }

    onBeforeUnmount(() => {
      window.removeEventListener('wheel')
      cancelAnimationFrame(rafId)
    })

    const nextImage = () => {
      const total = selectedProject.value.images?.length || 0
      if (total === 0) return
      currentImageIndex.value = (currentImageIndex.value + 1) % total
    }

    const prevImage = () => {
      const total = selectedProject.value.images?.length || 0
      if (total === 0) return
      currentImageIndex.value = (currentImageIndex.value - 1 + total) % total
    }

    return {
      containerRef,
      projects,
      currentIndex,
      openPopup,
      closePopup,
      selectedProject,
      popupVisible,
      prevImage,
      nextImage,
      currentImageIndex,
      sectionStyle
    }
  }
})
</script>

<style scoped>
  @import url('../../assets/main.css');
</style>