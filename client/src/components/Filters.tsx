import { type Provider, type Group } from '../types';
import '../styles/filters.css'

type props = {
  providers: Provider[]
  groups: Group[]
  selectedFilters: (Group | Provider)[];
  setSelectedFilters: (p: (Group | Provider)[]) => void;
}

export const Filters = ({
  providers,
  groups,
  selectedFilters,
  setSelectedFilters
}: props) => {


  const handleClick = (arg: Provider | Group) => {
    selectedFilters && !selectedFilters?.find((selectedFilter) => selectedFilter.id === arg.id)
      ? setSelectedFilters([...selectedFilters, arg])
      : setSelectedFilters([...selectedFilters.filter((el) => el.id !== arg.id)]) 
  }

  type filterProps = Group | Provider;

  const Filter = (clickedFilter: filterProps) => {
    return (
      <li
        className={`menu-item ${!!selectedFilters?.find((selectedFilter) => selectedFilter.id === clickedFilter.id) ? 'active' : ''}`}>
        <button
          data-id={clickedFilter.id}
          id={String(clickedFilter.id)}
          onClick={() => handleClick(clickedFilter)}>
          {clickedFilter.name}
        </button>
      </li>
    )
  }

  return (
    <div className='filtersContainer'>
      <div className='providers'>
        <h2>providers</h2>
        <ul className="menu">
          {providers.map((provider) => <Filter key={provider.id} {...provider} />)}
        </ul>
      </div>
      <div className='groups'>
        <h2>groups</h2>
        <ul className="menu">
          {groups.map((group) => <Filter key={group.id} {...group} />)}
        </ul>
      </div>
    </div>
  )
}