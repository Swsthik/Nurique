import React, { useState } from 'react';
import { CalendarIcon, PencilSquareIcon, HomeIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SidebarItem = ({ href, icon: Icon, name, count, current, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={classNames(
      current ? ' text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800',
      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
    )}
  >
    <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
    {name}
    {count ? (
      <span
        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
        aria-hidden="true"
      >
        {count}
      </span>
    ) : null}
  </a>
);

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navigation = [
    { name: 'Profile', href: '/dashboard/profile', icon: HomeIcon, count: '', current: activeIndex === 0 },
    { name: 'Assessments', href: '/dashboard/assessment', icon: CalendarIcon, count: '', current: activeIndex === 1 },
    { name: 'Task', href: '/dashboard/tasks', icon: PencilSquareIcon, current: activeIndex === 2 },
    { name: 'Training Games', href: '/dashboard/traininggames', icon: PuzzlePieceIcon, count: '', current: activeIndex === 3 },
  ];

  return (
    <div className="flex h-screen flex-col gap-y-5 overflow-y-auto bg-gray-900 w-64 px-6">
      <div className="flex h-16 shrink-0 items-center"></div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item, index) => (
                <li key={item.name}>
                  <SidebarItem {...item} index={index} activeIndex={activeIndex} onClick={() => handleItemClick(index)} />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
