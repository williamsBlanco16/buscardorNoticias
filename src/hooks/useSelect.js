import React, {useState} from 'react';

const useSelect = (stateInitial, opciones) => {
  const [state, setState] = useState(stateInitial);

  const selectNews = () => (
    <select className='browser-default'>
      <option value="">Seleccione </option>
      {
        opciones.map(({value, label}) => (
          <option key={value}> {label} </option>
        ))
      }
    </select>
  )
  return [state, selectNews]
}

export default useSelect;
