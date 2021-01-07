<template>
  <div class="container">
    <div>
      <h1 class="title">Question-2</h1>
      <br />
      <div class="main-body">
        <input type="text" class="input-field" v-model="filterTxt" @change="filter"/>
        <table class="table">
          <tr>
						<th>#</th>
            <th>Category Name</th>
          </tr>
          <tr v-for="(cat, i) in filtered" :key="cat + i">
						<td>{{ i+1 }}</td>
						<td>{{ cat }}</td>
					</tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			filterTxt: "",
			category: [],
			filtered: []
    };
	},
	async created() {
		this.category = await this.$axios.$get('https://api.publicapis.org/categories');
		this.filtered = [...this.category]
  },
  methods: {
		filter() {
			const keyword = this.filterTxt.toLowerCase();
			this.filtered = this.category.filter(cat => cat.toLowerCase().includes(keyword));
		}
	},
};
</script>

<style>
@import "~assets/style.css";

.container {
  margin: 0 20px;
  min-height: 100vh;
  display: flex;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.input-field {
  height: 36px;
	width: 720px;
	
	margin-bottom: 36px;
}

.table {
	border: 1px solid black;
	width: 720px;
}

th {
	border-bottom: 1px solid black;
}

td {
	text-align: center;
}
</style>
