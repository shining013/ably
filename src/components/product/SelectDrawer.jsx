import { Drawer } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import SelectedCard from "./SelectedCard";
import SelectDropdown from "../common/SelectDropdown";
import { enqueueSnackbar } from "notistack";

const SelectDrawer = ({ open, onClose }) => {
  const [isSelecting, setIsSelecting] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [options, setOptions] = useState({
    color: null,
    size: null,
  });
  const totalNums = selectedProducts.reduce((acc, cur) => {
    return acc + cur.num;
  }, 0);
  const totalPrice = selectedProducts.reduce((acc, cur) => {
    return acc + cur.price * cur.num;
  }, 0);

  const handleSelection = () => {
    setIsSelecting(true);
    setOptions({
      color: null,
      size: null,
    });
  };

  const handleOptions = (name, value) => {
    setOptions({
      ...options,
      [name]: value,
    });
  };

  const handleProductDelete = (targetItem) => {
    const updatedSelectedProducts = selectedProducts.filter(
      (item) =>
        !(item.color === targetItem.color && item.size === targetItem.size)
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const handleProductMinus = (targetItem) => {
    const updatedSelectedProducts = selectedProducts.map((item) => {
      if (item.color === targetItem.color && item.size === targetItem.size) {
        return {
          ...item,
          num: item.num - 1,
        };
      }
      return item;
    });

    // 0 이하인 것 제외한 상품 리스트
    const finalUpdatedProducts = updatedSelectedProducts.filter(
      (item) => item.num > 0
    );

    setSelectedProducts(finalUpdatedProducts);
  };

  const handleProductAdd = (targetItem) => {
    const updatedSelectedProducts = selectedProducts.map((item) => {
      if (item.color === targetItem.color && item.size === targetItem.size) {
        return {
          ...item,
          num: item.num + 1,
        };
      }
      return item;
    });
    setSelectedProducts(updatedSelectedProducts);
  };

  //
  //
  //

  // 상품 옵션 리스트
  const renderOptions = () => {
    return (
      <div className="flex flex-col gap-3">
        <SelectDropdown
          name={"color"}
          value={options.color}
          options={["beige", "white", "black"]}
          onChange={handleOptions}
        />
        <SelectDropdown
          name={"size"}
          value={options.size}
          options={["s", "m", "l"]}
          onChange={handleOptions}
        />
      </div>
    );
  };

  // 선택된 상품 리스트
  const renderSelectedProducts = () => {
    return (
      <div className="flex flex-col gap-3">
        {selectedProducts.map((item) => (
          <SelectedCard
            size={item.size}
            color={item.color}
            price={item.price}
            num={item.num}
            onPlus={handleProductAdd}
            onMinus={handleProductMinus}
            onDelete={handleProductDelete}
          />
        ))}
      </div>
    );
  };

  // 상품 선택 개수 및 총 가격
  const renderTotalResult = () => {
    return (
      <div className="py-4 px-2 flex justify-between border-y border-y-gray-30 items-center mb-2">
        <div className="text-body2 text-gray-70">
          <strong className="text-body2 text-gray-70">{totalNums}</strong>개
          선택
        </div>
        <div className="text-body1 text-gray-70 items-center flex flex-row gap-1">
          총<span className="text-h4 text-pink-30">{totalPrice}원</span>
        </div>
      </div>
    );
  };

  // 하단 버튼 그룹
  const renderButtonGroup = () => {
    if (isSelecting) {
      return (
        <Button
          text="옵션 선택 닫기"
          option={"whiteType"}
          style={{ height: "56px" }}
          onClick={() => onClose()}
        />
      );
    } else {
      return (
        <div className="flex flex-row gap-2 py-3 mt-auto">
          <Button
            text="장바구니"
            option={"whiteType"}
            style={{ height: "56px" }}
            onClick={() => {
              enqueueSnackbar("장바구니에 상품을 담았어요");
              onClose();
            }}
          />
          <Button
            text="구매하기"
            option={"blackType"}
            style={{ height: "56px" }}
          />
        </div>
      );
    }
  };

  useEffect(() => {
    if (options && options.color && options.size) {
      console.log(options);

      const targetItem = selectedProducts.find(
        (item) => item.color === options.color && item.size === options.size
      );

      // 기존 선택 항목인 경우, num 증가
      if (targetItem) {
        const updatedSelectedProducts = selectedProducts.map((item) => {
          if (item.color === options.color && item.size === options.size) {
            return {
              ...item,
              num: item.num + 1,
            };
          }
          return item;
        });
        setSelectedProducts(updatedSelectedProducts);
      }

      // 새로운 선택 항목 추가
      else {
        const newSelectedProduct = {
          price: 1000,
          num: 1,
          color: options.color,
          size: options.size,
        };
        setSelectedProducts([...selectedProducts, newSelectedProduct]);
      }
      setIsSelecting(false);
    }
  }, [options]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="bottom"
      size={600}
      className="flex flex-col w-full !max-w-[600px] !mx-auto left-auto !rounded-t-md p-4"
      overlayProps={{
        className: "fixed inset-0 max-w-[600px] mx-auto",
      }}
    >
      {isSelecting ? (
        renderOptions()
      ) : (
        <div className="flex flex-col gap-4">
          <Button
            text="옵션 선택하기"
            option={"whiteType"}
            style={{ height: "56px" }}
            onClick={handleSelection}
          />
          {renderSelectedProducts()}
        </div>
      )}
      <div className="mt-auto">
        {renderTotalResult()}
        {renderButtonGroup()}
      </div>
    </Drawer>
  );
};

export default SelectDrawer;
