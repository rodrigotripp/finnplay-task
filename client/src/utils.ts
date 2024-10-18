import { type Group, type DataType, type Provider } from './types/index';

function checkIfGameInFilter(group: Group, id: number) {
  return group.games?.includes(id);
}

export const filteredData = (
  data: DataType,
  selectedFilters: (Group | Provider)[]
) => {
  if (!selectedFilters.length) {
    return data.games;
  }

  return data.games.filter((game) => {
    return selectedFilters.some((filter) => {
      if ('games' in filter) {
        return checkIfGameInFilter(filter, game.id);
      } else {
        return filter.id === game.provider;
      }
    });
  });
};


export const reShapeData = (
  res: DataType
) => {
  const groups = res.groups.map((group) => ({...group, id: group.id + 1000})) 
  const response = {
    games: res.games,
    providers: res.providers,
    groups: groups,
  }
  return response;
}