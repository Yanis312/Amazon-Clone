<template>
    <main class="listingPage">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
                    <!--SIDEBAR-->
                </div>
                <!--Main Content-->
                <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
                    <featuredproduct />
                    <div class="mainResults">
                        <ul class="s-result-list">
                            <li class="s-result-item celwidget">
                                <div class="s-item-container">
                                    <!--Best seller-->
                                    <div class="a-spacing-micro">
                                        <div class="bestSeller">
                                            <a href="#">Best Seller</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="row">
                                            <!--Image-->
                                            <div class="col-sm-3 text-center">
                                                <a href="#">
                                                    <img src="produits.photo" class="img-fluid">
                                                </a>
                                            </div>
                                            <div class="col-sm-9">
                                                <div class="a-row a-spacing-small">
                                                    <!--Title and Date-->
                                                    <a href="#" class="a-link-normal">
                                                        <h2 class="a-size-medium">
                                                            Harry Potter
                                                            <span class="a-letter-space"></span>
                                                            <span class="a-letter-space"></span>
                                                            <span class="a-size-small a-color-secondary">Sep 3, 2019</span>

                                                        </h2>
                                                    </a>

                                                </div>
                                            </div>
                                            <!--Author's name-->

                                            <div class="a-row a-spacing-small">
                                                <span class="a-size-small a-color-secondary">by</span>
                                                <span class="a-size-small a-color-secondary">
                                                    <a class="a-link-normal a-text-normal" href="#">Goerge RR Martin</a>
                                                </span>
                                            </div>

                                            <!--Shipment-->
                                            <div class="a-row">
                                                <span class="a-size-small">Ships to USA</span>
                                            </div>

                                            <div class="row">
                                                <div class="col-small-7">
                                                    <div class="a-row a-spacing-none">
                                                        <a href="#" class="a-link-normal a-text-normal">Hardcover</a>
                                                    </div>


                                                </div>
                                            </div>




                                        </div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
import FeaturedProduct from '../components/FeaturedProduct.vue'
export default {
    components: { FeaturedProduct },

}
</script>
