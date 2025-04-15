import React, { useState, useRef, useEffect } from "react";
import "../styles/products/NewProduct.css";
/*
import { CategoryModal, MeasurementModal } from "./models";*/

const NewProduct = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [variationName, setVariationName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [price, setPrice] = useState('');
  const [bargainThreshold, setBargainThreshold] = useState('');
  const categoryRef = useRef();
  const measurementRef = useRef()
  const [imageFiles, setImageFiles] = useState([null, null, null, null]); // Initialize with 4 empty slots
  const fileInputRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track which slot is selected
  const [variations, setVariations] = useState([]);
  const [finalVariations, setFinalVariations] = useState([]);

  
  /*measurrment option*/
  const [categoriesChosed, setCategoriesChosed] = useState("");
  const [measurementsChosed, setMeasurementsChosed] = useState([]);
  const [measurementsChosedSecond, setMeasurementsChosedSecond] = useState([]);
  
  
  /*tags*/
  
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);
// Handle typing in the input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTags();
    }
  };

  // Convert comma-separated names into individual tags
  const addTagsFromInput = () => {
    const newTags = inputValue
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Add only unique tags
    setTags(prevTags => {
      const allTags = [...prevTags];
      newTags.forEach(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      });
      return allTags;
    });

    setInputValue('');
  };

  // Remove a tag by its value (tag name)
  const removeTag = (tagToRemove) => {
    setTags(prevTags => prevTags.filter(tag => tag !== tagToRemove));
  };
  
  //modal useffect
  
  useEffect(() => {
  if (showModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // Optional cleanup when component unmounts
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [showModal]);

  // Options for the dropdown
  
  // Load measurements from localStorage on initial render
  useEffect(() => {
    const savedMeasurements = JSON.parse(localStorage.getItem('measurements'));
    if (savedMeasurements) {
      setMeasurementsChosed(savedMeasurements);
    }
  }, []);

  // Save measurements to localStorage whenever the list changes
  useEffect(() => {
  if (measurementsChosed > 0) {
    const now = new Date();
    const ttl = 3600000; // 1 hour in milliseconds (change as needed)

    const item = {
      value: measurementsChosed,
      expiry: now.getTime() + ttl,
    };

    localStorage.setItem('measurements', JSON.stringify(item));
  }
}, [measurementsChosed]);
  
  const handleAddCategories = (selectedCategory) => {
   setCategoriesChosed(selectedCategory);
  };
  
  const handleAddMeasurement = (selectedMeasurement) => {
    if (selectedMeasurement && !measurementsChosed.includes(selectedMeasurement)) {
      const updatedMeasurements = [...measurementsChosed, selectedMeasurement];
      setMeasurementsChosed(updatedMeasurements);
    }
    setSelectedMeasurement('');
  };
  const handleAddMeasurementSecond = () => {
    if (measurementsChosedSecond) {
        measurementsChosed.forEach(value => {
            if (!measurementsChosedSecond.includes(value)) {
                measurementsChosedSecond.push(value);
            }
        });
    } else {
      setMeasurementsChosedSecond([...measurementsChosed])
    }
    
    setShowMeasurements(false);
    setMeasurementsChosed([]);
};
   /* */
  
   const handleRemoveMeasurement = (measurementDelete) => {
    const updatedMeasurements = measurementsChosed.filter(item => item !== measurementDelete);
    setMeasurementsChosed(updatedMeasurements);
  };
  const handleRemoveMeasurementSecond=(measurementDelete)=>{
    const updatedMeasurements = measurementsChosedSecond.filter(item => item !== measurementDelete);
    setMeasurementsChosedSecond(updatedMeasurements);
  }
  

  const categories = ["Rice", "Beans", "Yam", "Cassava", "Maize"];
  const measurements = ["Gram (g)", "Kilogram (kg)", "Pound (lbs)", "Cup", "Modu"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategories(false);
      }
      if (measurementRef.current && !measurementRef.current.contains(event.target)) {
        setShowMeasurements(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  /*image selector*/
  
  // Trigger file input when an image slot is clicked
  const handleImageClick = (index) => {
    setSelectedIndex(index); // Set the selected slot index
    fileInputRef.current.click(); // Trigger file input
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file && selectedIndex !== null) {
      const updatedFiles = [...imageFiles];
      updatedFiles[selectedIndex] = file; // Set the selected file for the specific slot
      setImageFiles(updatedFiles);
    }
  };
  /*modal screen */
   

  const handleAddVariationShow = () => {
    setShowModal(true); // This will show the modal when the button is clicked
  };

  const closeModal = () => {
    setShowModal(false); // This will hide the modal when closed
  };

  const handleAddVariation = () => {
    if (!variationName || !quantity || !price) return; // Optional: basic validation

    const newVariation = {
      name: `${quantity}${measurement} ${variationName}`,
      quantity,
      price,
      bargainThreshold: bargainThreshold || "Nil",
    };

    setVariations([...variations, newVariation]);

    // Clear fields
    setVariationName("");
    setQuantity("");
    setMeasurement("");
    setPrice("");
    setBargainThreshold("");
  };

  return (
    <div className="container_newproduct">
      <div className="content_newproduct flex flex-col md:flex-row gap-6">
        {/* LEFT SECTION */}
        <div className="form-section_newproduct flex-1">
          <div className="product-container_newproduct">
            <p className="section-title_newproduct">Create Product</p>

            <div className="input-group_newproduct">
              <label>Product Name</label>
              <input type="text" placeholder="Enter Product Name" />
            </div>

            {/* Category Dropdown */}
            <div className="input-group_newproduct" ref={categoryRef}>
              <label>Product Category</label>
              <div
                className="category-dropdown"
                onClick={() => setShowCategories(!showCategories)}
              >
                { categoriesChosed === ""
                  ? <p>Select Product Category</p>
                : categoriesChosed}
                
              </div>
              {showCategories && (
                <div className={showCategories ? "show" :  "category-dropdown-container"}>
                  <div className="category-dropdown-scroll">
                    <h2 className="text-black font-semibold text-base mb-2">Categories</h2>
                    {categories.map((item, index) => (
                      <div
                        key={index}
                        className="category-item"
                        onClick={()=>handleAddCategories(item)}
                      >
                      <p className="selectedunit">{item} </p>
                  </div>
                    
                   ) )}
                  </div>
                </div>
              )}
            </div>

            {/* Measurement Dropdown */}
            <div className="input-group_newproduct" ref={measurementRef}>
              <label>Measurement Unit</label>
              <div
                className="measurement-dropdown"
                onClick={() => setShowMeasurements(!showMeasurements)}
              >
                {measurementsChosedSecond.length > 0
                  ? measurementsChosedSecond.map((unit) => (
                  <p>{unit},</p>
                    ))
                : <p>Select Measurement</p>}
              </div>
              {showMeasurements && (
                <div className={showMeasurements ? "show" :  "category-dropdown-container"}>
                  <div className="measurement-dropdown-scroll">
                    {measurements.map((item, index) => (
                      <div
                        key={index}
                        className="measurement-item"
                        
                      >
                      {measurementsChosed.includes(item) ? (
                      <p className="selectedunit">{item} <img onClick={()=>handleRemoveMeasurement(item)} src="/close.svg"/></p>
                    ):<p onClick={()=>handleAddMeasurement(item)}>{item}</p> }
                      </div>
                    ))}
                    <button  onClick={handleAddMeasurementSecond} className="add-measurement-button">
                      Add Measurement
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="selected-units_newproduct">
              {measurementsChosedSecond.map((unit) => (
                <span key={unit} className="unit-tag_newproduct">
                  {unit} <img src="/close.svg" onClick={()=>handleRemoveMeasurementSecond(unit)} className="remove_newproduct"/>
                </span>
              ))}
            </div>

            <div className="input-group_newproduct">
              <label>Product Description</label>
              <textarea placeholder="Enter Product Description"></textarea>
            </div>

      {/* Variation Body Div */}
      <div className="input-group_newproduct">
        <label>Product Variation</label>
        <button className="add-btn_newproduct" onClick={handleAddVariationShow}>+ Add Variation</button>
      </div>

      {/* Modal */}
      {showModal && (
  <>
      <div className="modal-backdrop" />
      <div className="modal">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h2>Add Variation</h2>
            <img src="/close.svg" onClick={closeModal} style={{ cursor: 'pointer' }} />
          </div>

          {/* Variation Section */}
          <div className="variation-section">
            <div className="variation-inputs">
              <label>Variation</label>
              <input
                type="text"
                placeholder="Name"
                value={variationName}
                onChange={(e) => setVariationName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="variation-inputs">
              
              <select
                value={measurement}
                onChange={(e) => setMeasurement(e.target.value)}
              >
                <option value="">Measurement</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="lb">lb</option>
                <option value="liters">liters</option>
              </select>
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Bargain Threshold"
                value={bargainThreshold}
                onChange={(e) => setBargainThreshold(e.target.value)}
              />
            </div>
          </div>

          {/* Add Variation Button */}
          <div className="add-variation" onClick={handleAddVariation}>+ Add variation</div>

          {/* Table */}
          <div className="table-scroll-wrapper">
            <table className="variationproduct-table_newproduct">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Selling Price</th>
                  <th>Bargain Threshold</th>
                </tr>
              </thead>
              <tbody>
                {variations.map((variation, index) => (
                  <tr className="tableandmodalrow" key={index}>
                    <td className="imagetableandnameandmodal">
                      <img src="bag-icon.png" className="icon_newproduct" alt="Bag Icon" />
                      {variation.name}
                    </td>
                    <td>{variation.quantity}</td>
                    <td>${variation.price}</td>
                    <td>{variation.bargainThreshold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Save Button */}
<button
  className="save-btn"
  onClick={() => {
    setFinalVariations([...finalVariations, ...variations]);
    setVariations([]); // Optional: Clear temp variations after saving
    closeModal(); // Optional: Close modal if needed
  }}
>
  Save
</button>
        </div>
      </div>
    </>
      )}

            <table className="product-table_newproduct">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Selling Price</th>
                  <th>Bargain Threshold</th>
                </tr>
              </thead>
              <tbody>
        
{finalVariations.map((variation, index) => (
  <tr className="tableandmodalrow" key={index}>
    <td  imagetableandnameandmodal>
      <img src="bag-icon.png" className="icon_newproduct" alt="Bag Icon" /> {variation.name}
    </td>
    <td>{variation.quantity}</td>
    <td>${variation.price}</td>
    <td>{variation.bargainThreshold}</td>
  </tr>
))}
              </tbody>
            </table>

            <p className="optional_newproduct">Optional</p>

            <div className="input-group_newproduct">
              <label>Promo</label>
              <button className="add-btn_newproduct">+ Add Promo</button>
            </div>

            <div className="input-group_newproduct">
              <label>Special Tags</label>
                <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
                  placeholder="Enter tags" />
            </div>

            <button onClick={addTagsFromInput} className="add-tag_newproduct">+ Add Tag</button>
            <div className="selected-tags_newproduct">
              {tags.map((tag) => (
                <span key={tag} className="unit-tag_newproduct ">{tag} <img onClick={()=>removeTag(tag)} src="/close.svg"/></span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
<div className="right-section_newproduct flex flex-col gap-4 items-center">
  {/* Image Grid */}
  <div className="image-grid_newproduct flex flex-wrap gap-4 justify-center">
    {imageFiles.map((file, index) => {
      const imageUrl = file ? URL.createObjectURL(file) : null; // Get the image URL if file exists

      return (
        <div
          key={index}
          className="image-slot_newproduct"
          onClick={() => handleImageClick(index)} // Click the slot to select a file
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`Product ${index + 1}`}
              className="product-image_newproduct"
            />
          ) : (
            <div className="no-image-placeholder_newproduct">
              <p>Click here to select</p>
            </div>
          )}
        </div>
      );
    })}
  </div>

  {/* Hidden input for file selection */}
  <input
    type="file"
    ref={fileInputRef}
    style={{ display: 'none' }}
    onChange={handleFileChange}
    accept="image/*"
  />
ff
  {/* Button Group */}
  <div className="button-group_newproduct flex gap-4">
    <button className="save-draft_newproduct">Save as draft</button>
    <button className="preview_newproduct">Preview</button>
  </div>
</div>
</div>
</div>
  );
};

export default NewProduct;
