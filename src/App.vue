<template>
	<div id="app" class="container">
		<div class="row py-4">
			<company-data />
			<Company-table />
		</div>
	</div>
</template>

<script>
	import CompanyData from './components/CompanyData.vue'
	import CompanyTable from './components/CompanyTable.vue'

	export default {
		name: 'app',
		components: {
			CompanyData,
			CompanyTable
		}
	}
</script>
