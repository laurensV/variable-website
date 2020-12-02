<template>
  <div>
    HTML:
    <textarea v-model="html"></textarea>
    <div v-html="html"></div>
  </div>
<!--  <iframe src="/code.html" />-->
</template>

<script>
export default {
  data () {
    return {
      html: '',
      javascript: ''
    }
  },
  mounted () {
    const initial = `<style>
.v-content__wrap {
background: blue !important;
color: white;
}
textarea {
border: 1px solid black;
width: 100%;
padding: 15px;
}
</style>
    <br>
    Javascript:
    <textarea id="javascript" v-model="javascript"></textarea>
    <button
      onclick="
        const jsTextarea = document.getElementById('javascript')
        const newScript = document.createElement('script')
        newScript.text = jsTextarea.value
        jsTextarea.value = ''
        document.body.appendChild(newScript)
    ">Execute</button>`
    this.type(initial, 0, 16)
  },
  methods: {
    type (code, index, interval) {
      if (index < code.length) {
        this.html += code[index++]
        setTimeout(() => {
          this.type(code, index, interval)
        }, interval)
      }
    }
  }
}
</script>
<style lang="scss">
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    border: none;
    width: 100%;
    height: 100%;
  }
</style>
