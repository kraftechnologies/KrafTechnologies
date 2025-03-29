import React, { useState } from "react";

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

export function TabsList({ children, className }) {
  return <div className={`flex ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className, setActiveTab }) {
  return (
    <button
      className={`px-4 py-2 ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, activeTab, className }) {
  return activeTab === value ? (
    <div className={className}>{children}</div>
  ) : null;
}