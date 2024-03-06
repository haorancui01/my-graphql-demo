import React, { useState } from 'react'
import { gql, useLazyQuery } from "@apollo/client"
import { Link } from "react-router-dom";

const QUERY_SEARCH_COUNTRY = gql`
query Country($code: ID!){
        country(code: $code){
        name
        capital
        emoji
        code
        currency
        }
    }
`;

const Search = () => {

    const [countrySearch, setCountrySearch] = useState("");
    const [ searchCountry, {data, loading, error} ] = useLazyQuery(
        QUERY_SEARCH_COUNTRY, 
        {
            variables: {code: countrySearch.toUpperCase()}
        });

  return (
    <div className='search'>
        <Link to="/">List of Countries</Link>
        <div className='inputs'>
            <input type='text' placeholder='Enter Country Code(e.g. BR)...' 
            onChange={e => {setCountrySearch(e.target.value)}}/>
            <button onClick={
                () => searchCountry({
                    variables: {code: countrySearch.toUpperCase()}
                })}
            >Search Country</button>
        </div>

        <div className='searchCountry'>
            {data && 
            (
                <div className='countryDisplay'>
                    <h1> {data.country.name} </h1>
                    <h1> {data.country.capital} </h1>
                    <h1> {data.country.emoji} </h1>
                    <h1> {data.country.currency} </h1>
                    <h1> {data.country.code} </h1>
                </div>
            )}
        </div>
    </div>
  )
}

export default Search