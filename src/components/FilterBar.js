import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter, setCategoryFilter, setKeywordFilter } from '../features/filtersSlice';

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  return (
    <div className="filter-card">
      <h3>Filter Tugas</h3>
      <input
        type="text"
        placeholder="Cari berdasarkan kata kunci..."
        value={filters.keyword}
        onChange={e => dispatch(setKeywordFilter(e.target.value))}
      />
      <select value={filters.status} onChange={e => dispatch(setStatusFilter(e.target.value))}>
        <option value="all">Semua Status</option>
        <option value="completed">Selesai</option>
        <option value="current">Belum Selesai</option>
      </select>
      <select value={filters.category} onChange={e => dispatch(setCategoryFilter(e.target.value))}>
        <option value="all">Semua Kategori</option>
        <option value="kerja">Kerja</option>
        <option value="kuliah">Kuliah</option>
        <option value="pribadi">Pribadi</option>
      </select>
    </div>
  );
};

export default FilterBar;