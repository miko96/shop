import FilterDropdown from './FilterDropdown';
import FilterCheckboxGroup from './FilterCheckboxGroup';

export default function getFilterControl(type) {
  switch (type) {
    case 'in':
      return FilterDropdown;
    case 'inn':
      return FilterCheckboxGroup;
    default:
      return null;
  }
}
