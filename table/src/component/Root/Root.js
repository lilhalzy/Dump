// import React from 'react';
import { format, parse } from 'date-fns';

import data from './data';

import useTable from '#root/hooks/useTable';

const COLUMNS = [
  {
    accessor: 'id',
    label: 'ID',
  },
  {
    accessor: 'name',
    label: 'Name',
  },
  {
    accessor: ({ dateOfBirth }) => (
      <span>
        {format(parse(dateOfBirth, 'yyyy-MM-dd', new Date()), 'do MMMM yyyy')}
        <button>Edit</button>
      </span>
    ),
    label: 'Date of Birth',
  },
  {
    accessor: 'favouriteFood',
    label: 'Favourite Food',
  },
];

const Root = () => {
  const { headers, rows } = useTable({ columns: COLUMNS, data: data });

  return (
    <div className='centered'>
      <table>
        <thead>
          <tr>
            {headers.map(({ label }, index) => (
              <th key={index}>{label}</th>
            ))}
            {/* <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Favourite Food</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {data.map(({ dateOfBirth, favoriteFood, id, name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                {format(
                  parse(dateOfBirth, 'yyyy-MM-dd', new Date()),
                  'do MMMM yyyy'
                )}
              </td>
              <td>{favoriteFood}</td>
            </tr>
          ))} */}
          {rows.map((row, index) => (
            <tr key={index}>
              {row.cells.map((cell, index) => (
                <td key={index}>{cell.renderedValue}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Root;
