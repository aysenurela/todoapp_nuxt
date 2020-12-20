<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        todoapp
      </h1>
      <Todos />
      <notifications group="entry"/>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!window.matchMedia('(display-mode: standalone)').matches) {
      this.$notify({
        'group': 'entry',
        'title': 'REMINDER',
        'text': 'You can install the application on your device.'
      });
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>