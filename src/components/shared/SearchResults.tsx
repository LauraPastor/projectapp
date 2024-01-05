import { Models } from 'appwrite'
import React from 'react'
import Loader from './Loader'
import GridPostList from './GridPostList'
import { searchPosts } from '@/lib/appwrite/api'

export type SearchResultsProps = {
    isSearchFetching: boolean,
    searchedPosts: any,
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
    if (isSearchFetching) {
        return (
            <div className='flex-center w-full h-full'><Loader /></div>
        )
    }
    if (searchedPosts && searchedPosts.documents.length > 0) {
        return (
            <GridPostList posts={searchPosts.documents} />
        )
    }
    return (
        <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
    )
}

export default SearchResults