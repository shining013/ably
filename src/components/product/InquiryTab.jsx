import React from "react";
import MapContainer from "src/components/product/MapContainer";
import ProductDetailSection from "./ProductDetailSection";
import companies from "src/data/companies";

const InquiryTab = ({ companyId }) => {
  console.log(companyId);
  const companyData = companies.find((item) => item.id === companyId);
  console.log(companyData);

  return (
    <div>
      <ProductDetailSection option={"company"} data={companyData} />
      <div className="px-5">
        <MapContainer address={companyData?.location} />
      </div>
    </div>
  );
};

export default InquiryTab;
