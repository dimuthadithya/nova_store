import React from 'react';

function Dashboard() {
  return (
    <>
      <div class='max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg'>
        <h2 class='text-2xl font-bold mb-6 text-gray-800'>Add New Product</h2>

        <form id='addProductForm' class='space-y-4'>
          <div>
            <label class='block text-gray-700 font-semibold mb-1' for='name'>
              Product Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              class='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter product name'
              required
            />
          </div>

          <div>
            <label
              class='block text-gray-700 font-semibold mb-1'
              for='category'
            >
              Category
            </label>
            <input
              type='text'
              id='category'
              name='category'
              class='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='mobile / accessory / second-hand'
              required
            />
          </div>

          <div>
            <label class='block text-gray-700 font-semibold mb-1' for='brand'>
              Brand
            </label>
            <input
              type='text'
              id='brand'
              name='brand'
              class='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter brand'
              required
            />
          </div>

          <div>
            <label class='block text-gray-700 font-semibold mb-1' for='price'>
              Price ($)
            </label>
            <input
              type='number'
              id='price'
              name='price'
              class='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter price'
              required
            />
          </div>

          <div>
            <label class='block text-gray-700 font-semibold mb-1' for='stock'>
              Stock Quantity
            </label>
            <input
              type='number'
              id='stock'
              name='stock'
              class='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter stock quantity'
              required
            />
          </div>

          <div>
            <label
              class='block text-gray-700 font-semibold mb-1'
              for='description'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows='4'
              class='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter product description'
              required
            ></textarea>
          </div>

          <div>
            <label class='block text-gray-700 font-semibold mb-1' for='images'>
              Image URLs (comma separated)
            </label>
            <input
              type='text'
              id='images'
              name='images'
              class='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='https://example.com/img1.jpg, https://example.com/img2.jpg'
            />
          </div>

          <div class='mt-6'>
            <button
              type='submit'
              class='w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition'
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
