import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import res_image_1 from '../../assets/res_3.jpg';
import res_image_2 from '../../assets/res_2.jpg';
import { useLocation } from 'react-router-dom'

const navigation = {
  categories: [
    {
      id: 'services',
      name: 'Services',
      featured: [
        {
          name: 'New Restaurants',
          href: '#',
          imageSrc: res_image_2,
          imageAlt: 'Freshly opened restaurants in your city.',
        },
        {
          name: 'Popular Restaurants',
          href: '#',
          imageSrc: res_image_1,
          imageAlt: 'Most loved restaurants by diners.',
        },
      ],
      sections: [
        {
          id: 'locations',
          name: 'Available Locations',
          items: [
            { name: 'Pune', href: '#' },
            { name: 'Mumbai', href: '#' },
            { name: 'Hyderabad', href: '#' },
            { name: 'Chennai', href: '#' },
            { name: 'Kerala', href: '#' },
            { name: 'Delhi', href: '#' },
            { name: 'Assam', href: '#' },
            { name: 'Punjab', href: '#' },
            { name: 'Shimla', href: '#' },
          ],
        },
        {
          id: 'cuisines',
          name: 'Cuisines',
          items: [
            { name: 'Chinese', href: '#' },
            { name: 'French', href: '#' },
            { name: 'Indian', href: '#' },
            { name: 'Arabic', href: '#' },
            { name: 'Indonesian', href: '#' },
            { name: 'Turkish', href: '#' },
          ],
        },
        {
          id: 'services',
          name: 'Dining Options',
          items: [
            { name: 'Fine Dining', href: '#' },
            { name: 'Casual Dining', href: '#' },
            { name: 'Buffet', href: '#' },
            { name: 'Cafe', href: '#' },
            { name: 'Food Truck', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'food',
      name: 'Food',
      featured: [
        {
          name: 'New Dishes',
          href: '#',
          imageSrc: res_image_2,
          imageAlt: 'Recently added dishes on the menu.',
        },
      ],
      sections: [
        {
          id: 'locations',
          name: 'Available Locations',
          items: [
            { name: 'Pune', href: '#' },
            { name: 'Mumbai', href: '#' },
            { name: 'Hyderabad', href: '#' },
            { name: 'Chennai', href: '#' },
            { name: 'Kerala', href: '#' },
            { name: 'Delhi', href: '#' },
            { name: 'Assam', href: '#' },
            { name: 'Punjab', href: '#' },
            { name: 'Shimla', href: '#' },
          ],
        },
        {
          id: 'cuisines',
          name: 'Cuisines',
          items: [
            { name: 'Chinese', href: '#' },
            { name: 'French', href: '#' },
            { name: 'Indian', href: '#' },
            { name: 'Arabic', href: '#' },
            { name: 'Indonesian', href: '#' },
            { name: 'Turkish', href: '#' },
          ],
        },
        {
          id: 'specials',
          name: 'Specials',
          items: [
            { name: 'Chef’s Special', href: '#' },
            { name: 'Today’s Special', href: '#' },
            { name: 'Seasonal Menu', href: '#' },
            { name: 'Vegan Options', href: '#' },
            { name: 'Gluten-Free Options', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/' },
    { name: 'Reservations', href: '/reservation' },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(false)
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-600"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-orange-400 data-selected:text-orange-400"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            order now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className={`-m-2 block p-2 font-medium ${isActive(page.href)
                      ? "text-orange-500 bg-orange-100 rounded-md"
                      : "text-gray-900 hover:text-orange-400"
                      }`}
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-800 hover:bg-orange-400 rounded-2xl">
                  Sign in
                </a>
              </div>
              <div className="flow-root ">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900 hover:bg-orange-400 rounded-2xl">
                  Create account
                </a>
              </div>
            </div>

          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">


        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-600 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6 " />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Dhaba</span>
                  {/* <img
                    alt=""
                    className="h-8 w-auto"
                    src=''
                  /> */}
                  <h1 className='text-2xl flex font-bold underline font-serif'><p className='text-orange-500'>D</p>haba</h1>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-orange-500">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-orange-500"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      order now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className={`flex items-center text-sm font-medium px-2 py-1 rounded-md transition-colors ${isActive(page.href)
                          ? "text-orange-500 "
                          : "text-gray-700 hover:text-orange-400"
                        }`}
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <div className="flex items-center bg-gray-200 rounded-xl p-2 border border-gray-400">
                    <input
                      className="bg-gray-200 outline-none flex-1"
                      placeholder="Enter here"
                    />
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="text-gray-500 h-5 w-5"
                    />
                  </div>


                  <span aria-hidden="true" className="h-6 w-px bg-gray-600" />

                  <a href="/auth" className="text-sm font-medium text-gray-700 hover:text-gray-800 hover:bg-orange-300 p-3 bg-orange-400 rounded-lg">
                    Sign in
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-500 group-hover:text-gray-700"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export const Navbar = () => {
  return (
    <div>
      <Example />
    </div>
  )
}

