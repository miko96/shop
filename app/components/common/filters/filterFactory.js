import DropdownFilter from './DropdownFilter';
import CheckboxFilter from './CheckboxFilter';


function createDropdownFilter() {
  return DropdownFilter;
}

function createCheckboxFilter() {
  return CheckboxFilter;
}

export default function getFilterFactory(type) {
  switch (type) {
    case 'in':
      return createDropdownFilter;
    case 'inn':
      return createCheckboxFilter;
    default:
      return null;
  }
}
