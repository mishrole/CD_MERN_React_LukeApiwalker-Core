import React, { useEffect, useReducer, useState } from 'react';
import { getResources } from '../../../helpers/getResources';
import { errorMessage } from './../../../utils/swalMessage';

const getLSResources = () => localStorage.getItem("resources") === null ? [] : JSON.parse(localStorage.getItem("resources"));

const reducer = (state, action) => {
  if (action.type === 'reset') {
    return initialState;
  }

  return  {
    ...state,
    [action.type]: action.payload
  };
}

const initialState = {
  resource: {
    value: '',
    error: null
  },
  id: {
    value: '',
    error: null
  }
}

const SearchForm = ({ onNewSearch }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [resources, setResources] = useState(getLSResources());

  useEffect(() => {
    if (resources && resources.length === 0) {
      getResources()
      .then(resourcesData => {
        setResources(resourcesData);
        localStorage.setItem("resources", JSON.stringify(resourcesData));
      });
    }
  }, [resources]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let isValid = false;

    if (type === 'number') {
      if (value.trim().length > 0 && Number(value.trim()) > 0) {
        isValid = true;
      }
    } else {
      if (value.trim().length > 0) {
        isValid = true;
      }
    }

    dispatch(
      {
        type: name,
        payload: {
          value: value,
          error: {
            result: isValid ? 'is-valid' : 'is-invalid',
            message: isValid ? 'Looks good!' : `Please provide a valid ${name}`
          }
        }
      }
    );
  }

  // const clearForm = () => {
  //   dispatch({ type: 'reset' });
  // }

  const formIsValid = (e) => {
    // Floating labels
    const inputs = Array.from(e.target.children)
    .map(item => Array.from(item.children)
      .map(item => Array.from(item.children))
      .flat()
      .filter(item => item.localName === 'input' || item.localName === 'select')
    )
    .filter(item => item.length > 0)
    .flat();

    const emptyInputs = inputs.filter(item => item.value.length === 0);
    const invalidInputs = inputs.filter(item => item.classList.contains('is-invalid'));

    if (emptyInputs.length > 0 || invalidInputs.length > 0) {
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid(e)) {
      onNewSearch(state);
      // clearForm();
    } else {
      errorMessage("There are fields that require your attention");
    }
  }

  return (
    <div className="container">
      <form className="row" onSubmit={ handleSubmit }>
        <div className="col-8 col-md-6">
          <div className="form-floating mb-3">
          <select name="resource" className={`form-select text-capitalize ${state.resource.error?.result}`} defaultValue="" onChange={ handleChange }>
            <option value="">Select a resource</option>
            {
              resources.map((resource, index) => {
                return (
                  <option key={`resource-${index}`} value={resource.endpoint}>{resource.name}</option>
                )
              })
            }
          </select>
          <label>Resource</label>
          {
            state.resource.error !== null && (<p className={`${state.resource.error?.result === 'is-valid' ? 'valid-feedback' : 'invalid-feedback' }`}>{state.resource.error?.message}</p>)
          }
          </div>
        </div>

        <div className="col-4 col-md-3">
          <div className="form-floating mb-3">
            <input type="number" name="id" className={`form-control ${state.id.error?.result}`} onChange={ handleChange }/>
            <label>Id</label>
          {
            state.id.error !== null && (<p className={`${state.id.error?.result === 'is-valid' ? 'valid-feedback' : 'invalid-feedback' }`}>{state.id.error?.message}</p>)
          }
          </div>
        </div>

        <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;