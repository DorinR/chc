import { useState } from "react";

type VerticalTabPage = {
  title: string;
  content: React.ReactNode;
};

type VerticalTabsProps = {
  pages: Record<string, VerticalTabPage[]>;
};

export const VerticalTabs = ({ pages }: VerticalTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    Object.keys(pages).length > 0 ? Object.keys(pages)[0] : ""
  );

  let activeTabContent = null;
  if (activeTab) {
    activeTabContent = pages[activeTab];
  }

  if (Object.keys(pages).length === 0) return null;

  return (
    <>
      {Object.keys(pages).map((page) => {
        return <div onClick={() => setActiveTab(page)}>{page}</div>;
      })}
      {activeTabContent}
    </>
  );
};
