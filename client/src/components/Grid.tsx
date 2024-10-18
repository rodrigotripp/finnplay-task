import { useState } from 'react';
import { GameComponent } from './Game';
import { type DataType, type Provider, type Game, type Group } from '../types';
import '../styles/grid.css';
import { Filters } from './Filters';
import { filteredData } from '../utils';

const Grid = (data: DataType) => {
  const [selectedFilters, setSelectedFilter] = useState<Group[] | Provider[]>([]);

  return (
    <div className="gamesContainer">
      <div className="grid">
        {filteredData(data, selectedFilters).map((game: Game) =>
          <GameComponent
            key={game.id}
            {...game}
          />)
        }
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
