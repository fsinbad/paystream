import React from "react";
import { Table } from "./table";
import { useRouter } from "next/navigation";
import { employees } from "@/data/employees";

export const EmployeesTable = () => {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/dashboard/employees/${id}`);
  };

  return (
    <Table>
      <thead className="uppercase border-b border-[#272727] font-bold">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Employment Type
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Wallet Address
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-[#272727]">
        {employees.map((employee) => (
          <tr
            key={employee.id}
            className="hover:bg-black cursor-pointer"
            onClick={() => handleRowClick(employee.id)}
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {employee.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {employee.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {employee.employmentType}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {employee.walletAddress}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {employee.email}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
