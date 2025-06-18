<template>
  <div id="Root">
    <HeaderComponent />
    <div class="Main_Wrapper">
      <div class="Main_Container">
        <section id="Section1">
          <hgroup class="Main_Title">
            <h3>'기초가 단단하면, 무엇이든 견고하게 완성됩니다.'</h3>
            <h2>Build the structure of WEB</h2>
            <h4>수많은 매장의 첫인상을 설계하며 깨달은 ‘기초의 힘’을 웹으로 확장했습니다.<br>사용자에게 강렬한 첫인상을 남기기 위한 웹 퍼블리싱, 그 시작과 완성을 책임지는 웹 퍼블리셔, 한예린 입니다.</h4>
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
              7년간 사인물 디자이너로서, 기초 설계부터 디자인, 제작, 감리까지 전 과정을 책임지며 쌓아온 탄탄한 경험을 바탕으로, 구조적 사고와 세심한 요구 분석을 통해 클라이언트의 기대를 뛰어넘는 결과물을 지속적으로 만들어왔습니다.
              이러한 현장 경험은 자연스럽게 웹 퍼블리싱 업무로 확장되었으며, 사용자 중심의 직관적이고 강렬한 첫인상을 전달하는 UI/UX 설계 역량으로 발전하였습니다.
              HTML, CSS, JavaScript를 활용한 정확하고 효율적인 코딩과 크로스브라우징, 반응형 웹 구현 능력을 갖추었으며, SEO와 웹 접근성 기준을 철저히 반영하여 언제나 최적의 사용자 경험을 실현하고자 노력하고 있습니다.<br>
              특히 브랜드의 핵심 메시지와 정체성을 명확하게 시각화하고, 오프라인과 온라인을 아우르는 통합 퍼블리싱 전략을 수립 및 실행하는 데 강점을 가지고 있습니다.<br>
              앞으로도 다양한 플랫폼에서 차별화된 사용자 경험과 일관된 브랜드 아이덴티티를 완성하는 웹 퍼블리셔로 성장해 나가겠습니다.
              <a href="https://www.notion.so/216ffb53e14a8041af09de3909825c86?source=copy_link"><font-awesome-icon :icon="['fas', 'circle-chevron-right']" />자기소개 더보기</a></h4>
          </hgroup>
        </section>
        <section id="Section3" ref="containerRef" :style="sectionStyle">
              <video
              v-if="isVideoBackground"
              class="bg-video"
              autoplay
              muted
              loop
              playsinline
              :src="currentProject.backgroundImage"
            ></video>
          <hgroup>
            <h3>Web Project</h3>
          </hgroup>
          <div class="Section3Wrap">
            <button @click="prevProject" :disabled="currentIndex === 0" class="prevProj">Prev</button>
            <div class="Proj_Container" :style="{ backgroundImage: currentProject.backgroundImage ? `url(${currentProject.backgroundImage})` : 'none' }">
              <ul class="Proj_Title">
                <li class="date">{{ currentProject.year }}</li>
                <li class="Title">{{ currentProject.title }}</li>
                <li class="role">{{ currentProject.role }}</li>
                <li class="desc">{{ currentProject.desc }}</li>
              </ul>
              <div class="Btn_Container">
                <a href="#" @click.prevent="openPopup(currentProject)">View More</a>
              </div>
            </div>
            <button @click="nextProject" :disabled="currentIndex === projects.length - 1" class="nextProj">Next</button>
          </div>
          <div v-if="popupVisible" class="popup-overlay" @click.self="closePopup">
            <div class="popup-content">
              <div class="popBtnContainer">
                <h4>Project Info</h4>
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
          </div>
        </section>

        <section id="Section4" :style="designSectionStyle">
          <video v-if="isDesignVideoBackground" autoplay muted loop playsinline :src="designCurrentProject.designbackgroundImage" class="bg-video" />
          <hgroup>
            <h3>Design Project</h3>
          </hgroup>
          <div class="Section4Wrap">
                      <button @click="prevDesignProject" :disabled="designIndex === 0" class="prevProj">Prev</button>
          <div class="Proj_Container" :style="{ backgroundImage: designCurrentProject?.designbackgroundImage ? `url(${designCurrentProject.designbackgroundImage})` : 'none' }">

              <ul class="Proj_Title">
                <li class="date">{{ designCurrentProject.year }}</li>
                <li class="Title">{{ designCurrentProject.title }}</li>
                <li class="role">{{ designCurrentProject.role }}</li>
                <li class="desc">{{ designCurrentProject.desc }}</li>
              </ul>
              <div class="Btn_Container">
                <a href="#" @click.prevent="openPopup(designCurrentProject)">View More</a>
              </div>
            </div>
          <button @click="nextDesignProject" :disabled="designIndex === designprojects.length - 1" class="nextProj">Next</button>
          </div>

          <div v-if="popupVisible" class="popup-overlay" @click.self="closePopup">
            <div class="popup-content">
              <div class="popBtnContainer">
                <h4>Project Info</h4>
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
                <p><strong>기획기간</strong><br>{{ selectedProject.year }}</p>
                <p><strong>기획분야</strong><br>{{ selectedProject.role }}</p>
                <p><strong>사용기술</strong><br>{{ selectedProject.used }}</p>
              </div>
            </div>
          </div>
        </section>


        <ul class="MenuBtn_Container">
          <li><a href="#Section2">Introduce</a></li>
          <li><a href="#Section3">Web Projects</a></li>
          <li><a href="#Section4">Design Projects</a></li>
        </ul>
        <button class="onClickTop" @click="onClickTop">Top</button>
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
    //const designcontainerRef = ref(null);
    // 보여줄 프로젝트 목록
    const projects = ref([ 
      // web proj start
      { 
        year: '2025', 
        title: 'BIMIL Add-In',
        role:'Prototype 제작 | Web Publishing + FrontEnd 개발 Support',
        desc:'BIMPeers가 개발한 Autodesk Revit 사용자를 위한 Add-In 플랫폼 공식홈페이지 구축' ,
        intro:'BIMPeers가 개발한 Autodesk Revit 사용자들을 위한 생산성 도구인 BIMIL Add-In의 공식 웹사이트를 구축하였습니다. 기존 Add-In 기능을 명확하게 소개하고, 사용자들이 설치부터 실사용까지 필요한 정보를 직관적으로 파악할 수 있도록 콘텐츠 구성과 UI 설계를 진행하였습니다.해당 플랫폼은 BIMPeers 사의 제품 홍보뿐만 아니라 실제 실무자들의 설계 효율 개선을 지원하는 중요한 채널로 활용됩니다.',
        used:'Figma, Blazor WebAssembly',
        work:'- BIMIL Add-In의 기능 및 목적을 직관적으로 안내할 수 있는 콘텐츠 구조 설계<br>- 사용자 권한(Access)에 따른 현황 / 관리 페이지 접근 제한 기능 구현<br>- 제품 소개, 설치 가이드, 자주 묻는 질문 등 주요 메뉴 및 정보 배치 기획<br>- 반응형 UI 설계 및 구현을 통해 다양한 디바이스에서의 접근성 확보<br>- 사용자의 관심 유입을 위한 제품 특징 중심의 메인 페이지 구성<br>- Add-In 업데이트 및 버전별 기능 안내를 위한 구조 마련',
        major:'- BIMIL Add-In의 주요 기능, 활용 예시, 설치 효과 등을 시각적 요소와 함께 설명<br>- 사용자가 쉽게 Add-In을 설치하고 적용할 수 있도록 단계별 안내 제공<br>- Add-In 버전별 변경사항 소개<br>- PC, 태블릿, 모바일 등 다양한 환경에서 최적화된 레이아웃 제공<br>',
        images:[
          '/img/bimil-1.png',
          '/img/bimil-2.png',
          '/img/bimil-3.png',
          '/img/bimil-bg.png',
        ],
        backgroundImage: '/ArchiFlim_EX.gif',
      },
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
        backgroundImage: '/img/pcm-bg.jpg',
      },
      { 
        year: '2023 - 2024', 
        title: '자이가이스트(주)',
        role:'Prototype 제작 | Web Publishing + FrontEnd 개발 Support',
        desc:'자이가이스트(주) 모듈형 주택 Web Viewer, Web Editor 구축' ,
        intro:'GS건설 계열사인 자이가이스트(주)는 목조 모듈러 주택을 전문으로 하는 기업으로, 자사 주택 제품의 프로토타입 및 커스터마이징 기능을 제공하기 위한 Web 기반 3D Viewer 및 Editor를 구축하였습니다. Three.js와 Babylon.js를 활용해 3D 모델을 실시간 렌더링하고, 사용자 중심의 모듈 조합형 설계 도구를 제공하여 비전문가도 직접 원하는 집을 구성할 수 있는 UX를 구현한 것이 핵심입니다.',
        used:'Figma, Vue.js, Babylon.js, Three.js',
        work:'- Vue.js + Three.js 기반의 3D Viewer / Editor 페이지 설계 및 구현<br>- 3D 모델 로딩 및 렌더링 최적화, 카메라 제어, 마우스 이벤트 처리 등 Three.js 전반 구현<br>-모듈(지붕, 내/외장재, 벽체 등) 선택 및 배치 기능 구현<br>- 사용자 입력 기반 실시간 모델 업데이트 및 상태 저장 기능 개발<br>- 사용자가 구성한 설계 결과를 저장하여 실제 주택 제작 관련 상담 시 상담 참조 자료로 활용할 수 있도록 구조 설계<br>- Editor 모드와 Viewer 모드 간의 전환 및 기능 구분 구현',
        major:'- 자이가이스트의 모듈러 주택 프로토타입 모델과 도면을 Three.js로 실시간 3D 렌더링하여 시각화<br>- 사용자 맞춤 설계를 위한 모듈 선택 및 조합 인터페이스 제공.<br>- 사용자가 직접 지붕, 내장재, 외장재, 가벽 등 구성 요소를 선택해 원하는 주택을 자유롭게 커스터마이징 가능<br>- 하나의 화면에서 1층, 2층 등 다층 구조를 동시에 설계 및 미리보기 가능<br>- Three.js 기반의 직관적인 조작 UX: 드래그, 클릭, 마우스 휠 등을 활용한 조작<br>- 각 페이지별 수정 내역 이력 관리 (사용자, 시간, 내용)',
        images:[
          '/img/xigeist-bg.jpg',
          '/img/xigeist-1.png',

        ],
        backgroundImage: 'mainMedia.mp4',
      },
      // web proj end
    ]);

    const currentIndex = ref(0);
    const popupVisible  = ref(false);
    const selectedProject = ref({
      title: '',
      year: '',
      role: '',
      used: '',
      intro: '',
      work: '',
      major: '',
      images: [],
      section: null // Section3 or Section4에서 지정
    })

    const currentImageIndex = ref(0);

    const currentProject = computed(() => projects.value[currentIndex.value] || null)


    // backgroundImage가 mp4 파일인지 확인하는 함수
    const isVideoBackground = computed(() => {
      if (!currentProject.value?.backgroundImage) return false;
      return currentProject.value.backgroundImage.toLowerCase().endsWith('.mp4');
    });



    const sectionStyle = computed(() => {
      if (!currentProject.value) return {};

      if (isVideoBackground.value) {
        // 비디오 배경일 때는 backgroundImage 스타일를 안 넣음
        return {
          backgroundColor: '#000' // 검정 배경 등 기본값
        };
      } else {
        // 이미지 배경일 때
        const bg = currentProject.value.backgroundImage;
        const url = bg.startsWith('url(') ? bg : `url(${bg})`;
        return {
          backgroundImage: url,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        };
      }
    });

    const prevProject = () => {
      if (projects.value.length === 0) return
      currentIndex.value = (currentIndex.value - 1 + projects.value.length) % projects.value.length
    }

    const nextProject = () => {
      if (projects.value.length === 0) return
      currentIndex.value = (currentIndex.value + 1) % projects.value.length
    }
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
    // const scrollY = 0;
    function onClickTop() {
        window.scrollTo({ top: 0, behavior: "smooth" }) 
        // behavior 스크롤 이벤트로 올라가는 속도를 부드럽게 만들어줌.
    }

    const designprojects = ref([ 
      { 
        year: '2022', 
        title: '법무법인 팔마',
        role:'Branding Design',
        desc:'법무법인 팔마 브랜딩 프로젝트' ,
        used:'Adobe Illustrator, Adobe Photoshop',
        images:[
          '/img/palma_01.jpg',
          '/img/palma_02.jpg',
          '/img/palma_03.jpg',
          '/img/palma_04.jpg',
        ],
        designbackgroundImage: '/img/palma_03.jpg',
      },
      { 
        year: '2022', 
        title: '마케집',
        role:'Branding Design | Signage Design',
        desc:'마케집 브랜딩 디자인 & 사인물 프로젝트' ,
        used:'Adobe Illustrator, Adobe Photoshop',
        images:[
        '/img/make2.jpg',
        '/img/make3.jpg',
        '/img/make4.jpg',
        '/img/make5.jpg',
        '/img/make6.jpg',
        '/img/make7.jpg',
        '/img/make8.jpg',
        ],
        designbackgroundImage: '/img/make2.jpg',
      },
            { 
        year: '2021', 
        title: '마케집',
        role:'Branding Design | Signage Design',
        desc:'마케집 브랜딩 디자인 & 사인물 프로젝트' ,
        used:'Adobe Illustrator, Adobe Photoshop',
        images:[
        '/img/make2.jpg',
        '/img/make3.jpg',
        '/img/make4.jpg',
        '/img/make5.jpg',
        '/img/make6.jpg',
        '/img/make7.jpg',
        '/img/make8.jpg',
        ],
        designbackgroundImage: '/img/make2.jpg',
      },
      { 
        year: '2021', 
        title: '(주)농심',
        role:'Signage Design',
        desc:'(주)농심 안양공장 홍보관 내부사인물 프로젝트' ,
        used:'Adobe Illustrator, Adobe Photoshop',
        images:[
          '/img/nong_1.jpg',
          '/img/nong_2.jpg',
          '/img/nong_3.jpg',
          '/img/nong_4.jpg',
        ],
        designbackgroundImage: '/img/nong_3.jpg',
      },
    ]);
    const designIndex = ref(0);
    const designCurrentProject = computed(() => designprojects.value[designIndex.value] || null)

    const isDesignVideoBackground = computed(() => {
      const bg = designCurrentProject.value?.designbackgroundImage
      if (!bg) return false
      return bg.toLowerCase().endsWith('.mp4')
    })
    const designSectionStyle = computed(() => {
      if (!designCurrentProject.value) return {}
      const bg = designCurrentProject.value.designbackgroundImage
      return isDesignVideoBackground.value
        ? { backgroundColor: '#111' }
        : {
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
    })
    const designPopupVisible = ref(false)
    const designSelectedProject = ref(null)
    const designImageIndex = ref(0)

    const prevDesignProject = () => {
      designIndex.value = (designIndex.value - 1 + designprojects.value.length) % designprojects.value.length
    }
    const nextDesignProject = () => {
      designIndex.value = (designIndex.value + 1) % designprojects.value.length
    }

    return {
      containerRef,
      sectionStyle,
      currentProject,
      currentIndex,
      prevProject,
      nextProject,
      openPopup,
      closePopup,
      popupVisible,
      selectedProject,
      currentImageIndex,
      prevImage,
      nextImage,
      onClickTop,
      projects,
      isVideoBackground,

      designSectionStyle,
      designPopupVisible,
      designSelectedProject,
      designImageIndex,
      designprojects,
      prevDesignProject,
      nextDesignProject,
      isDesignVideoBackground,
      designCurrentProject
    }
  }
})
</script>

<style scoped>
  @import url('../../assets/main.css');
  :global(html) {
  scroll-behavior: smooth;
}
</style>