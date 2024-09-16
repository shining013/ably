import React from "react";
const marginFooter = {
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
};
function Footer() {
  return (
    <div
      className="flex flex-col bg-gray-10 "
      style={{
        padding: "40px 30px",
      }}
    >
      <img
        src="/images/logo.svg"
        className="px-4 w-4 h-2 "
        alt=""
        style={{
          maxWidth: "767px",
          height: "5em",
          width: "10em",
          outlineStyle: "none",
          outlineColor: "initial",
          outlineWidth: "initial",
        }}
      />
      <div className="px-2 py-5 block">
        <div className="text-gray-50">
          <p className="m-0 block" style={{ marginFooter }}>
            <span style={{ fontSize: "12px" }}>(주)에이블리코퍼레이션</span>
            <span style={{ fontSize: "12px", margin: "0px 3px" }}>|</span>
            <span style={{ fontSize: "12px" }}>대표: 강석훈</span>
          </p>
          <div className="block" style={{ marginFooter }}>
            <p style={{ fontSize: "12px", marginTop: "12px" }}>
              사업자등록번호 164-87-00149
            </p>
            <p style={{ fontSize: "12px", marginTop: "12px" }}>
              통신판매업신고번호 2021-서울서초-2450
            </p>
            <p style={{ fontSize: "12px", marginTop: "12px" }}>
              전화: 1833-8021
            </p>
            <p style={{ fontSize: "12px", marginTop: "12px" }}>
              이메일: support@a-bly.com
            </p>
            <p style={{ fontSize: "12px", marginTop: "12px" }}>
              주소: 서울특별시 서초구 강남대로 465, 9층
            </p>
          </div>
        </div>
        <div
          className="flex flex-wrap items-center"
          style={{ marginTop: "3.2vw", marginBottom: "-5px" }}
        >
          <a
            href="!#"
            className="m-0 text-gray-70 "
            style={{
              marginBottom: "5px",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            개인정보 처리방침
          </a>
          <p
            className="block text-gray-50"
            style={{
              margin: "0 5px 5px",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              fontSize: "12px",
            }}
          >
            |
          </p>
          <a
            href="!#"
            className="m-0 text-gray-70 "
            style={{
              marginBottom: "5px",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            서비스 이용 약관
          </a>
          <p
            className="block text-gray-50"
            style={{
              margin: "0 5px 5px",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              fontSize: "12px",
            }}
          >
            |
          </p>
          <a
            href="!#"
            className="m-0 text-gray-70 "
            style={{
              marginBottom: "5px",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            청소년 보호정책
          </a>
          <p
            className="block text-gray-50"
            style={{
              margin: "0 5px 5px",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              fontSize: "12px",
            }}
          >
            |
          </p>
          <a href="!#">
            <form method="post">
              <input type="hidden" name="authmarkinfo" />

              <p
                style={{
                  fontSize: "12px",
                  marginBottom: "5px",
                  textDecoration: "none",
                }}
              >
                IBK 에스크로 가입확인
              </p>
            </form>
          </a>
          <p
            className="block text-gray-50"
            style={{
              margin: "0 5px 5px",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              fontSize: "12px",
            }}
          >
            |
          </p>
          <a
            href="!#"
            style={{
              fontSize: "12px",
              marginBottom: "5px",
              textDecoration: "none",
            }}
          >
            나이스페이 에스크로 가입확인
          </a>
          <p
            className="block text-gray-50"
            style={{
              margin: "0 5px 5px",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              fontSize: "12px",
            }}
          >
            |
          </p>
          <a
            href="!#"
            style={{
              fontSize: "12px",
              marginBottom: "5px",
              textDecoration: "none",
            }}
          >
            사업자정보확인
          </a>
        </div>

        <p style={{ marginTop: "3.2vw", fontSize: "12px", color: "gray" }}>
          에이블리에서 판매되는 상품 중에는 개별 입점 판매자(셀러스)의 상품이
          포함되어 있습니다. 해당 상품에 대해 ㈜에이블리코퍼레이션은
          통신판매중개자의 지위에 있고 통신판매의 당사자가 아닙니다. 해당 상품의
          거래 전반에 관한 의무와 책임은 각 입점 판매자에게 있습니다.
        </p>
      </div>
      <p
        style={{
          fontSize: "12px",
          color: "#929292",
          marginTop: "18px",
          letterSpacing: "-0.2px",
        }}
      >
        © 2024. ABLY Corp., Inc. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
