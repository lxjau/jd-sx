<template>
	<div id="app">
		<Header></Header>
		<Nav></Nav>
		<Goods></Goods>
		<Floor></Floor>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Goods from '@/components/Goods'
import Floor from '@/components/Floor'

export default {
	name: 'App',
	components: {
		Header,
		Nav,
		Goods,
		Floor
	}
}
</script>

<style>
	body,h6{
		margin: 0;
		padding: 0;
	}
	div {
		box-sizing: border-box;
	}
	img {
		width: 100%;
	}
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	}
</style>
