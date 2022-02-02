<template>
  <footer class="footer">
      Made by Sanghoon with 😉 <br>
      <a href="https://nykim.work/74">Copied with Nana's todoapp-project</a>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  @include flexbox;
  @include justify-content(center);
  margin-top: 8rem;
  margin-bottom: 3px;
  font-size: 1.2rem;
  color: #bdbdbd;

  &__link {
    margin-left: 0.42rem;

    &:hover {
      color: #a7a7a7;
      text-decoration: underline;
    }
  }
}

a {
    color: grey;
    text-decoration: none;
}
a:hover {
    color: blue;
}
</style>