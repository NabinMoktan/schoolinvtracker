// SchoolDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const SchoolDetail = () => {
  const { id } = useParams();
  return <h2>Details for School ID: {id}</h2>;
};

export default SchoolDetail;
