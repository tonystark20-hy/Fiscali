import React, { useState } from 'react';
import './index.css'

const CategoryRanking: React.FC<{ initialValue: string }> = ({ initialValue }) => {

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
            <tr>
              <td>G&A Expense</td>
              <td>1</td>
            </tr>
            <tr>
              <td>R&D Expense</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Tax Expense</td>
              <td>3</td>
            </tr>            
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