<template>
    <div class="nav">
        <div class="c1">
            <div>精选</div>
            <div class="active">水果</div>
            <div>海鲜</div>
            <div>肉禽蛋</div>
        </div>
        <div class="c2">
            <div class="active">热卖推荐</div>
            <div>进口鲜果</div>
            <div>国产鲜果</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style scoped>
    .active {
        font-weight: 700;
        border-bottom: 2px solid #000;
    }
    .nav {
        display: flex;
        position: fixed;
        top: 0;
        flex-direction: column;
        height: 20vw;
        width: 100%;
        margin-top: 10vw;
        background-color: #fff;
    }
    .c1,.c2 {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10vw;
    }
    .c1 div {
        width: 25%;
        padding: 2vw 0;
    }
    .c2 div {
        width: 33.33%;
        padding: 2vw 0;
    }
</style>