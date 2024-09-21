const init = { 
  cartItems: [
    {
      id: 100,
    name: "14K 레이어드 피어싱 105종 모음전",
    primeCategory: "jwerly",
    subCategory: "earing",
    description: "234",
    price: 27800,
    discount: 71,
    companyId: 1001,
    companyName: "회사",
    imgSrc:
      "https://d3ha2047wt6x28.cloudfront.net/QspnSsWwFpk/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjIxMjA3XzE2NzAzODE2NjU3MzE0OTZtLmpwZw",
    totalSales: 756,
    option1: "none",
    option2: "none",
    amount : 2,
    },
    {
      id: 101,
      name: "러블리 하트 귀걸이",
      primeCategory: "jwerly",
      subCategory: "earing",
      description: "234",
      price: 28800,
      discount: 30,
      companyId: 1002,
      companyName: "회사",
      imgSrc:
        "https://d3ha2047wt6x28.cloudfront.net/CQX3Eu_3irg/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjQwOTE2XzE3MjY0OTYwOTI2MTk1NDJtLmpwZw",
      totalSales: 5948,
      option1: "none",
      option2: "none",
      amount: 10
    },
    {
      id: 102,
      name: "유리알 귀걸이",
      primeCategory: "jwerly",
      subCategory: "earing",
      description: "234",
      price: 27800,
      discount: 71,
      companyId: 1003,
      companyName: "회사",
      imgSrc:
        "https://d3ha2047wt6x28.cloudfront.net/o02dyzgxEGY/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjQwOTE2XzE3MjY0OTU5NTQ5MjgyNzFtLmpwZw",
      totalSales: 346,
      option1: "none",
      option2: "none",
      amount: 1
    },
    {
      id: 103,
      name: "하트큐빅 귀걸이",
      primeCategory: "jwerly",
      subCategory: "earing",
      description: "234",
      price: 27800,
      discount: 71,
      companyId: 1001,
      companyName: "a사",
      imgSrc:
        "https://d3ha2047wt6x28.cloudfront.net/V_UGWhHjEOg/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjQwMTEzXzE3MDUxMTE5Mjc1NDUzNzZtLmpwZw",
  
      totalSales: 8549,
      option1: "none",
      option2: "none",
      amount: 3
    },
    {
      id: 104,
      name: "원터치 링 귀걸이",
      primeCategory: "jwerly",
      subCategory: "earing",
      description: "234",
      price: 27800,
      discount: 71,
      companyId: 1002,
      companyName: "a사",
      imgSrc:
        "https://d3ha2047wt6x28.cloudfront.net/aY4fDrOyk9c/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzRiZTE0ZDc2M2ZhYTlmZDRkNzAzYWFiNmQyN2JkZTgxLmpwZw",
      totalSales: 5946,
      option1: "none",
      option2: "none",
      amount: 4
    },
  ],
  totalItem : [],
  refresh : true,
}

const reducer = (state = init, action) => {
  if (action.type === "delete") {
    action.payload.map((i) => {
      state.cartItems = state.cartItems.filter((item) => i.id !== item.id)
    });
    console.log(state.cartItems)
    return state;
  }
  if (action.type === "changeItemAmount"){
    state.cartItems.find((item)=> item.id === action.payload[0].id).amount = action.payload[1];
    state.refresh = !state.refresh;
    return state;
  }
  if (action.type === "addTotalItem") {
    console.log(action.payload)
    state.totalItem.push(action.payload);
    console.log(state.totalItem)
  }
  if(action.type === 'deleteTotalItem'){
    return state.totalItem.filter((item) => item.id !== action.payload.id);
  }
  return state;
};

export default reducer;
