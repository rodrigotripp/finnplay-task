import { useState } from 'react';
import { GameComponent } from './Game';
import { Game, Provider, type Group } from '../types';
import '../styles/grid.css';
import { Filters } from './Filters';
import { filteredData } from '../utils';
import { DataType } from '../types';

const Grid = (data: DataType) => {
  const [selectedFilters, setSelectedFilter] = useState<Group[] | Provider[]>([]);

  return (
    <div className="gamesContainer">
      <div className="grid">
        {filteredData(data, selectedFilters).map((game: Game) => <GameComponent
          cover={game.cover}
          coverLarge={game.coverLarge}
          date={game.date}
          key={game.id}
          id={game.id}
          name={game.name}
          provider={game.provider} />)}
      </div>
      {
        data ?
          <Filters
            providers={data.providers}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilter}
            groups={data.groups}
          /> :
          null
      }
    </div>
  );
}

export default Grid;
