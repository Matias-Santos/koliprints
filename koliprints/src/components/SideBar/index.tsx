import { useState, useEffect } from "react";
import Filter from "../Filters";
import { FilterT } from "../../types/filterT.type";
import { filtersMock } from "../../mocks/filtersMock";
import "./styles.scss";

export default function SideBar({ title }: { title: string }) {
  const [filters, setFilters] = useState<FilterT[]>([]);

  useEffect(() => {
    setFilters(filtersMock);
  }, []);

  return (
    <div className="sidebar">
      <h1 className="title">{title}</h1>
      {filters.map((f, index) => (
        <Filter key={`${index}-filter`} title={f.title} options={f.options} />
      ))}
    </div>
  );
}
