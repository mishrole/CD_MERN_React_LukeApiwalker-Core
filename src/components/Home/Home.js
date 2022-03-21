import React, { useEffect, useState } from 'react';
import { getSelectedResource } from '../../helpers/getSelectedResource';
import DisplayResource from './DisplayResource/DisplayResource';
import SearchForm from './SearchForm/SearchForm';
import { errorMessage } from '../../utils/swalMessage';

const Home = () => {
  const [resource, setResource] = useState(null);
  const [searched, setSearched] = useState(null);

  useEffect(() => {
   if (searched) {
    getSelectedResource(searched)
    .then(resourceData => {
      setResource({
        type: searched.type,
        data: resourceData
      });
    })
    .catch(err => {
      errorMessage(err.status);
    });
   }
  }, [searched]);

  const handleResourceSearched = ({ resource, id }) => {
    setSearched(
      {
        endpoint: resource.value,
        type: resource.value.slice(0, resource.value.length - 1).substring(resource.value.slice(0, resource.value.length - 1).lastIndexOf('/') + 1),
        id: id.value
      }
    );
  }

  const newSearch = ( newSearch ) => {
    handleResourceSearched(newSearch);
  }

  return (
    <div className="pt-5">
      <SearchForm onNewSearch={ newSearch }/>
      <DisplayResource resource={ resource } />
    </div>
  )
}

export default Home;