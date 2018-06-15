const ffs = [
  {
    column: 'ProductItemId',
    operator: 'in',
    value: ['1', '2', '3'],
  },
  {
    column: 'productKey',
    operator: 'eq',
    value: 'Key1',
  },
  // {
  //   column: 'Price',
  //   operator: 'eq',
  //   value: 'Key1',
  // },
];


// function formatGroup(fgroup) {
//   const { column } = fgroup[0];
//   const f = fgroup.map(f => {

//   })

// }

// function formatValue({ operator, value }) {
//   const values = Array.isArray(value) ? value : [value];
//   return values.map(v => `${operator}:${v}`).join(',');
// }

// function format(filters) {
//   const formated = {};
//   ffs.forEach((f) => {
//     let value = formated[f.column];
//     value = (value || '') && value.concat(',');
//     value = value.concat(formatValue(f));
//     formated[f.column] = value;
//   });
//   return formated;
// }

function formatValue({ column, operator, value }) {
  return `${column}:${operator}:[${value}]`;
}

function format(filters) {
  return ffs.map(formatValue).join(',');
  // const formated = {};
  // ffs.forEach((f) => {
  //   let value = formated[f.column];
  //   value = (value || '') && value.concat(',');
  //   value = value.concat(formatValue(f));
  //   formated[f.column] = value;
  // });
  // return Object.values(formated);
}


// ?Name=eq:p1,eq:p2,eq:p3&Price=lte:2,gte:1
// ?filters=name:eq:1,price:in:[2,3],

const FILTERS = [
  {
    filterKey: 'key',
    filterName: 'color',
    filterType: 'in',
    value: null,
    options: [
      { name: 'okey1', value: 'oval1' },
      { name: 'okey2', value: 'oval2' },
    ],
  },
  {
    filterKey: 'key2',
    filterName: 'size',
    filterType: 'inn',
    value: null,
    options: [
      { name: 'okey3', value: 'oval3' },
      { name: 'okey4', value: 'oval4' },
    ],
  },
  {
    filterKey: 'key3',
    filterName: 'price',
    filterType: 'inn',
    value: null,
    options: [
      { name: 'okey5', value: 'oval5' },
      { name: 'okey6', value: 'oval6' },
    ],
  },
];

export default format;
