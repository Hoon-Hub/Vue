<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">Sold Out</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collaspe" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collaspe navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/">제품리스트</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detail">제품상세페이지</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sales">제품등록페이지</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input type="search" class="form-control me-2" placeholder="Search" aria-label="Search">
          <button type="button" class="btn btn-outline-success">Search</button>
        </form>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>

</style>
