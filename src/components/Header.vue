<template>
	<div class="header">
		<i class="el-icon-arrow-left"></i>
		<h5><img src="./images/header_logo.png" alt=""></h5>
		<div class="icon-right">
			<i class="el-icon-shopping-cart-2"></i>
			<i class="el-icon-more"></i>
			<span>12</span>
		</div>
	</div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
	.header {
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		height: 10vw;
		padding: 3vw;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
		overflow: hidden;
	}

	.header h5 {
		width: 22vw;
		margin: 0;
		color: brown;
	}
	
	.icon-right {
		position: relative;
	}
	.icon-right i {
		margin: 0 1vw;
	}
	
	.icon-right span {
		position: absolute;
		top: -8px;
		right: -6px;
		padding: 0 4px;
		font-size: 1px;
		color: #fff;
		border-radius: 7px;
		background-color: rgb(196, 49, 49);
	}
</style>