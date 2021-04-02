import React, { Fragment, useRef } from 'react';

import useDataApi from './hooks/api'

function App() {
  const [state, setUrl] = useDataApi('https://hn.algolia.com/api/v1/search?query=redux', { hits: [] })

  const ref = useRef(null)

  return (
    <Fragment>
      <input
        type="text"
        value='redux'
        ref={ref}
      />

      <button type="button" onClick={() =>
        setUrl(`http://hn.algolia.com/api/v1/search?query=${ref.current.target.value}`)
      }>
        Search
      </button>

      { state && state.isError && <div>something wrong!!!</div>  }

      {
        state.isLoading ? (
          <div>is Loading...</div>

        ) : (
          <ul>
            {state.data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )
      }
    </Fragment>
  );
}

export default App;