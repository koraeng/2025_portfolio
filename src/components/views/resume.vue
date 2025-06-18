<template>
  <div class="pdf-viewer">
    <iframe
      :src="pdfUrl"
      width="100%"
      height="800px"
      style="border: none;"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: '/resume.pdf' // public 폴더에 resume.pdf 넣기
    }
  }
}
</script>