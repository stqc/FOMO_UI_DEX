"use client";

import React from "react";
import TradeDetailsBox from "../TokenPriceDetailsBox";
import ChartViewHeader from "../ChartView/ChartViewHeader";
import Tabs from "@/components/table/ChartTable/Tabs";
import TradeHistoryTable from "@/components/table/ChartTable/TradeHistoryTable";
import TradeSection from "../TradeSection";
import FooterTab from "./FooterTab";

const Mobile = () => {
  const [showFloatingBar, setShowFloatingBar] = React.useState(false);
  const FOOTER_TAB_DATA = [
    {
      value: "buy",
      label: "Buy",
    },
    {
      value: "sell",
      label: "Sell",
    },
    {
      value: "chat",
      label: "Chat",
    },
  ];
  const [selectedTab, setSelectedTab] = React.useState<string | null>(null);
  return (
    <div className="lg:hidden">
      <div className="mx-[20px] my-[20px]">
        <TradeDetailsBox />
      </div>
      <div>
        <ChartViewHeader />
      </div>
      {/* Chart */}
      <div className="bg-neutral-200 min-h-[600px]"></div>
      {/* Table Tabs */}
      <div className="pt-[20px] px-[10px] md:px-[20px] bg-neutral-900 border-red-400 border-t-[1px] lg:border-l-[1px] lg:border-r-[1px]">
        <Tabs />
      </div>

      {/* Chart Table */}
      <div className="pb-[70px]">
        <TradeHistoryTable />
      </div>

      {/* Floating Footer  panel */}
      <div className="fixed bottom-[0px] z-40 w-full">
        {/* Buy and sell Section */}
        {showFloatingBar && (
          <div className="border-[1px] rounded-tl-[10px] rounded-tr-[10px] border-one px-[10px] bg-neutral-900 py-[30px]">
            <TradeSection />
          </div>
        )}

        {/* Footer */}
        <div className="border-t-[2px] border-one bg-neutral-900 flex justify-between">
          {FOOTER_TAB_DATA.map((tab) => {
            return (
              <FooterTab
                title={tab.label}
                isActive={selectedTab === tab.value}
                handleClick={() => {
                  setSelectedTab(tab.value);
                  setShowFloatingBar(!showFloatingBar);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
