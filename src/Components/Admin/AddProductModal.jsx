import React from 'react';
import { X, Upload, Save } from 'lucide-react';

function AddProductModal({
  isAddingProduct,
  setIsAddingProduct,
  newProduct,
  setNewProduct,
  categories,
  handleAddProduct,
}) {
  if (!isAddingProduct) return null; // 👉 cleaner early return

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Background Overlay */}
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
        onClick={() => setIsAddingProduct(false)}
      ></div>

      {/* Modal Content */}
      <div className='flex items-center justify-center min-h-screen px-4 py-6'>
        <div className='relative inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl'>
          {/* Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Add New Product
            </h3>
            <button
              onClick={() => setIsAddingProduct(false)}
              className='text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
            >
              <X className='h-6 w-6' />
            </button>
          </div>

          {/* Form */}
          <div className='p-6 space-y-4'>
            {/* Name + Category */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Product Name *
                </label>
                <input
                  type='text'
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter product name'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Category *
                </label>
                <select
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                >
                  <option value=''>Select category</option>
                  {categories.map((category, i) => (
                    <option key={i} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price + Stock */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Price (LKR) *
                </label>
                <input
                  type='number'
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='0'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Stock Quantity *
                </label>
                <input
                  type='number'
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: e.target.value })
                  }
                  className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='0'
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Description
              </label>
              <textarea
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Product description...'
              />
            </div>

            {/* Specifications */}
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Specifications
              </label>
              <textarea
                value={newProduct.specifications}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    specifications: e.target.value,
                  })
                }
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Technical specifications...'
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Product Images
              </label>
              <div className='border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center'>
                <Upload className='h-8 w-8 mx-auto text-gray-400 mb-2' />
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Click to upload or drag and drop images here
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className='flex justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700'>
            <button
              onClick={() => setIsAddingProduct(false)}
              className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
            >
              Cancel
            </button>
            <button
              onClick={handleAddProduct}
              className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2'
            >
              <Save className='h-4 w-4' />
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
