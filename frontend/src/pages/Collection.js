import React, { useContext, useEffect, useState, useCallback } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import './Collection.css';

function Collection() {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products); // Initialize with all products
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle category selection
  const toggleCategory = (e) => {
    const { value, checked } = e.target;
    setCategory(prev => (checked ? [...prev, value] : prev.filter(item => item !== value)));
  };

  // Toggle subcategory selection
  const toggleSubCategory = (e) => {
    const { value, checked } = e.target;
    setSubCategory(prev => (checked ? [...prev, value] : prev.filter(item => item !== value)));
  };

  // Filter products based on category and subcategory
  const applyFilter = useCallback(() => {
    let filtered = products.slice();

    if (showSearch && search) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category));
    }
    
    if (subCategory.length > 0) {
      filtered = filtered.filter(item => subCategory.includes(item.subCategory));
    }
    
    setFilterProducts(filtered);
  }, [category, subCategory, products ,search,showSearch]);

  // Sort filtered products
  const sortProduct = useCallback(() => {
    setFilterProducts(prevFilteredProducts => {
      let sorted = [...prevFilteredProducts];
      switch (sortType) {
        case 'low-high':
          return sorted.sort((a, b) => a.price - b.price);
        case 'high-low':
          return sorted.sort((a, b) => b.price - a.price);
        default:
          return sorted;
      }
    });
  }, [sortType]);

  // Apply filters when category or subcategory changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, applyFilter]);

  // Apply sorting when sort type changes
  useEffect(() => {
    sortProduct();
  }, [sortType, sortProduct]);

  return (
    <div className='collection'>
      <div className='collection-container'>
        <p onClick={() => setShowFilter(!showFilter)}>
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={showFilter ? 'rotate-90' : ''}
            alt="Dropdown Icon"
          />
        </p>

        {/* Category Filter */}
        <div className={showFilter ? '' : 'hidden'}>
          <p>CATEGORIES</p>
          <div className='category-contain'>
            <p>
              <input type='checkbox' value='Men' onChange={toggleCategory} />Men
            </p>
            <p>
              <input type='checkbox' value='Women' onChange={toggleCategory} />Women
            </p>
            <p>
              <input type='checkbox' value='Kids' onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={showFilter ? '' : 'hidden'}>
          <p>TYPE</p>
          <div className='category-contain'>
            <p>
              <input type='checkbox' value='Topwear' onChange={toggleSubCategory} />Topwear
            </p>
            <p>
              <input type='checkbox' value='Bottomwear' onChange={toggleSubCategory} />Bottomwear
            </p>
            <p>
              <input type='checkbox' value='Winterwear' onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Product List */}
      <div className='collection-right-container'>
        <div className='top-dropdown'>
          <Title text1={'All'} text2={'Collections'} />
          <select onChange={(e) => setSortType(e.target.value)} className='dropdown-select'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='product-collection-right'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
