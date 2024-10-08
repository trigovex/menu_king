import { useState } from 'react';

export default function MenuForm(props) {
  const [menuSelection, setMenuSelection] = useState('dropdown');
  const [customMenu, setCustomMenu] = useState('');

  const [submenuSelection, setSubmenuSelection] = useState('dropdown');
  const [selectedSubmenu, setSelectedSubmenu] = useState('');
  const [customSubmenu, setCustomSubmenu] = useState('');
  const [submenus, setSubmenus] = useState([]);

  // State for time selection
  const [availableTime, setAvailableTime] = useState({ start: '', end: '' });
  const [selectAllDays, setSelectAllDays] = useState(false);
  const [selectedDays, setSelectedDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const addSubmenu = () => {
    if (submenuSelection === 'dropdown' && selectedSubmenu) {
      setSubmenus([...submenus, { type: 'dropdown', name: selectedSubmenu }]);
    } else if (submenuSelection === 'custom' && customSubmenu) {
      setSubmenus([...submenus, { type: 'custom', name: customSubmenu }]);
      setCustomSubmenu('');
    }
    setSelectedSubmenu('');
  };

 const handleSave = () => {
  const selectedDaysList = selectAllDays
    ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    : Object.keys(selectedDays).filter(day => selectedDays[day]);

  // Validate required fields
  const isMenuValid = menuSelection === 'custom' ? customMenu.trim() !== '' : menuSelection.trim() !== '';
  const isTimingsValid = availableTime !== ''  ;
  const isSelectedDaysValid = selectedDaysList.length > 0;

  if (!isMenuValid || !isTimingsValid || !isSelectedDaysValid) {
    // Display error message
    let errorMessage = 'Please ensure that the following fields are filled out: ';
    if (!isMenuValid) errorMessage += 'Menu Name, ';
    if (!isTimingsValid) errorMessage += 'Timings, ';
    if (!isSelectedDaysValid) errorMessage += 'Available Days. ';
    console.error(errorMessage);
    alert(errorMessage); // You can replace this with a more user-friendly notification method
    return; // Exit the function if validation fails
  }

  // If all validations pass, create the object
  let obj = {
    menu_name: menuSelection === 'custom' ? customMenu : menuSelection,
    sub_menu: submenus, // Optional field
    timings: availableTime,
    available_days: selectedDaysList
  };

  props.isCreating(false);
  console.log('Menu:', obj);
};


  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
      <div className="space-y-12">
        {/* Menu Details Section (unchanged) */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Menu Details</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Provide a menu name or specify a custom one.</p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Select Menu Option
              </label>
              <div className="mt-2 flex gap-4">
                <div className="flex items-center">
                  <input
                    id="dropdown"
                    name="menu-selection"
                    type="radio"
                    value="dropdown"
                    checked={menuSelection === 'dropdown'}
                    onChange={() => setMenuSelection('dropdown')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="dropdown" className="ml-3 block text-sm font-medium text-gray-900">
                    Select from Menu
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="custom"
                    name="menu-selection"
                    type="radio"
                    value="custom"
                    checked={menuSelection === 'custom'}
                    onChange={() => setMenuSelection('custom')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="custom" className="ml-3 block text-sm font-medium text-gray-900">
                    Not specified in the menu
                  </label>
                </div>
              </div>
            </div>

            {menuSelection === 'dropdown' && (
              <div className="sm:col-span-6 mt-4">
                <label htmlFor="menu-dropdown" className="block text-sm font-medium leading-6 text-gray-900">
                  Menu Name
                </label>
                <div className="mt-2">
                  <select
                    id="menu-dropdown"
                    name="menu-dropdown"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="burger">Burger</option>
                    <option value="pizza">Pizza</option>
                    <option value="pasta">Pasta</option>
                    <option value="salad">Salad</option>
                  </select>
                </div>
              </div>
            )}

            {menuSelection === 'custom' && (
              <div className="sm:col-span-6 mt-4">
                <label htmlFor="custom-menu" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter Custom Menu Name
                </label>
                <div className="mt-2">
                  <input
                    id="custom-menu"
                    name="custom-menu"
                    type="text"
                    value={customMenu}
                    onChange={(e) => setCustomMenu(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <hr className="my-6 border-t border-gray-200" />

        {/* Submenu Details Section (unchanged) */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Submenu Details</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Provide a submenu name or specify a custom one.</p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Select Submenu Option
              </label>
              <div className="mt-2 flex gap-4">
                <div className="flex items-center">
                  <input
                    id="submenu-dropdown"
                    name="submenu-selection"
                    type="radio"
                    value="dropdown"
                    checked={submenuSelection === 'dropdown'}
                    onChange={() => setSubmenuSelection('dropdown')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="submenu-dropdown" className="ml-3 block text-sm font-medium text-gray-900">
                    Select from Submenu
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="submenu-custom"
                    name="submenu-selection"
                    type="radio"
                    value="custom"
                    checked={submenuSelection === 'custom'}
                    onChange={() => setSubmenuSelection('custom')}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="submenu-custom" className="ml-3 block text-sm font-medium text-gray-900">
                    Not specified in the submenu
                  </label>
                </div>
              </div>
            </div>

            {submenuSelection === 'dropdown' && (
              <div className="sm:col-span-6 mt-4">
                <label htmlFor="submenu-dropdown" className="block text-sm font-medium leading-6 text-gray-900">
                  Submenu Name
                </label>
                <div className="mt-2">
                  <select
                    id="submenu-dropdown"
                    name="submenu-dropdown"
                    value={selectedSubmenu}
                    onChange={(e) => setSelectedSubmenu(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="fries">Fries</option>
                    <option value="drink">Drink</option>
                    <option value="sauce">Sauce</option>
                  </select>
                </div>
              </div>
            )}

            {submenuSelection === 'custom' && (
              <div className="sm:col-span-6 mt-4">
                <label htmlFor="custom-submenu" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter Custom Submenu Name
                </label>
                <div className="mt-2">
                  <input
                    id="custom-submenu"
                    name="custom-submenu"
                    type="text"
                    value={customSubmenu}
                    onChange={(e) => setCustomSubmenu(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            <div className="sm:col-span-6 mt-4">
              <button type="button" onClick={addSubmenu} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Submenu
              </button>
            </div>

            <div className="sm:col-span-6 mt-4">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Submenus List</h3>
              <ul>
                {submenus.map((submenu, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {submenu.name} ({submenu.type})
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-200" />

        {/* Timing Section */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Available Times</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Set available time for the menu.</p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-6 mt-4">
              <label htmlFor="available-time-start" className="block text-sm font-medium leading-6 text-gray-900">
                Start Time
              </label>
              <input
                id="available-time-start"
                name="available-time-start"
                type="time"
                value={availableTime.start}
                onChange={(e) => setAvailableTime({ ...availableTime, start: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-6 mt-4">
              <label htmlFor="available-time-end" className="block text-sm font-medium leading-6 text-gray-900">
                End Time
              </label>
              <input
                id="available-time-end"
                name="available-time-end"
                type="time"
                value={availableTime.end}
                onChange={(e) => setAvailableTime({ ...availableTime, end: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-6 mt-4">
            <label className="flex items-center">
                <input
                type="checkbox"
                checked={selectAllDays}
                onChange={() => {
                    setSelectAllDays(!selectAllDays);
                    if (!selectAllDays) {
                    setSelectedDays({
                        monday: true,
                        tuesday: true,
                        wednesday: true,
                        thursday: true,
                        friday: true,
                        saturday: true,
                        sunday: true,
                    });
                    } else {
                    setSelectedDays({
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false,
                        saturday: false,
                        sunday: false,
                    });
                    }
                }}
                className="mr-2"
                />
                <span>Select All Days</span>
            </label>
            </div>

                {/* Render individual day checkboxes only if selectAllDays is false */}
          {!selectAllDays && (
  <div className="grid grid-cols-2 gap-4 mt-5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1">
    {Object.keys(selectedDays).map((day) => (
      <div key={day} className="flex items-center justify-start">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedDays[day]}
            onChange={() => setSelectedDays({ ...selectedDays, [day]: !selectedDays[day] })}
            className="mr-2"
          />
          <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
        </label>
      </div>
    ))}
  </div>
)}



          </div>
        </div>

    <div className="mt-8 flex justify-end space-x-4">
  <button
    type="submit"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Save
  </button>

  <button
    onClick={()=>props.isCreating(false)}
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
  >
    Cancel
  </button>
</div>


        
      </div>
    </form>
  );
}
