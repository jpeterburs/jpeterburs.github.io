<template>
  <div id="made-with-love">
    <p>
      Made with ❤️  by <b>Jonas Peterburs</b><br />
      Theme: <a href="https://www.nordtheme.com/">Nord</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'made-with-love'
}
</script>

<style scoped>
#made-with-love {
  text-align: center;
}

hr {
  border-color: #d8dee9;
  margin: 1em 30%;
}

a {
  color: #81a1c1;
}

@media screen and (max-width: 640px) {
  hr {
    margin: 1rem 5%;
  }
}
</style>
