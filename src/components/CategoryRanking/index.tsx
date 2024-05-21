import React, { useState } from 'react';
import './index.css'

interface TableComponentProps {
  categories: Category[];
  onCategoryClick: (category: string) => void;
}

interface Category {
  name: string;
  ranking: number;
}

// const CategoryRanking: React.FC<{ initialValue: string }> = ({ initialValue }) => {

  const CategoryRanking: React.FC<TableComponentProps> = ({ categories, onCategoryClick }) => {

    return (
      <div>
        <table id="cr">
          <thead>
            <tr>
              <th>Category Options</th>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} onClick={() => onCategoryClick(category.name)}>
                <td>{category.name}</td>
                <td>{category.ranking}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} >
                <input type="text" placeholder="Type Category Here" />
                </td>
            </tr>
          </tbody>

        </table>
      </div>
    );
  
};

export default CategoryRanking;