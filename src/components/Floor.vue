<template>
    <div class="floor">
        <div>
            <i class="el-icon-s-home"></i>
            首页
        </div>
        <div>
            <i class="el-icon-s-operation"></i>
            分类
        </div>
        <div>
            <i class="el-icon-dish-1"></i>
            试吃尝鲜
        </div>
        <div>
            <i class="el-icon-sunrise"></i>
            热卖排行
        </div>
        <div>
            <i class="el-icon-medal-1"></i>
            优选100
        </div>
    </div>
</template>

<script>
export default {
    name: 'Floor'
}
</script>

<style scoped>
    .floor {
        position: fixed;
        display: flex;
        bottom: 0;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 16vw;
        padding: 2vw 0;
        background-color: #fff;
    }
    .floor div {
        display: flex;
        flex-direction: column;
        color: rgb(0, 197, 81);
    }
    i {
        font-size: 7vw;
    }
</style>