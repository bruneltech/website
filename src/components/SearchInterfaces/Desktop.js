import * as React from 'react';
import { InstantSearch, SearchBox, Hits, Stats, InfiniteHits, HitsPerPage } from "react-instantsearch-dom"
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    
    apiKey: "xyz", // Be sure to use the search-only-api-key
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    query_by: "postTitle,postCategory",
  }
})
const searchClient = typesenseInstantsearchAdapter.searchClient

export default function SearchInterfaceDesktop() {
  const Hit = ({ hit }) => (
    <a href={hit.page_path}>
      <p>
        {hit.postKind} - {hit.postTitle}
      </p>
    </a>
    
  )

  const [showHits, setShowHits] = React.useState(false)

  return (
      <InstantSearch className="searchMo" searchClient={searchClient} indexName="posts_v1">
        <SearchBox onFocus={()=>setShowHits(true)} onBlur={()=>setShowHits(false)}/>
        {showHits && <Hits hitComponent={Hit} />}
        {/* <Stats /> */}
        {/*<Hits hitComponent={Hit} />*/}
      </InstantSearch>
  )
}
