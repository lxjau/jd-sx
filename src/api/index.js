import mockRequests from "./mockAjax";

export const reqGoodsList = () => mockRequests({url:'/goodsList',method:'GET'}) 