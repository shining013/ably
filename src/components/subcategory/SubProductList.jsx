import React from "react";
import Card from "src/components/common/Card";

const SubProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-3 pb-5">
      {Array(9)
        .fill({
          discount: 10,
          price: 32310,
          name: "귀걸이",
          description: "1",
          salesCount: 1324,
        })
        .map((item) => (
          <Card
            discount={item.discount}
            price={item.price}
            name={item.name}
            description={item.description}
            salesCount={item.salesCount}
          />
        ))}
    </div>
  );
};

export default SubProductList;
