<template>
  <div class="project-preview">
    <div class="container">
      <Editor
        editorId="md-prev"
        v-model="md.text"
        :preview="false"
        @onUploadImg="upload"
      />
      <Editor
        editorId="md-prev2"
        v-model="md.text2"
        :preview="false"
        @onUploadImg="upload"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Editor from 'md-editor-v3';
import axios from 'axios';
import 'md-editor-v3/lib/style.css';

import './index.less';

const md = reactive({
  text: '',
  text2: ''
});

const upload = async (files, callback) => {
  const res = await Promise.all(
    Array.from(files).map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);

        axios
          .post('/api/img/upload', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );

  callback(res.map((item) => item.data.url));
};
</script>
