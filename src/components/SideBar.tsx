import { useEffect, useState } from "react";
import { GenreResponseProps } from "../@types/Genres";
import { api } from "../services/api";
import { Button } from "./Button";

interface SideBarProps {
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => buttonClickCallback(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
