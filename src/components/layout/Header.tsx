import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemClick = (index:number) => {
    setActiveIndex(index);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { id: 0, label: "کتاب ها" },
    { id: 1, label: "نمونه سوال" },
    { id: 2, label: "جزوه" },
    { id: 3, label: "چارت درسی" },
  ];

  return (
    <header className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="text-xl focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <ul className={`flex text-lg md:text-xl gap-4 md:gap-6 ${showMenu ? 'flex-col' : 'hidden'} md:flex`}>
        {menuItems.map((item,index) => (
          <li
            key={item.id}
            className={`cursor-pointer ${index === activeIndex ? 'text-black font-bold' : 'text-gray-500'}`}
            onClick={() => handleItemClick(index)}
          >
            {item.label}
          </li>
        ))}
        
      </ul>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl">ایدوهاب</h1>
        <h6 className="font-bold text-sm md:text-base ml-2 md:ml-3">دوست آموزشی تو</h6>
      </div>
    </header>
  );
};

export default Header;
