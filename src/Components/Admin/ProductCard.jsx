import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

function ProductCard({ product, handleEditProduct, handleDeleteProduct }) {
  return (
    <div>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden'>
        <div className='aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-48 object-cover'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
            {product.name}
          </h3>
          <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
            {product.category}
          </p>
          <div className='flex justify-between items-center mb-3'>
            <span className='text-lg font-bold text-gray-900 dark:text-white'>
              LKR {(product.price ?? 0).toLocaleString()}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                product.stock > 10
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  : product.stock > 0
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
              }`}
            >
              Stock: {product.stock ?? 0}
            </span>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={() => handleEditProduct(product)}
              className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors'
            >
              <Edit className='h-4 w-4 inline mr-1' />
              Edit
            </button>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className='bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors'
            >
              <Trash2 className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
