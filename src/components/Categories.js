import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.categories);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h1>Categories</h1>
      <button type="button" onClick={handleCheckStatus}>Check status</button>
      <p>
        {status}
      </p>
    </div>
  );
}

export default Categories;
