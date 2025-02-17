<template>
  <div class="container">
    <h1 class="n-typescale-xxxl n-margin-b-m">Success!</h1>
    <p class="n-typescale-m n-margin-b-m">Thank you for registering</p>
    <provet-button variant="primary" @click="$router.push('/')">
      Go to homepage
    </provet-button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
