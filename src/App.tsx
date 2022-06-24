import { useCallback, useMemo, useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import "./styles/home.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, []);

  return (
    <div className="wrapper">
      <SideBar
        selectedGenreId={selectedGenreId}
        buttonClickCallback={handleClickButton}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
