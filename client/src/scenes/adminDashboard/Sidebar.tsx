import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    
  },
  {
    name: 'Courses',
    path: '/courses',
    submenu: [
      {
        name: 'All Courses',
        path: '/courses/all',
      },
      {
        name: 'By Category',
        path: '/courses/category',
      },
      {
        name: 'Single Course',
        path: '/courses/single',
      },
    ]
  },
  {
    name: 'Users',
    path: '/users',
    submenu: [
      {
        name: 'Instructors',
        path: '/users/instructors',
      },
      {
        name: 'Students',
        path: '/users/students',
      },
    ]
  },
  {
    name: 'Forms',
    path: '/forms'
  },
  {
    name: 'Site Settings',
    path: '/settings',
    submenu: [
      {
        
        name: 'General Settings',
        path: '/settings/general',
  
      
      },
      {
        name: 'Security Settings',
        path: '/settings/security',
      },
    ],
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<string[]>([]);

  const toggleCollapse = (path: string) => {
    if (collapsed.includes(path)) {
      setCollapsed((prev) => prev.filter((p) => p !== path));
    } else {
      setCollapsed((prev) => [...prev, path]);
    }
  };

  const renderMenuItems = (items: MenuItem[], level: number = 1) => {
    return (
      <div className='relative'>
      <ul className={`pl-${level * 4} pt-2 flex inset-y-0 left-0 absolute flex-col space-y-4`}>
        {items.map((item) => (
          <li key={item.path}>
            <div
              className="flex items-center justify-between text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={() => item.submenu && toggleCollapse(item.path)}
            >
              <div className="flex items-center">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.name}</span>
              </div>
              {item.submenu ? (
                <div className="text-[15px]">
                
                </div>
              ) : null}
            </div>
            {item.submenu && collapsed.includes(item.path) && (
              renderMenuItems(item.submenu, level + 1)
            )}
          </li>
        ))}
      </ul>
      </div>
    );
  };


  return (
    <div className="h-full bg-white shadow-md">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">Admin Panel</h3>
      </div>
      <hr className="my-2" />
      <div className="p-4">
        {renderMenuItems(menuItems)}
      </div>
    </div>
  );
};

export default Sidebar;
