<template>
  <div id="app" class="wrapper">
    <aside class="main_sidebar">
      <ul>
          <li><i class="fa fa-desktop"></i><a href="#">테이블</a></li>
          <li><i class="fa fa-folder"></i><a href="#">NULL</a></li>

          <router-link to="/todoRestful" tag="button" class="btn btn-success">Restful</router-link>
      </ul>
    </aside>
    <div class="main">
      <div class="main-wrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    background:#e6e6e6;
}
.main_sidebar {
    min-height:100vh;
    position:fixed;
    top:0;
    left:0;
    width:20%;
    transition: all 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
    will-change: left, width;
    box-shadow: inset -1px 0 10px rgba(0, 0, 0, 0.4);
    background: #a6a6a6;
}
.main_sidebar:after {
    content: '';
    background-color: #253238;
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 58px;
}
.main_sidebar ul {
    list-style:none;
    padding-left:58px;
}
.main_sidebar ul li {
    padding:10px;
}
.main_sidebar ul li a {
    color:#fff;
    display:block;
}
.main_sidebar ul li i {
    float:left;
    color:grey;
    margin-left:-58px;
    font-size:24px;
    padding-left:7px;
}
.main_sidebar ul li:hover {
    background:#167696;
}
.main_sidebar ul li a:hover {
    color:#fff;
    text-decoration:none;
}
.main_sidebar ul li:hover i {
    color:#fff;
}
.main_sidebar ul li.active {
    background:#0f4698;
}
.main_sidebar ul li.active i {
    color:#fff;
}
.main_sidebar ul li.active:hover {
    background:#167696;
}
.main_sidebar ul li.active:hover i {
    color:#fff;
}

.main {
    margin-top: 7%;
    float:right;
    color:#000;
    width:80%;
    background:#e6e6e6;
    min-height:100vh;
}

.main-wrapper {
  border: solid 1px #b3b3b3;
  margin: auto;
  width: 85%;
  height: 600px;
}
</style>
