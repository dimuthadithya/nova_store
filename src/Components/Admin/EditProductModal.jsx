import React from 'react';
import { X, Save } from 'lucide-react';

function EditProductModal({
  isEditingProduct,
  setIsEditingProduct,
  editProduct,
  setEditProduct,
  categories,
  handleUpdateProduct,
}) {
  if (!isEditingProduct) return null; // Don't render if not active

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
        onClick={() => setIsEditingProduct(false)}
      ></div>

      {/* Modal content */}
      <div className='flex items-center justify-center min-h-screen px-4 py-6'>
        <div className='relative inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl'>
          {/* Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Edit Product
            </h3>
            <button
              onClick={() => setIsEditingProduct(false)}
              className='text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
            >
              <X className='h-6 w-6' />
            </button>
          </div>

          {/* Form */}
          <div className='p-6 space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Product Name *
                </label>
                <input
                  type='text'
                  value={editProduct.name || ''}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter product name'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Category *
                </label>
                <select
                  value={editProduct.category || ''}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, category: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value=''>Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Price (LKR) *
                </label>
                <input
                  type='number'
                  value={editProduct.price || ''}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, price: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='0'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Stock Quantity *
                </label>
                <input
                  type='number'
                  value={editProduct.stock || ''}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, stock: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='0'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Description
              </label>
              <textarea
                value={editProduct.description || ''}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    description: e.target.value,
                  })
                }
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Product description...'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Specifications
              </label>
              <textarea
                value={editProduct.specifications || ''}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    specifications: e.target.value,
                  })
                }
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Technical specifications...'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Status
              </label>
              <select
                value={editProduct.status || 'active'}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, status: e.target.value })
                }
                className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              >
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
                <option value='low_stock'>Low Stock</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className='flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700'>
            <button
              onClick={() => setIsEditingProduct(false)}
              className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateProduct}
              className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2'
            >
              <Save className='h-4 w-4' />
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductModal;
