import React from 'react';
import { sidebarItems } from '../Data/sidebarItems';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h2 className="text-lg font-semibold text-blue-600 mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        {sidebarItems.map((item, index) => (
          <li key={index} className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
            <span className="text-xl mr-3">{item.icon}</span>
            <span className="text-gray-700">{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
