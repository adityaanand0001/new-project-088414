import React, { useState, createContext, useContext } from "react";
const TabsContext = createContext(undefined);
export const Tabs = React.forwardRef(({ defaultValue, children, className = "", ...props }, ref) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div ref={ref} className={`w-full ${className}`} {...props}>{children}</div>
    </TabsContext.Provider>
  );
});
Tabs.displayName = "Tabs";
export const TabsList = React.forwardRef(({ children, className = "", ...props }, ref) => (
  <div ref={ref} className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`} {...props} >
    {children}
  </div>
));
TabsList.displayName = "TabsList";
export const TabsTrigger = React.forwardRef(({ value, children, className = "", ...props }, ref) => {
  const context = useContext(TabsContext);
  if (!context) { throw new Error("TabsTrigger must be used within a Tabs provider"); }
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;
  return (
    <button ref={ref} onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${ isActive ? "bg-white text-gray-950 shadow-sm" : "hover:bg-white/50" } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
TabsTrigger.displayName = "TabsTrigger";
export const TabsContent = React.forwardRef(({ value, children, className = "", ...props }, ref) => {
  const context = useContext(TabsContext);
  if (!context) { throw new Error("TabsContent must be used within a Tabs provider"); }
  const { activeTab } = context;
  if (activeTab !== value) return null;
  return (
    <div ref={ref} className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 ${className}`} {...props} >
      {children}
    </div>
  );
});
TabsContent.displayName = "TabsContent";