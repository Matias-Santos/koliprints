import { headerMock } from "../../mocks/headerMock";
import { useEffect, useState } from "react";
import { HeaderT } from "../../types/headerT.type";
import "./styles.scss";

export default function Header() {
  const [header, setHeader] = useState<HeaderT[]>([]);

  useEffect(() => {
    // Simulate fetching data (e.g., from an API)
    setHeader(headerMock);
  }, []);

  return (
    <div className="header">
      {header.map((h) => (
        <h1 className="h1" key={`${h.title}-filter`}>
          {h.title}
        </h1>
      ))}
    </div>
  );
}
