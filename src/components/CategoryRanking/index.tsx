import React, { useState } from "react";
import "./index.css";

interface TableComponentProps {
  categories: Category[];
  col: string;
  row: string;
  onCategoryClick: (col: string, row: string, category: string) => void;
}

interface Category {
  name: string;
  ranking: number;
}

// const CategoryRanking: React.FC<{ initialValue: string }> = ({ initialValue }) => {

const CategoryRanking: React.FC<TableComponentProps> = ({
  categories,
  col,
  row,
  onCategoryClick,
}) => {
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
            <tr
              key={index}
              onClick={() => onCategoryClick(col, row, category.name)}
            >
              <td className="cursor-pointer">{category.name}</td>
              <td>{category.ranking}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>
              <input type="text" placeholder="Type Category Here" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoryRanking;
