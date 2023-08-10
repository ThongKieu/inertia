import React from "react";
import {
    Navbar,Button, Menu, MenuItem, Avatar, IconButton,
} from "@material-tailwind/react";
import {
    HomeIcon, UserCircleIcon, ChevronDownIcon, PowerIcon, Bars2Icon, DevicePhoneMobileIcon, PencilIcon, FolderIcon, ChatBubbleLeftEllipsisIcon, MagnifyingGlassCircleIcon
} from "@heroicons/react/24/outline";
import CardMain from "@/Components/nav/card";
import NavLink from '@/Components/NavLink';
import ApplicationLogo from "@/Components/ApplicationLogo";
// import NavGuest from "./navGuest";

// profile menu component
const profileMenuItems = [
    {
        label: "Thông Tin Tài Khoản",
        icon: UserCircleIcon,
        href: '/'
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
        href: '/admin'
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    // const closeMenu = () => setIsMenuOpen(false);
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <div className="relative flex items-center mx-auto text-blue-gray-900">
                <NavLink
                    href={route('dashboard')}
                    className="py-1 ml-2 font-medium cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </NavLink>
                <NavLink
                    href={route('dashboard')}
                    className="ml-2 cursor-pointer py-1.5 font-medium "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                </NavLink>
                <NavLink
                    href={route('dashboard')}
                    className="ml-2 cursor-pointer py-1.5 font-medium "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>


                </NavLink>
                <NavLink
                    href={route('dashboard')}
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </NavLink>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-blue-500 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </div>


            
        </Menu>
    );
}

// nav list component
const navListItems = [

    {
        id: 1, 
        label: "Admin",
        icon: HomeIcon,
        href: 'admin'
    },
    {
        id: 2,
        label: "Thợ",
        icon: UserCircleIcon,
        href: '/'

    },
    {
        id: 2,
        label: "Thêm Dữ Liệu",
        icon: FolderIcon,
        href: '/'

    },
    {
        id: 2,
        label: "App",
        icon: DevicePhoneMobileIcon,
        href: '/'

    },
    {
        id: 2,
        label: "Zalo",
        icon: ChatBubbleLeftEllipsisIcon,
        href: '/'

    },
    {
        id: 2,
        label: "Công Cụ",
        icon: MagnifyingGlassCircleIcon,
        href: '/'

    },
  
];

function NavList() {
    return (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

            {navListItems.map(({ label, icon, href }, key) => (
                <NavLink key={key} href={href} className="font-normal">
                    <MenuItem className="flex items-center gap-2 text-black lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        {label}
                        
                    </MenuItem>
                 
                    
                  
                </NavLink>
            ))}
          
        </ul>
    );
}
function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
   
    const renderItems = navListMenuItems.map(
      ({ icon, title, description, color }, key) => (
        <a href="#" key={key}>
          <MenuItem className="flex items-center gap-3 rounded-lg">
            <div className={`rounded-lg p-5 ${colors[color]}`}>
              {React.createElement(icon, {
                strokeWidth: 2,
                className: "h-6 w-6",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm"
              >
                {title}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {description}
              </Typography>
            </div>
          </MenuItem>
        </a>
      )
    );
   
    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-normal">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <Square3Stack3DIcon className="h-[18px] w-[18px]" />
                Resources
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
    );
  }

function NavbarDefault() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="w-full max-w-full p-2 mx-auto mt-2 text-black-400 lg:pl-6 bg-blue-gray-200">
            <div className="relative flex items-center justify-between h-8 mx-auto text-blue-gray-900">
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden lg-max:text-left"
                >
                    <Bars2Icon className="w-6 h-6" />
                </IconButton>
                <div className="hidden p-0 m-0 lg:flex">
                    <NavLink
                        href={route('dashboard')}
                        className="mr-4 ml-2 cursor-pointer py-1.5 font-medium "
                    >
                        <ApplicationLogo />
                    </NavLink>
                    <NavList />
                </div>

                <div>
                    <ProfileMenu />
                </div>
            </div>

        </Navbar>
    );
}
export default NavbarDefault
