<template>
<div>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="back">
        Back Home
      </a-button>
    </template>
  </a-result>
</div>
</template>

<script>

export default {
  name: "NotFound",
  methods:{
    back()
    {
      this.$router.push("/Login");
    }
  }
}

</script>

<style scoped>

</style>