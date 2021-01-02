import React, {useState} from 'react';
import useSelect from '../../hooks/useSelect'

import styles from './Form.module.css'

const Form = () => {
  const OPCIONES = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertaiment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnologia'}
  ]

  const [category, SelectNews] = useSelect('general',OPCIONES)
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
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

export default Form;
