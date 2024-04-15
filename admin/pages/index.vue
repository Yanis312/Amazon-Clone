<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="col-sm-8 col-8"></div>
      <h1 class="a-size-large a-spacing-none a-text-normal">All Products</h1>
      <div class="a-spacing-large"></div>
      <!--Button-->
      <nuxt-link to="/products" class="a-button-buy-again">Add a new product</nuxt-link>
      <nuxt-link to="/category" class="a-button-history margin-right-10">Add a new category</nuxt-link>
      <nuxt-link to="/owner" class="a-button-history margin-right-10">Add a new owner</nuxt-link>




      <div>

      </div>




    </div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div v-for="(produits, index) in produits" :key="produits._id" class="col-xs-2 col-lg-2 col-nd-3 col-sn-6 br bb">
          <div class="history-box">
            <div class="text-center">
              <!--Product image-->
              <a href="#" class="a-link-normal">
                <img :src="produits.photo" class="img-fluid">
              </a>

              <!--Product title-->

              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">{{ produits.title }}</div>
                </span>
              </div>
              <!--Product rating-->

              <div class="a-row">
                <a href="#">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>

                </a>
                <span class="a-letter-space"></span>
                <span class="a-color-teriary a-size-small asin-reviews">(1732)</span>

              </div>
              <!--Product price-->

              <div class="a-row">
                <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">{{ produits.price }} $</span>
                </span>
              </div>
              <!--Product buttons-->

              <div class="a-row">
                <nuxt-link :to="`/products/${produits._id}`" class="a-button-history margin-right-10">Update</nuxt-link>
                <a href="#" class="a-button-history margin-right-10" @click="onDeleteProduct(produits._id,index)">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    try {
      //asyncData is fetching data before nuxt page finishe loading on the browser
      //it is good for SEO because the data will be loaded first
      let response = await $axios.$get('http://localhost:5001/products');
      console.log(response);
      return {
        produits: response.produits
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    async onDeleteProduct(id,index){
      try {
        let response=await this.$axios.$delete(`http://localhost:5001/products/${id}`);
        if(response.status){
          this.produits.splice(index, 1);
        }
      } catch (error) {
        console.log(error);
      }
     
    }
  }
}
</script>
