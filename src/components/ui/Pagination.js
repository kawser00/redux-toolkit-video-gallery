import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageSelected, totalItemSelected } from '../../features/pagination/paginationSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const { currentPage, totalItemShow } = useSelector(state => state.pagination);
    const { totalVideoCount } = useSelector(state => state.videos);
    const totalPaginationCount = Math.ceil(totalVideoCount / totalItemShow);

    const handleItemShow = (count) => {
        dispatch(totalItemSelected(count));
        dispatch(pageSelected(1));
    }

    const handlePagination = (pageNo) => {
        dispatch(pageSelected(pageNo));
    }

    const handlePrevButton = () => {
        currentPage > 1 && dispatch(pageSelected(currentPage - 1));
    }
    const handleNextButton = () => {
        currentPage < totalPaginationCount && dispatch(pageSelected(currentPage + 1));
    }

    return (
        <>
            {totalPaginationCount > 1 && (
                <section className="flex gap-5 items-center justify-end pt-12 max-w-7xl mx-auto">
                    <form>
                        <select value={totalItemShow} onChange={(e) => handleItemShow(e.target.value)} className="px-4 py-1 rounded-md h-full border border-blue-600">
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </form>
                    <div
                        className="px-5 py-6 lg:px-0 flex gap-2 justify-end"
                    >
                        {currentPage > 1 && (
                            <button
                                onClick={handlePrevButton}
                                className={`px-4 py-1 rounded-full cursor-pointer bg-violet-600 text-white`}
                            >
                                Prev
                            </button>
                        )}
                        {Array.from(Array(totalPaginationCount).keys()).map(count =>
                            <div
                                key={count}
                                onClick={() => handlePagination(count + 1)}
                                className={`px-4 py-1 rounded-full cursor-pointer ${currentPage === count + 1 ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}
                            >
                                {count + 1}
                            </div>
                        )}
                        {currentPage < totalPaginationCount && (
                            <button
                                onClick={handleNextButton}
                                className={`px-4 py-1 rounded-full cursor-pointer bg-violet-600 text-white`}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default Pagination;