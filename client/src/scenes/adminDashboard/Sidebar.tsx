import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';

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
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderMenuItems = (items: MenuItem[], level: number = 1) => {
    return (
      <ul className={`pl-${level * 4} pt-2 items-start flex flex-col space-y-8`}>
        {items.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="flex items-start  justify-between text-gray-600 hover:text-gray-800">
              <span className="flex items-start ">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.name}</span>
              </span>
              {item.submenu ? (
                <span className="text-xs">
                  {collapsed ? <BsArrowRight /> : <BsArrowDown />}
                </span>
              ) : null}
            </Link>
            {item.submenu && !collapsed ? renderMenuItems(item.submenu, level + 1) : null}
          </li>
        ))}
      </ul>
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
