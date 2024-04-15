<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <!--Category-->
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                        <h2 style="text-align: center">update {{ produits.title }}</h2>
                        <form>
                            <div class="a-spacing-top-medium">
                                <label>Category</label>
                                <select class="a-select-option" v-model="categoryID">
                                    <option v-for="categories in categories" :value="categories._id" :key="categories._id">
                                        {{ categories.type }}
                                    </option>



                                </select>
                            </div>
                            <!--owner-->

                            <div class="a-spacing-top-medium">
                                <label>Owner</label>
                                <select class="a-select-option" v-model="ownersID">
                                    <option v-for="owners in owners" :value="owners._id" :key="owners._id">{{ owners.name }}
                                    </option>



                                </select>
                            </div>
                            <!--Title-->

                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Title</label>
                                <input type="text" class="a-input-text" style="width: 100%;" v-model="title" :placeholder="produits.title"/>
                            </div>
                            <!--Price input-->

                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Price</label>
                                <input type="number" class="a-input-text" style="width: 100%;" v-model="price" :placeholder="produits.price"/>
                            </div>
                             <!--Quantity input-->

                             <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Stock Quantity</label>
                                <input type="number" class="a-input-text" style="width: 100%;" v-model="stockQuantity" :placeholder="produits.stockQuantity"/>
                            </div>

                            <!--Description area-->

                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Description</label>
                                <textarea  style="width: 100%;"
                                    v-model="description" :placeholder="produits.description">
                                </textarea>
                            </div>

                            <!--Photo file-->

                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Add Photo</label>
                                <div class="a-row a-spacing-top-medium">
                                    <label class="choosefile-button">
                                        <i class="fal fa-plus"></i>
                                        <input type="file" @change="onFileSelected" />
                                        <p style="margin-top: -70px;">{{ fileName }}</p>
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <!--Button-->


                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="onUpdateproduct">Update a product</span>
                                    </span>

                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-3"></div>

            </div>

        </div>
    </main>
</template>

<script>
export default {
    //asyncData proced dans le server
    async asyncData({ $axios ,params}) {
        try {
            let categories = $axios.$get('http://localhost:5001/category');
            let owners = $axios.$get('http://localhost:5001/owner');
            let produits = $axios.$get(`http://localhost:5001/products/${params.id}`);


            const [responseCat, responseOwner,productResponse] = await Promise.all([
                categories,
                owners,
                produits
            ]);
            console.log(productResponse)

            


            return {
                categories: responseCat.categories,
                owners: responseOwner.owners,
                produits:productResponse.produits
            };

        } catch (error) {
            console.log(error);
        }
    },
    //data proced dans le server
    data() {
        return {
            categoryID: null,
            ownersID: null,
            title: "",
            price: "",
            description: "",
            selectedFile: null,
            fileName: "",
            stockQuantity: "",
        }


    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
            this.fileName = event.target.files[0].name;
        },
        async onUpdateproduct() {
            let data = new FormData();
            data.append("title", this.title);
            data.append("price", this.price);
            data.append("description", this.description);
            data.append("ownersID", this.ownersID);
            data.append("stockQuantity", this.stockQuantity);
            data.append("categoryID", this.categoryID);
            data.append("photo", this.selectedFile, this.selectedFile.name);
            let result=await this.$axios.$put(`http://localhost:5001/products/${this.$route.params.id}`,data);
            this.$router.push('/')

            
        }
    }

};
</script>