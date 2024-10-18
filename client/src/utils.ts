import { type Group, type DataType, type Provider } from './types/index';

function checkIfGameInGroup(group: Group, id: number) {
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
        return checkIfGameInGroup(filter, game.id);
      } else {
        return filter.id === game.provider;
      }
    });
  });
};