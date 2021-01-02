import React, {useState} from 'react';
import useSelect from '../../hooks/useSelect'
import PropTypes from 'prop-types';

import styles from './Form.module.css'

const Form = ({saveCategory}) => {
  const OPCIONES = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertaiment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnologia'}
  ]

  const [category, SelectNews] = useSelect('general',OPCIONES)

  const handlerSubmit = e => {
    e.preventDefault()
    saveCategory(category)
  }
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handlerSubmit}>
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNews/>
          <div className="input-field col s12">
            <input 
              type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value='buscar'
            />
          </div>
        </form>
      </div>
      
    </div>
  );
}

Form.propTypes = {
  saveCategory: PropTypes.func.isRequired
}

export default Form;
