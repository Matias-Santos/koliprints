import "./styles.scss";
export default function Filter({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <div className="filter">
      <h3 className="filter-title">{title}</h3>
      {options.map((o, index) => (
        <h4 key={`${index}-opt`} className="filter-opt">
          {o}
        </h4>
      ))}
    </div>
  );
}
