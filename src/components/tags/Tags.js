import React, { useEffect } from 'react';
import Tag from './Tag';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice';
import { authorRemoved, clearFilter } from '../../features/filter/filterSlice';

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(state => state.tags);
  const { tags: selectedTags, search, author } = useSelector(state => state.filter);
  const {currentPage} = useSelector(state => state.pagination);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const handleClearFilter = () => {
    dispatch(clearFilter());
  }
  const handleClearAuthor = () => {
    dispatch(authorRemoved());
  }

  return tags?.length > 0 ? (
    <section >
      <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 border-b flex gap-2 overflow-y-auto"
      >
        {tags.map(tag => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
      <div
        className="max-w-7xl mx-auto px-5 py-3 lg:px-0 border-b flex items-center justify-between overflow-y-auto"
      >
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <div className="">Page No: </div>
            <span
              className="inline-flex items-center py-1 px-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-200 dark:text-purple-800"
            >
              {currentPage}
            </span>
          </div>
          {author !== '' && (
            <div className="flex items-center gap-2">
              <div className="">Author: </div>
              <span className="inline-flex items-center py-1 px-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-200 dark:text-purple-800">
                {author}
                <button onClick={handleClearAuthor} type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-300 dark:hover:text-purple-900" >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20">
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
              </span>
            </div>
          )}

        </div>
        {(selectedTags.length > 0 || search !== '' || author !== '') && (
          <button onClick={handleClearFilter} className="rounded-md bg-violet-500 px-4 py-2 text-white text-right">Clear Filter</button>
        )}
      </div>
    </section>
  ) : null;
};

export default Tags;