import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

function EditCategoryModal({
  isEditingCategory,
  setIsEditingCategory,
  editCategory,
  setEditCategory,
  handleUpdateCategory,
}) {
  if (!isEditingCategory) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
        onClick={() => setIsEditingCategory(false)}
      ></div>

      <div className='flex items-center justify-center min-h-screen px-4 py-6'>
        <div className='relative inline-block w-full max-w-lg overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl'>
          <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Edit Category
            </h3>
            <button
              onClick={() => setIsEditingCategory(false)}
              className='text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
            >
              <X className='h-6 w-6' />
            </button>
          </div>

          <div className='p-6 space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Category Name
              </label>
              <input
                type='text'
                value={editCategory.name}
                onChange={(e) =>
                  setEditCategory({ ...editCategory, name: e.target.value })
                }
                className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                Description
              </label>
              <textarea
                value={editCategory.description}
                onChange={(e) =>
                  setEditCategory({
                    ...editCategory,
                    description: e.target.value,
                  })
                }
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          </div>

          <div className='flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700'>
            <button
              onClick={() => setIsEditingCategory(false)}
              className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateCategory}
              className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2'
            >
              <Save className='h-4 w-4' />
              Update Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCategoryModal;
