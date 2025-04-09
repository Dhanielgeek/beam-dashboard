import {
  Home,
  Users,
  FileText,
  BarChart2,
  Repeat,
  Wallet,
  Bell,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`bg-black text-white h-full overflow-y-scroll scrollbar-hide w-64 p-4 flex flex-col justify-between fixed top-0 left-0 z-40 transition-transform transform md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:static md:block`}
    >
      {/* Top - Logo and Nav */}
      <div>
        <div className="mb-6 flex items-center justify-between gap-2">
          <div className="flex justify-center gap-2">
            <div className="bg-yellow-400 text-black w-[40px] h-[40px] flex items-center justify-center font-bold rounded-full">
              B.
            </div>
            <p className="text-white mt-2 font-semibold">BEAM</p>
          </div>
          <button
            className="md:hidden w-[30px] h-[30px] rounded-md border-amber-400 border flex justify-center items-center"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2 text-sm">
          <p className="text-gray-400 uppercase mb-2 text-xs">Main</p>
          <NavItem to="/overview" icon={<Home size={16} />} label="Overview" />
          <NavItem
            to="/customers"
            icon={<Users size={16} />}
            label="Customers"
          />
          <NavItem
            to="/spot-orders"
            icon={<FileText size={16} />}
            label="Spot Orders"
          />
          <NavItem
            to="/margin-orders"
            icon={<BarChart2 size={16} />}
            label="Margin Orders"
          />
          <NavItem
            to="/transactions"
            icon={<Repeat size={16} />}
            label="Transactions"
          />
          <NavItem
            to="/wallet"
            icon={<Wallet size={16} />}
            label="Wallet"
            active
          />
        </nav>

        {/* Added spacing between Main and Others */}
        <div className="my-6"></div>

        <p className="text-gray-400 uppercase mb-2 text-xs">Others</p>
        <nav className="space-y-2 text-sm">
          <NavItem
            to="/notifications"
            icon={<Bell size={16} />}
            label="Notification"
          />
          <NavItem
            to="/settings"
            icon={<Settings size={16} />}
            label="Settings"
          />
          <NavItem to="/logout" icon={<LogOut size={16} />} label="Logout" />
          <NavItem to="/help" icon={<HelpCircle size={16} />} label="Help" />
        </nav>
      </div>

      {/* Bottom - Dark Mode Toggle with added space */}
      <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-6">
        <div className="px-7 py-2 bg-[#FFFFFF] rounded-lg flex justify-center gap-2 items-center">
          <span className="text-xs text-[#0D0D0C]">Switch to dark mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-white peer-checked:before:translate-x-full before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:bg-white peer-checked:before:bg-black before:border before:rounded-full before:h-4 before:w-4 before:transition-all"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  to,
  icon,
  label,
  active = false,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-md ${
          isActive || active
            ? "bg-yellow-400 text-black font-semibold"
            : "hover:bg-gray-800 transition"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;
