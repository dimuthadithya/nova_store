import React, { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Package,
  Edit,
  Trash2,
  Search,
  Filter,
  Upload,
  Save,
  X,
  Grid,
  List,
  Eye,
  BarChart3,
  Users,
  ShoppingBag,
  Settings,
  LogOut,
  User,
  Bell,
  ChevronDown
} from 'lucide-react';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('products');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // User information - this would typically come from authentication context
  const [userInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@novastore.com',
    role: 'Admin',
    avatar: 'https://via.placeholder.com/40/4F46E5/FFFFFF?text=JD',
    lastLogin: new Date().toLocaleDateString()
  });

  // Dropdown states
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mock data for products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'APPLE',
      price: 299999,
      stock: 15,
      image: 'https://via.placeholder.com/150',
      status: 'active'
    },
    {
      id: 2,
      name: 'JBL Charge 5',
      category: 'Speakers',
      price: 25000,
      stock: 8,
      image: 'https://via.placeholder.com/150',
      status: 'active'
    },
    {
      id: 3,
      name: 'Samsung 4K Monitor',
      category: 'MONITORS',
      price: 85000,
      stock: 3,
      image: 'https://via.placeholder.com/150',
      status: 'low_stock'
    }
  ]);

  const categories = [
    'PBA Systems',
    'APPLE',
    'ALL in One Systems',
    'Desktop Workstations',
    'TELEVISION (TV)',
    'Console & Handheld Gaming',
    'Graphics Tablets',
    'Laptop',
    'Power Banks, Laptop Bags, Cooler & Monitor Arms',
    'Processor',
    'Motherboards',
    'Memory (RAM)',
    'Graphics Card',
    'POWER SUPPLY, UPS & SURGE PROTECTORS',
    'Cooling & Lighting',
    'STORAGE & NAS',
    'CASINGS',
    'MONITORS',
    'Speakers, Headsets & Ear-Buds',
    'Keyboard,Mouse & Gamepad (Controller)',
    'Printers',
    'Gaming Chairs',
    'Cables & Connectors',
    'External Storage',
    'Live Streaming & Recording',
    'Expansion Cards & Networking',
    'OS & Software',
    'Projectors'
  ];

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    specifications: '',
    images: [],
    status: 'active'
  });

  const [editProduct, setEditProduct] = useState({
    id: null,
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    specifications: '',
    images: [],
    status: 'active'
  });

  const handleAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.category &&
      newProduct.price &&
      newProduct.stock
    ) {
      const product = {
        id: products.length + 1,
        ...newProduct,
        price: parseInt(newProduct.price),
        stock: parseInt(newProduct.stock)
      };
      setProducts([...products, product]);
      setNewProduct({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        specifications: '',
        images: [],
        status: 'active'
      });
      setIsAddingProduct(false);
    }
  };

  const handleEditProduct = (product) => {
    setEditProduct({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      description: product.description || '',
      specifications: product.specifications || '',
      images: product.images || [],
      status: product.status
    });
    setEditingProductId(product.id);
    setIsEditingProduct(true);
  };

  const handleUpdateProduct = () => {
    if (
      editProduct.name &&
      editProduct.category &&
      editProduct.price &&
      editProduct.stock
    ) {
      const updatedProducts = products.map((product) =>
        product.id === editProduct.id
          ? {
              ...product,
              name: editProduct.name,
              category: editProduct.category,
              price: parseInt(editProduct.price),
              stock: parseInt(editProduct.stock),
              description: editProduct.description,
              specifications: editProduct.specifications,
              status: editProduct.status
            }
          : product
      );
      setProducts(updatedProducts);
      setEditProduct({
        id: null,
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        specifications: '',
        images: [],
        status: 'active'
      });
      setIsEditingProduct(false);
      setEditingProductId(null);
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleSignOut = () => {
    // Here you would typically clear authentication tokens, user data, etc.
    console.log('Signing out...');
    // For now, we'll just show an alert
    if (window.confirm('Are you sure you want to sign out?')) {
      // Clear any stored auth tokens
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('userSession');

      // Redirect to login page or refresh
      window.location.href = '/login'; // Or use your routing method
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>
            {title}
          </p>
          <p className='text-2xl font-bold text-gray-900 dark:text-white'>
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className='h-6 w-6 text-white' />
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
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
            LKR {product.price.toLocaleString()}
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
            Stock: {product.stock}
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
  );

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* Sidebar */}
      <div className='fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700'>
        <div className='flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700'>
          <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
            Admin Panel
          </h1>
        </div>
        <nav className='mt-8'>
          <div className='px-4 space-y-2'>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <BarChart3 className='mr-3 h-5 w-5' />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'products'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Package className='mr-3 h-5 w-5' />
              Products
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'categories'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Grid className='mr-3 h-5 w-5' />
              Categories
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'settings'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Settings className='mr-3 h-5 w-5' />
              Settings
            </button>

            {/* Divider */}
            <div className='border-t border-gray-200 dark:border-gray-700 my-4'></div>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className='w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
            >
              <LogOut className='mr-3 h-5 w-5' />
              Sign Out
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className='ml-64 flex-1'>
        <header className='bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              {activeTab === 'products' && 'Product Management'}
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'categories' && 'Category Management'}
              {activeTab === 'settings' && 'Settings'}
            </h2>
            <div className='flex items-center space-x-4'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search...'
                  className='pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              {/* Notifications */}
              <button className='relative p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors'>
                <Bell className='h-6 w-6' />
                <span className='absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-gray-800'></span>
              </button>

              {/* User Dropdown */}
              <div className='relative' ref={dropdownRef}>
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className='flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg px-4 py-2 transition-colors'
                >
                  <img
                    src={userInfo.avatar}
                    alt={userInfo.name}
                    className='h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800'
                  />
                  <div className='hidden md:block text-left'>
                    <p className='text-sm font-medium text-gray-900 dark:text-white'>
                      {userInfo.name}
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      {userInfo.role}
                    </p>
                  </div>
                  <ChevronDown className='h-4 w-4 text-gray-400' />
                </button>

                {/* Dropdown Menu */}
                {showUserDropdown && (
                  <div className='absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50'>
                    {/* User Info Section */}
                    <div className='px-4 py-3 border-b border-gray-200 dark:border-gray-700'>
                      <div className='flex items-center space-x-3'>
                        <img
                          src={userInfo.avatar}
                          alt={userInfo.name}
                          className='h-12 w-12 rounded-full ring-2 ring-blue-500'
                        />
                        <div className='flex-1'>
                          <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                            {userInfo.name}
                          </p>
                          <p className='text-sm text-gray-500 dark:text-gray-400'>
                            {userInfo.email}
                          </p>
                          <div className='flex items-center mt-1'>
                            <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                              {userInfo.role}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='mt-3 text-xs text-gray-500 dark:text-gray-400'>
                        <p>Last login: {userInfo.lastLogin}</p>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className='py-2'>
                      <button className='flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
                        <User className='h-4 w-4 mr-3' />
                        Profile Settings
                      </button>
                      <button className='flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
                        <Settings className='h-4 w-4 mr-3' />
                        Preferences
                      </button>
                      <div className='border-t border-gray-200 dark:border-gray-700 my-1'></div>
                      <button
                        onClick={handleSignOut}
                        className='flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors'
                      >
                        <LogOut className='h-4 w-4 mr-3' />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className='p-6'>
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                <StatCard
                  title='Total Products'
                  value={products.length}
                  icon={Package}
                  color='bg-blue-500'
                />
                <StatCard
                  title='Active Products'
                  value={products.filter((p) => p.status === 'active').length}
                  icon={Eye}
                  color='bg-green-500'
                />
                <StatCard
                  title='Low Stock Items'
                  value={products.filter((p) => p.stock < 5).length}
                  icon={ShoppingBag}
                  color='bg-yellow-500'
                />
                <StatCard
                  title='Categories'
                  value={categories.length}
                  icon={Grid}
                  color='bg-purple-500'
                />
              </div>

              <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  Recent Activity
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  No recent activity to display.
                </p>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div>
              {/* Product Controls */}
              <div className='mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                    <input
                      type='text'
                      placeholder='Search products...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className='pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  >
                    <option value='all'>All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() =>
                      setViewMode(viewMode === 'grid' ? 'list' : 'grid')
                    }
                    className='p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
                  >
                    {viewMode === 'grid' ? (
                      <List className='h-5 w-5' />
                    ) : (
                      <Grid className='h-5 w-5' />
                    )}
                  </button>
                  <button
                    onClick={() => setIsAddingProduct(true)}
                    className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2'
                  >
                    <Plus className='h-5 w-5' />
                    Add Product
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div
                className={`grid ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    : 'grid-cols-1'
                } gap-6`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Categories Tab */}
          {activeTab === 'categories' && (
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Product Categories
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg'
                  >
                    <span className='text-gray-900 dark:text-white'>
                      {category}
                    </span>
                    <div className='flex gap-2'>
                      <button className='text-blue-600 hover:text-blue-700'>
                        <Edit className='h-4 w-4' />
                      </button>
                      <button className='text-red-600 hover:text-red-700'>
                        <Trash2 className='h-4 w-4' />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Settings
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Settings panel coming soon...
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Add Product Modal */}
      {isAddingProduct && (
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            onClick={() => setIsAddingProduct(false)}
          ></div>

          <div className='flex items-center justify-center min-h-screen px-4 py-6'>
            <div className='relative inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl'>
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

              <div className='p-6 space-y-4'>
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
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                      Category *
                    </label>
                    <select
                      value={newProduct.category}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          category: e.target.value
                        })
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
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
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
                      value={newProduct.stock}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, stock: e.target.value })
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
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value
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
                    value={newProduct.specifications}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        specifications: e.target.value
                      })
                    }
                    rows={3}
                    className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Technical specifications...'
                  />
                </div>

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
      )}

      {/* Edit Product Modal */}
      {isEditingProduct && (
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            onClick={() => setIsEditingProduct(false)}
          ></div>

          <div className='flex items-center justify-center min-h-screen px-4 py-6'>
            <div className='relative inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl'>
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

              <div className='p-6 space-y-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                      Product Name *
                    </label>
                    <input
                      type='text'
                      value={editProduct.name}
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
                      value={editProduct.category}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          category: e.target.value
                        })
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
                      value={editProduct.price}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          price: e.target.value
                        })
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
                      value={editProduct.stock}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          stock: e.target.value
                        })
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
                    value={editProduct.description}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        description: e.target.value
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
                    value={editProduct.specifications}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        specifications: e.target.value
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
                    value={editProduct.status}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        status: e.target.value
                      })
                    }
                    className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  >
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                    <option value='low_stock'>Low Stock</option>
                  </select>
                </div>
              </div>

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
      )}
    </div>
  );
}

export default AdminDashboard;
