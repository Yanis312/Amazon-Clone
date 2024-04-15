<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium">
                        <h2>Add a new category</h2>
                        <form>
                            <div class="a-spacing-top-medium">
                                <label>Type</label>
                                <input class="a-input-text" style="width: 100%;" v-model="type" />
                            </div>
                            <!--Button-->


                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="onAddCategory">Add a new category</span>
                                    </span>

                                </span>
                            </div>
                        </form>
                    </div>
                    <div class="a-spacing-top-medium">

                    </div>
                    <ul class="list-group-item">
                        <li v-for="categories in categories" :key="categories._id">
                            {{ categories.type }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3"></div>


        </div>

    </main>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        try {
            let response = await $axios.$get("http://localhost:5001/category");
            return {
                categories: response.categories,
            }
        } catch (error) {
            console.log(error)
        }
    },
    data() {
        return {
            type: ""
        }
    },
    methods: {
        async onAddCategory() {
            try {


                let data = { type: this.type }
                let response = await this.$axios.$post("http://localhost:5001/category", data);

                this.categories.push(data);


            } catch (error) {
                console.log(error)

            }
        }

    }
}
</script>