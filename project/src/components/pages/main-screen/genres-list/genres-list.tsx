import { Link } from 'react-router-dom';
import { Films } from '../../../../types/films';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { changeGenre } from '../../../../store/cinema-data/cinema-data';
import { getActiveGenre } from '../../../../store/selectors';

type GenresListProps = {
  films: Films;
}

function GenresList({films}: GenresListProps): JSX.Element {
  const genre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();
  const genres: Array<string> = films.map((film) => film.genre);
  const uniqueGenres: Array<string> = ['All genres', ...new Set(genres)];

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genreItem) =>
        (
          <li
            className={genreItem === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            key={genreItem}
            onClick={() => {
              dispatch(changeGenre(genreItem));
            }}
          >
            <Link to={`#${genreItem}`} className="catalog__genres-link">{genreItem}</Link>
          </li>
        ),
      )}
    </ul>
  );
}

export default GenresList;
