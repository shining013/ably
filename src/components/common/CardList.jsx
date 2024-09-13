import React from "react";
import Card from "src/components/common/Card";

const CardList = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array(9)
        .fill({
          discount: 10,
          price: 32310,
          name: "베이델리",
          description:
            "[얼리어텀🍂][벨리드made/6color]데이 라운드 펜던트 가디건",
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

export default CardList;
