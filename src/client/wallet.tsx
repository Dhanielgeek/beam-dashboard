import { Clock, Copy, WalletIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Table from "../components/table";
import { BsBank2 } from "react-icons/bs";
import AddFundsModal from "../components/modals/addfundsmodal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Global/store";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../Global/slice";

interface DecodedToken {
  id: string;
  sub: number;
}

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("history");
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);

  const token = useSelector((state: RootState) => state.user.token);

  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    const decoded = jwtDecode<DecodedToken>(token);

    const id = decoded.sub;

    console.log(id);

    const url = `${import.meta.env.VITE_DEVE_URL}/users/${id}`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchUser = async () => {
      try {
        const res = await axios.get(url, { headers });
        dispatch(setUser(res.data));

        // Access the wallet details
        const wallet = res.data.wallet;
        const balance = wallet.balance;

        console.log("Wallet Balance:", balance);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [token]);
  return (
    <div className="bg-white h-[calc(100vh-72px)] overflow-y-scroll p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 py-1 border-[#C8CBD9] border-b-1 ">
          Wallet
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Balance Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#F9F9F7] rounded-lg shadow p-6 mb-6">
              <div className=" flex justify-between items-center border-[#C8CBD9] border-b-1">
                <h2 className="text-sm font-medium text-gray-500 mb-4">
                  Actual Balance
                </h2>
                <WalletIcon size={20} className=" mb-2" />
              </div>

              <div className="flex items-center mb-4">
                <div className=" flex justify-start w-full items-center py-5 border-[#C8CBD9] border-b-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    N{user.wallet.balance}
                    <span className=" text-sm text-[#C8CBD9]">.00</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-center text-sm font-medium text-gray-600 mb-4">
                <BsBank2 size={16} className="mr-2" />
                <span>Wema Bank {user.wallet.accountNumber}</span>
                <button className="ml-2 text-gray-400">
                  <Copy size={16} />
                </button>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center py-2 border-[#C8CBD9] border-b-1">
                  <h2 className="text-sm font-medium text-gray-500 mb-2">
                    Pending Amount
                  </h2>
                  <Clock size={18} />
                </div>

                <div className="flex items-center mt-7">
                  <h3 className="text-xl font-semibold text-gray-900">
                    N0<span className=" text-sm text-gray-400">.00</span>
                  </h3>
                </div>
              </div>
            </div>

            {showAddFundsModal && (
              <AddFundsModal onClose={() => setShowAddFundsModal(false)} />
            )}

            <div className="flex flex-col space-y-4">
              {/* First Row - Add Fund/Withdrawal */}
              <div className="flex justify-between items-center gap-3">
                <button
                  onClick={() => setShowAddFundsModal(true)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 text-sm rounded-md transition-colors"
                >
                  Add Fund
                </button>
                <button className="flex-1 bg-white hover:bg-gray-50 text-gray-800 py-3 text-sm rounded-md border border-gray-300 transition-colors">
                  Withdrawal
                </button>
              </div>

              {/* Second Row - Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-white hover:bg-gray-50 text-gray-800 py-3 text-sm rounded-md border border-gray-300 transition-colors">
                  PND Amount
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-800 py-3 text-sm rounded-md border border-gray-300 transition-colors">
                  Place Lien
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-800 py-3 text-sm rounded-md border border-gray-300 transition-colors">
                  Freeze Wallet
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Transaction History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <div className="px-6 py-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    Transaction History
                  </h2>
                </div>
                <div className="flex flex-col md:flex-row md:items-center border-b-0 px-4 py-2 gap-3">
                  {/* Tab Buttons */}
                  <div className="flex overflow-x-auto md:overflow-visible space-x-3 scrollbar-hide">
                    <button
                      className={`py-2 px-3 text-sm font-medium border rounded-md whitespace-nowrap ${
                        activeTab === "3-years"
                          ? "bg-yellow-100 text-yellow-700"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("3-years")}
                    >
                      3 Years
                    </button>
                    <button
                      className={`py-2 px-3 text-sm font-medium border rounded-md whitespace-nowrap ${
                        activeTab === "approved"
                          ? "bg-yellow-100 text-yellow-700"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("approved")}
                    >
                      Approved
                    </button>
                    <button
                      className={`py-2 px-3 text-sm font-medium border rounded-md whitespace-nowrap ${
                        activeTab === "pending"
                          ? "bg-yellow-100 text-yellow-700 font-bold"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("pending")}
                    >
                      Pending
                    </button>
                    <button
                      className={`py-2 px-3 text-sm font-medium border rounded-md whitespace-nowrap ${
                        activeTab === "history"
                          ? "bg-gray-100 text-gray-700"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("history")}
                    >
                      History
                    </button>
                  </div>

                  {/* Filter Dropdown */}
                  <div className="flex items-center md:ml-auto space-x-2">
                    <span className="text-sm text-gray-500">Filter by:</span>
                    <div className="relative w-full max-w-[150px]">
                      <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 w-full">
                        <option>Date</option>
                        <option>Amount</option>
                        <option>Type</option>
                      </select>
                      <svg
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
