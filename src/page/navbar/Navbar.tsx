/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { logout, userDetails } from "../../Redux/AuthSlice";
import { toast } from "sonner";
import logo from "../../assets/relief donation.png";
import ThemeSwitch from "../ThemeSwitch/Switch";

export default function Navbar() {
  const user = useAppSelector(userDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logout Successfully");
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-10 w-auto"
                      src={logo}
                      alt="relief Donation"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {user?.email && (
                      <Link
                        to="/dashboard/piechart"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Dashboard
                      </Link>
                    )}

                    <Link
                      to="/relief-goods"
                      className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                    >
                      All relif Goods
                    </Link>
                    <Link
                      to="/leaderboard"
                      className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                    >
                      Top Donors
                    </Link>
                    <Link
                      to="/Community"
                      className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                    >
                      Community
                    </Link>
                    <Link
                      to="/about-us"
                      className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                    >
                      AboutUs
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      {user?.email ? (
                        <div>
                          <button
                            onClick={handleLogout}
                            className="font-semibold text-white rounded-xl bg-indigo-900 hover:bg-indigo-600 px-5 py-2"
                          >
                            Logout
                          </button>
                        </div>
                      ) : (
                        <div className="hover:bg-slate-700 hover:w-full hover:px-4 px-4 hover:rounded-xl hover:py-2">
                          <Link className=" text-white" to="/login">
                            Login or Register
                          </Link>
                        </div>
                      )}
                      <ThemeSwitch />
                    </div>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {user?.email && (
                <Link
                  to="/dashboard/piechart"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
              )}

              <Link
                to="/relief-goods"
                className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                All relief Goods
              </Link>
              <Link
                to="/leaderboard"
                className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                Top Donors
              </Link>
              <Link
                to="/Community"
                className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                Community
              </Link>
              <Link
                to="/about-us"
                className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                AboutUs
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
