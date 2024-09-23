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
      option1: "beige",
      option2: "s",
      amount: 2,
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
      option1: "white",
      option2: "s",
      amount: 10,
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
      option1: "beige",
      option2: "l",
      amount: 1,
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
      option1: "black",
      option2: "m",
      amount: 3,
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
      option1: "black",
      option2: "s",
      amount: 4,
    },
  ],

  // 장바구니 페이지 선택 아이템
  totalItem: [],
  refresh: false,
};

const reducer = (state = init, action) => {
  if (action.type === "delete") {
    const res = action.payload.map((i) => {
      state.cartItems = state.cartItems.filter((item) => i.id !== item.id);
    });
    console.log(res);
    console.log(action.payload);
    console.log(state.cartItems);
    return {
      ...state,
      totalItem: [],
      refresh: !state.refresh,
    };
  }
  if (action.type === "changeItemAmount") {
    state.cartItems.find((item) => item.id === action.payload[0].id).amount =
      action.payload[1];
    return {
      ...state,
      refresh: !state.refresh,
    };
  }
  if (action.type === "changeItemOption") {
    let item = state.cartItems.find((item) => item.id === action.payload[0].id);
    item.option1 = action.payload[1].option1;
    item.option2 = action.payload[1].option2;
    return {
      ...state,
      refresh: !state.refresh,
    };
  }

  // 옵션 선택 후 장바구니 담기
  if (action.type === "addCart") {
    const newCartProducts = action.payload;
    let updatedCarts = [...state.cartItems]; // 기존 장바구니 복사

    newCartProducts.forEach((newCartProduct) => {
      const productId = newCartProduct.id; // 상품 ID 추출
      const { color, size } = newCartProduct; // 옵션 추출

      // 기존 장바구니에서 상품을 찾기
      const existingProductIndex = updatedCarts.findIndex(
        (item) =>
          item.id === productId &&
          item.option1 === color &&
          item.option2 === size
      );

      // 상품이 존재하는 경우
      if (existingProductIndex !== -1) {
        // 수량 증가
        updatedCarts[existingProductIndex].amount += newCartProduct.num;
      } else {
        // 상품이 없으면 새로 추가
        const {
          id,
          name,
          primeCategory,
          subCategory,
          description,
          price,
          discount,
          companyId,
          companyName,
          imgSrc,
          totalSales,
          color: option1,
          size: option2,
          num: amount,
        } = newCartProduct;
        updatedCarts = [
          ...updatedCarts,
          {
            id,
            name,
            primeCategory,
            subCategory,
            description,
            price,
            discount,
            companyId,
            companyName,
            imgSrc,
            totalSales,
            option1,
            option2,
            amount,
          },
        ];
      }
    });

    return {
      ...state,
      cartItems: updatedCarts, // 상태 업데이트
    };
  }

  // 장바구니 선택 항목
  if (action.type === "addTotalItem") {
    state.totalItem.push(action.payload);
    return {
      ...state,
      refresh: !state.refresh,
    };
  }
  if (action.type === "deleteTotalItem") {
    state.totalItem = state.totalItem.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      refresh: !state.refresh,
    };
  }
  if (action.type === "cleanTotalItem") {
    return {
      ...state,
      totalItem: [],
    };
  }
  if (action.type === "fillTotalItem") {
    return {
      ...state,
      totalItem: state.cartItems,
    };
  }

  return state;
};

export default reducer;
