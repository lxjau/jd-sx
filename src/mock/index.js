import Mock from "mockjs";

import goodsList from '@/mock/goodsList'

Mock.mock('/mock/goodsList', {code:200, data: goodsList})