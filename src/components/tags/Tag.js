import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../../features/filter/filterSlice';
import { pageSelected } from '../../features/pagination/paginationSlice';

const Tag = ({title}) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector(state => state.filter);

  const isSelected = selectedTags.includes(title) ? true : false;

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    dispatch(pageSelected(1));

    }
  }

  const style = isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600";

  return (
    <>
      <div
        className={`${style} px-4 py-1 rounded-full cursor-pointer `}
        onClick={handleSelect}
      >
        {title}
      </div>
    </>
  );
};

export default Tag;