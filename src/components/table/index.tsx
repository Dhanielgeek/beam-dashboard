import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

// Sample transaction data
const transactions = [
  {
    id: "TXN0012345",
    type: "Validation",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012346",
    type: "Awaiting Approval",
    amount: "N200,000.00",
    status: "Liquidated",
    date: "2024-09-12",
  },
  {
    id: "TXN0012347",
    type: "Withdrawal",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012348",
    type: "Collateral",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012349",
    type: "Collateral",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012350",
    type: "Approval",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012351",
    type: "Collateral",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012352",
    type: "Stock Investment",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012353",
    type: "Collateral",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
  {
    id: "TXN0012354",
    type: "Collateral",
    amount: "N200,000.00",
    status: "Approved",
    date: "2024-09-12",
  },
];

// Table component
const Table = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Transaction ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Transaction Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount (N)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : transaction.status === "Liquidated"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span className="h-2 w-2 mr-1 rounded-full bg-current"></span>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <Eye size={16} className="mr-1" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
        <div className="text-sm text-gray-700">Page 1 of 30</div>
        <div className="flex-1 flex justify-center">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-yellow-50 text-sm font-medium text-yellow-600 hover:bg-yellow-100">
              1
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              3
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              4
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              5
            </button>
            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
        <div className="flex-1 flex justify-end"></div>
      </div>
    </div>
  );
};

export default Table;
