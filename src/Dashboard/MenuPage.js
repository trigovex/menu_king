import { useState } from 'react';
import MenuForm from './MenuCreate';
import MenuCards from './MenuCards';

const tabs = [
  { name: 'Menus', href: '#', current: true, content: 'This is the content for Menus' },
  { name: 'Pre defined Menus', href: '#', current: false, content: 'No predefined menus available.' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MenuPage() {
  const [currentTab, setCurrentTab] = useState(tabs[0].name); // State for current tab
  const [isCreating, setIsCreating] = useState(false); // State to handle form display
  const [menus, setMenus] = useState([]); // State to store created menus
  const [menuName, setMenuName] = useState(''); // State for menu name input
  const [subMenus, setSubMenus] = useState(''); // State for submenu input

  const handleSave = () => {
    // Save the menu and submenu to the list
    setMenus([...menus, { menuName, subMenus: subMenus.split(',').map((sm) => sm.trim()) }]);
    // Reset the form and close it
    setIsCreating(false);
    setMenuName('');
    setSubMenus('');
  };

  const handleCancel = () => {
    // Cancel form creation and reset inputs
    setIsCreating(false);
    setMenuName('');
    setSubMenus('');
  };

  return (
    <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
      <div className="md:flex md:items-center md:justify-between">
        <h3 className="text-base font-semibold leading-6 text-gray-900">My Menu</h3>
        <div className="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
          {/* Show Create button only for "Menus" tab */}
          {currentTab === 'Menus' && !isCreating && (
            <button
              type="button"
              className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setIsCreating(true)}
            >
              Create
            </button>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="sm:hidden">
          <select
            id="current-tab"
            name="current-tab"
            value={currentTab} // Bind to the currentTab state
            onChange={(e) => setCurrentTab(e.target.value)} // Update the state when a new tab is selected
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.name}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentTab(tab.name); // Update the state when a tab is clicked
                  setIsCreating(false); // Close the form when switching tabs
                }}
                aria-current={tab.name === currentTab ? 'page' : undefined}
                className={classNames(
                  tab.name === currentTab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Render the content for the current tab */}
        <div className="mt-6">
          {isCreating ? (
            // Form to create new menu
           <MenuForm isCreating={setIsCreating}/>
          ) : currentTab === 'Menus' ? (
            // Display the created menus only in "Menus" tab
            <div>
              {menus.length > 0 ? (
                <div className="space-y-4">
                  {menus.map((menu, index) => (
                    <div key={index} className="p-4 bg-white shadow rounded-md">
                      <h4 className="text-lg font-semibold">{menu.menuName}</h4>
                      <p className="text-sm text-gray-500">
                        Submenus: {menu.subMenus.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <MenuCards/>
              )}
            </div>
          ) : (
            // Show a message in "Pre defined Menus" tab
            <p>{tabs.find((tab) => tab.name === currentTab).content}</p>
          )}
        </div>
      </div>
    </div>
  );
}
