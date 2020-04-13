<template>
	<v-app>
		<lateral-menu />	
		<toolbar/>
		<carousel />
		<app-footer />
	</v-app>
</template>

<script>
import Footer from './components/template/Footer.vue'

export default {
	components: {'app-footer': Footer}
}
</script>

