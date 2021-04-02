<template>
  <h1>{{ msg }}</h1>
  <el-row
    type="flex"
    justify="center"
  >
    <el-button
      type="primary"
      @click="toBlog"
    >
      博客
    </el-button>
    <el-button @click="toResume">
      简历
    </el-button>
  </el-row>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
  methods: {
    toBlog () {
      window.location.href = '//www.jianshu.com/u/bfc37fc224c6'
    },
    toResume () {
      window.open('resume.pdf')
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
