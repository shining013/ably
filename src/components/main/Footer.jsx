import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "40px 30px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <img src="/images/logo.svg" alt="" />
      <div>
        <p>
          <span>(주)에이블리코퍼레이션</span>
          <span>|</span>
          <span>대표: 강석훈</span>
        </p>
        <p>"사업자등록번호 " "164-87-00149"</p>
        <p>"통신판매업신고번호 " "2021-서울서초-2450"</p>
        <p>"전화: " "1833-8021"</p>
        <p>이메일: support@a-bly.com</p>
        <p>주소: 서울특별시 서초구 강남대로 465, 9층</p>
        <div>
          <a href="!#">개인정보 처리방침</a>
          <p>|</p>
          <a href="!#">서비스 이용 약관</a>
          <p>|</p>
          <a href="!#">청소년 보호정책</a>
          <p>|</p>
          <a href="!#">
            <form method="post">
              <input type="hidden" name="authmarkinfo" />
              "IBK 에스크로 가입확인"
            </form>
          </a>
          <p>|</p>
          <a href="!#">나이스페이 에스크로 가입확인</a>
          <p>|</p>
          <a href="!#">사업자정보확인</a>
        </div>
        <p>
          에이블리에서 판매되는 상품 중에는 개별 입점 판매자(셀러스)의 상품이
          포함되어 있습니다. 해당 상품에 대해 ㈜에이블리코퍼레이션은
          통신판매중개자의 지위에 있고 통신판매의 당사자가 아닙니다. 해당 상품의
          거래 전반에 관한 의무와 책임은 각 입점 판매자에게 있습니다.
        </p>
      </div>
      <p style={{ fontSize: "12px", color: "gray" }}>
        © 2024. ABLY Corp., Inc. All rights reserved
      </p>
      Footer
    </div>
  );
}

export default Footer;
