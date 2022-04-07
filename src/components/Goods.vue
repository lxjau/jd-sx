<template>
    <div class="goods">
        <div class="goodsList">
            <div class="goods-item" v-for="(item, index) in goodsList" :key="index">
                <img :src="item.img" alt="">
                <h6>{{item.title}}</h6>
                <div class="price">
                    <div>
                        <span>{{item.price}}</span>
                        <span class="discount" v-if="item.discount">{{item.discount}}</span>
                    </div>
                    <el-button size="mini" type="warning" icon="el-icon-shopping-cart-1"></el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {reqGoodsList} from '../api/index'
export default {
    name: 'Goods',
    data() {
        return {
            goodsList: []
        }
    },

    created () {
        this.getGoodsList()
    },
    methods: {
       async getGoodsList () {
           try {
               const result = await reqGoodsList()
               this.goodsList = result.data
           } catch (error) {
               console.log(error);
           }
        }
    },
}
</script>

<style scoped>
    .goods {
        background-color: rgb(248, 241, 241);
        margin-top: 30vw;
        margin-bottom: 16vw;
    }
    .goodsList {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 8px;
    }
    .goods-item {
        float: left;
        width: 49%;
        margin: 4px 0;
        padding: 4px;
        background-color: #fff;
    }
    .goods-item h6 {
        margin: 2vw;
        color: #ccc;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .price {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: 2vw;
    }
    .price>div {
        color: orange;
    }
    .price .discount {
        margin-left: 5px;
        font-size: 14px;
        color: #ccc;
        text-decoration: line-through;
    }
    .el-button--mini {
        padding: 4px 10px;
        font-size: 18px;
        border-radius: 4px;
    }

</style>