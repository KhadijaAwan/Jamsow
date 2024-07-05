"use client";
import { useRouter } from "next/navigation";
import { SearchParamsProps, statusOptionProps, statusOptions } from "../types";

export default function IssuesCategory({
  pageNumber,
  status,
}: SearchParamsProps) {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    console.log(selectedValue)
    router.push(`/issues?pageNumber=${pageNumber}&status=${selectedValue}`);
  };

  return (
    <select
      className="block w-max px-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
      defaultValue={status}
      onChange={handleChange}
    >
      {statusOptions.map((statusOption: statusOptionProps) => (
        <option key={statusOption.title} value={statusOption.value} className="text-[13px]">
          {statusOption.title}
        </option>
      ))}
    </select>
  );
}
