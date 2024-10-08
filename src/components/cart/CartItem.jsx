import React, { useCallback, useEffect, useState } from "react";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";

function CartItem({
  productInfo,
  changeEvent,
  changeOpen,
  deleteEvent,
  index,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [itemAmount, setItemAmount] = useState(0);
  const dispatch = useDispatch();
  const totalItem = useSelector((s) => s.totalItem);
  const refresh = useSelector((s) => s.refresh);

  const checkHandler = (isChecked) => {
    if (isChecked) {
      dispatch({ type: "addTotalItem", payload: productInfo });
    } else {
      dispatch({ type: "deleteTotalItem", payload: productInfo });
    }
  };
  const check = useCallback((itemChecked) => {
    return totalItem.some((item) => {
      return item.id === itemChecked.id;
    });
  }, [totalItem])

  useEffect(() => {
    const chk = check(productInfo)
    setIsChecked(chk);
    setItemAmount(productInfo.amount);
  }, [check, productInfo, refresh]);

  return (
    <div className="w-full">
      <p className="pt-6 px-4 text-gray-70 text-lg font-semibold tracking-tighter leading-6">
        {productInfo.companyName} 배송상품
      </p>
      <div className="w-full py-4 pr-6 pl-4">
        <div className="flex w-full">
          <input
            type="checkbox"
            className="w-4 h-4 mr-4 self-center"
            checked={isChecked}
            onChange={(e) => {
              checkHandler(e.target.checked);
            }}
            style={{ color: "#9e9e9e" }}
          ></input>
          <img
            src={productInfo.imgSrc}
            className="mr-4 rounded bg-gray-100 "
            style={{ width: "90px", height: "90px" }}
            alt=""
          ></img>
          <div className="box-border mr-2" style={{ flex: "1 1 0%" }}>
            <p
              className="mb-1 text-gray-60 leading-4"
              style={{ fontSize: "13px" }}
            >
              {productInfo.companyName}
            </p>
            <p className="mb-1 text-gray-70 text-sm tracking-tight leading-5">
              {productInfo.name}
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-50 tracking-tight leading-4">
                <s>{productInfo.price.toLocaleString("ko-KR")}원</s>
              </p>
              <p className="font-semibold tracking-tight leading-4">
                {(
                  productInfo.price -
                  Math.floor((productInfo.price * productInfo.discount) / 100)
                ).toLocaleString("ko-KR")}
                원
              </p>
            </div>
          </div>
          <img
            src={require("src/assets/icons/delete.svg").default}
            className="w-5 h-5"
            onClick={() => {
              deleteEvent([productInfo]);
            }}
            alt=""
          ></img>
        </div>

        <div className="flex flex-wrap justify-end mt-3">
          <p
            className="text-gray-60 text-xs tracking-tight leading-4 h-12 pt-3 px-4 pb-4 flex items-center rounded bg-gray-100"
            style={{ width: "calc(100% - 32px" }}
          >
            {productInfo.option1}/{productInfo.option2}
          </p>
          <div
            className="flex gap-2 mt-3"
            style={{ width: "calc(100% - 32px" }}
          >
            <Button
              text={"옵션변경"}
              option={
                "w-full h-10 text-sm font-semibold border rounded tracking-tight leading-4"
              }
              onClick={() => {
                changeEvent(index);
                changeOpen(true);
              }}
            />
            <select
              className="w-full h-10 px-3 flex items-center relative border border-gray-300 rounded"
              onChange={(e) =>
                dispatch({
                  type: "changeItemAmount",
                  payload: [productInfo, e.target.value],
                })
              }
              key={productInfo.amount}
              defaultValue={productInfo.amount}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
              <option value="60">60</option>
              <option value="61">61</option>
              <option value="62">62</option>
              <option value="63">63</option>
              <option value="64">64</option>
              <option value="65">65</option>
              <option value="66">66</option>
              <option value="67">67</option>
              <option value="68">68</option>
              <option value="69">69</option>
              <option value="70">70</option>
              <option value="71">71</option>
              <option value="72">72</option>
              <option value="73">73</option>
              <option value="74">74</option>
              <option value="75">75</option>
              <option value="76">76</option>
              <option value="77">77</option>
              <option value="78">78</option>
              <option value="79">79</option>
              <option value="80">80</option>
              <option value="81">81</option>
              <option value="82">82</option>
              <option value="83">83</option>
              <option value="84">84</option>
              <option value="85">85</option>
              <option value="86">86</option>
              <option value="87">87</option>
              <option value="88">88</option>
              <option value="89">89</option>
              <option value="90">90</option>
              <option value="91">91</option>
              <option value="92">92</option>
              <option value="93">93</option>
              <option value="94">94</option>
              <option value="95">95</option>
              <option value="96">96</option>
              <option value="97">97</option>
              <option value="98">98</option>
              <option value="99">99</option>
            </select>
          </div>
        </div>
      </div>

      <hr />
      <p className="py-5 px-4 text-sm text-right tracking-tighter leading-6">
        상품{" "}
        {isChecked
          ? (
              (productInfo.price -
                Math.floor((productInfo.price * productInfo.discount) / 100)) *
              itemAmount
            ).toLocaleString("ko-KR")
          : 0}
        원 + 배송비 0원{" "}
        <b className="text-sm">
          ={" "}
          {isChecked
            ? (
                (productInfo.price -
                  Math.floor(
                    (productInfo.price * productInfo.discount) / 100
                  )) *
                itemAmount
              ).toLocaleString("ko-KR")
            : 0}
          원
        </b>
      </p>
      <div className="w-full h-2 bg-gray-100"></div>
    </div>
  );
}

export default CartItem;
