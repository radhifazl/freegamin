<template>
  <footer class="footer w-100">
      <div class="img-logo w-100 mb-2">
          <img src="@/assets/images/logo/logo.svg" alt="Logo"> <br>
      </div>

      <div class="footer-text d-flex flex-column flex-lg-row">
            <div class="credit">
                <span>This website made by <a href="https://github.com/radhifazl" target="_blank">radhifazl</a></span> <br>
                <span>API Provided by <a href="https://www.freetogame.com/api-doc" target="_blank">Freetogame API</a></span>
            </div>

            <div class="copyrights">
                <span class="cr">All rights reserved © 2021</span> <br>
                <span class="cr">All trademarks mentioned herein are the property of their respective owners</span>
            </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style>
.footer {
    background: #1E1E1E;
    padding: 1rem;
    padding-bottom: 2rem;
}
.cr, .credit span{
    color: #888;
}

.credit {
    margin-bottom: 2rem;
}

.credit span a {
    color: #D1D1D1;
    text-decoration: none;
}

.credit span a:hover {
    color: #FFF;
}

@media screen and (min-width: 992px) {
    .footer {
        padding: 1rem 2rem;
        text-align: left;
    }
    .footer-text {
        justify-content: space-between;
    }
    .copyrights {
        text-align: right;
    }
}
</style>