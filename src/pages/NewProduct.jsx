import React, { useState, useRef, useEffect } from "react";
import "../styles/products/NewProduct.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OrderNav from "../components/OrderNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
/*
import { CategoryModal, MeasurementModal } from "./models";*/

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <input
    onClick={onClick}
    ref={ref}
    className="inputdate"
    value={value}
    placeholder="StartDate"
    readOnly />
))
const CustomInputEnd = React.forwardRef(({ value, onClick }, ref) => (
  <input
    onClick={onClick}
    ref={ref}
    className="inputdate"
    value={value}
    placeholder="EndDate"
    readOnly />
))

const NewProduct = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalPromo, setShowModalPromo] = useState(false);
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

  const [selectStartDate, setSelectStartDate] = useState(null)
  const [selectEndDate, setSelectEndDate] = useState(null)
  const StartDateRef = useRef(null)
  const EndDateRef = useRef(null)


  const openStartImageClick = () => {
    StartDateRef.current?.setOpen(true);
  }
  const openEndImageClick = () => {
    EndDateRef.current?.setOpen(true);
  }
  /*  const handleStartDate = (e) => {
     const date = e.target.value;
     setSelectStartDate(date)
   }
   const handleEndDate = (e) => {
     const date = e.target.value;
     setSelectEndDate(date)
   }
  */


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
  const handleRemoveMeasurementSecond = (measurementDelete) => {
    const updatedMeasurements = measurementsChosedSecond.filter(item => item !== measurementDelete);
    setMeasurementsChosedSecond(updatedMeasurements);
  }


  const categories = ["Rice", "Beans", "Yam", "Cassava", "Maize", "Rice", "Beans", "Yam", "Cassava", "Maize",];
  const measurements = ["Gram (g)", "Kilogram (kg)", "Pound (lbs)", "Cup", "Modu", "Gram (g)", "Kilogram (kg)", "Pound (lbs)", "Cup", "Modu"];

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
  const handleFileChangeRemove = (e) => {
    const deletedFIles = [...imageFiles];
    deletedFIles[e] = null; // Set the selected file for the specific slot
    setImageFiles(deletedFIles)

    /* if(e === deletedFIles.) */
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


  {/* <input className="inputdate" value={selectEndDate} placeholder="EndDate" readOnly />
 */}
  return (
    <>
      <OrderNav header="New Product" />
      <div className="container_newproduct">
        <div className="content_newproduct">
          {/* LEFT SECTION */}
          <div className="form-section_newproduct">
            <div className="product-container_newproduct">
              <p className="section-title_newproduct">Create Product</p>

              <div className="input-group_newproduct">
                <label>Product Name</label>
                <div className="greenlabelandinput">
                  <p>Product Name</p>
                  <input type="text" placeholder="Enter Product Name" />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="input-group_newproduct" ref={categoryRef}>
                <label>Product Category</label>
                <div
                  className="category-dropdown"
                  onClick={() => setShowCategories(!showCategories)}
                >
                  {categoriesChosed === ""
                    ? <p>Select Product Category</p>
                    : <p>{categoriesChosed}</p>}
                  <img className={showCategories ? "activeimg" : "img"} src="/dropdown.svg" />
                  {showCategories && (
                    <div className="category-dropdown-container">
                      <h2 className="modalcategoryheader">Categories</h2>
                      <div className="category-dropdown-scroll">
                        {categories.map((item, index) => (
                          <div
                            key={index}
                            className="category-item"
                            onClick={() => handleAddCategories(item)}
                          >
                            <p className="selectedunit">{item} </p>
                          </div>

                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Measurement Dropdown */}
              <div className="input-group_newproduct" ref={measurementRef}>
                <label>Measurement Unit</label>
                <div className="measurementandmodal">
                  <div
                    className="measurement-dropdown"
                    onClick={() => setShowMeasurements(!showMeasurements)}
                  >
                    <div className="measuredselecteditem">
                      {measurementsChosedSecond.length > 0
                        ? measurementsChosedSecond.map((unit) => (
                          <p>{unit},</p>
                        ))
                        : <p>Select Measurement</p>}

                    </div>
                    <img className={showMeasurements ? "activeimg" : "img"} src="/dropdown.svg" />
                  </div>
                  {showMeasurements && (
                    <div className="measurement-dropdown-container">
                      <div className="measurement-dropdown-scroll">
                        {measurements.map((item, index) => (
                          <div
                            key={index}
                            className="measurement-item"

                          >
                            {measurementsChosed.includes(item) ? (
                              <p className="selectedunitanimg"><p>{item}</p> <img onClick={() => handleRemoveMeasurement(item)} src="/close.svg" /></p>
                            ) : <p className="selectedunit" onClick={() => handleAddMeasurement(item)}>{item}</p>}
                          </div>
                        ))}
                      </div>
                      <button onClick={handleAddMeasurementSecond} className="add-measurement-button">
                        Add Measurement
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {measurementsChosedSecond.length > 0 ?
                <div className="selected-units_newproduct">
                  {measurementsChosedSecond.map((unit) => (
                    <span key={unit} className="unit-tag_newproduct">
                      {unit} <img src="/close.svg" onClick={() => handleRemoveMeasurementSecond(unit)} className="remove_newproduct" />
                    </span>
                  ))}
                </div>
                : ""
              }

              <div className="input-group_newproduct">
                <label>Product Description</label>
                <div className="greenlabelandtextarea">
                  <p>Product Name</p>
                  <textarea placeholder="Enter Product Description" />
                </div>
              </div>

              {/* Variation Body Div */}
              <div className="input-group_newproduct">
                <label>Product Variation</label>
                <button className="add-btn_newproduct" onClick={handleAddVariationShow}><p>+ Add Variation</p></button>
              </div>
              {/* Modal */}
              {showModal && (
                <>
                  <div className="modal-backdrop" onClick={() => setShowModal(false)} />
                  <div className="modal">
                    <h2>Add Variation</h2>
                    {/*   <div className="modal-header">
                    <img src="/close.svg" onClick={closeModal} style={{ cursor: 'pointer' }} />
                  </div> */}
                    <div className="modal-content">
                      {/* Header */}

                      {/* Variation Section */}
                      <div className="variation-section">
                        <div className="variation-inputs">
                          <label>Variation</label>
                          {/* <div className="firstvariationinput"> */}
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
                          {/*   </div> */}
                        </div>
                        <div className="variation-inputs2">
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
                        {bargainThreshold.length > 0 && (
                          <div className="allowcustomersandimage">
                            <div className='allowcustomer'>
                              <h3>Allow Bargain</h3>
                              <p>customers would be able to bargain for this product</p>
                            </div>
                            <img src="/switch.svg" />
                          </div>
                        )}
                        <div className="add-variation" onClick={handleAddVariation}>+ Add variation</div>
                        {variations.length > 0 &&
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
                              {variations.map((variation, index) => (
                                <tr className="tableandmodalrow" key={index}>
                                  <td className="imagetableandnameandmodal">
                                    {/*  <img src="bag-icon.png" className="icon_newproduct" alt="Bag Icon" /> */} {variation.name}
                                  </td>
                                  <td>{variation.quantity}</td>
                                  <td>${variation.price}</td>
                                  <td>{variation.bargainThreshold}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        }

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

                      {/* Add Variation Button */}

                      {/* Table */}

                      {/* Save Button */}
                    </div>
                  </div>
                </>
              )}

              {
                finalVariations.length > 0 ? (
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
                          <td className="imagetableandnameandmodal">
                            <img src="bag-icon.png" className="icon_newproduct" alt="Bag Icon" /> {variation.name}
                          </td>
                          <td>{variation.quantity}</td>
                          <td>${variation.price}</td>
                          <td>{variation.bargainThreshold}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : ""}

              <p className="section-title_newproduct">Optional</p>

              <div className="input-group_newproduct">
                <label>Promo</label>
                <button onClick={() => setShowModalPromo(!showModalPromo)} className="add-btn_newproduct"><p>+ Add Promo</p></button>

              </div>
              {showModalPromo && (
                <>
                  <div className="modal-backdrop" onClick={() => setShowModalPromo(!showModalPromo)} />
                  <div className="promomodal">
                    <h2>Set Promo</h2>
                    <div className="allinputsanddate">
                      <div className="promolabelandinput">
                        <label>Title</label>
                        <div className="promogreenlabelandinput">
                          <p>Deal fo the Day</p>
                          <input className="input" placeholder="Text" />
                        </div>
                      </div>
                      <div className="promolabelandinput">
                        <label>Minimum Quantity Per Usage</label>
                        <div className="promogreenlabelandinput">
                          <p>Quantity</p>
                          <input className="input" placeholder="4" />
                        </div>
                      </div>
                      <div className="promolabelandinput">
                        <label>Discount Percentage</label>
                        <div className="promogreenlabelandinput">
                          <p>Percentage</p>
                          <input className="input" placeholder="15%" />
                        </div>
                      </div>
                      <div className="promolabelandinputdates">
                        <label>Time Frame</label>
                        <div className="startandenddate">
                          <div className="inputwithdateimage">
                            {/* <input className="inputdate" value={selectStartDate} placeholder="StartDate" readOnly /> */}
                            <DatePicker
                              onChange={(date) => setSelectStartDate(date)}
                              icon={"/left.svg"}
                              customInput={<CustomInput />}
                              ref={StartDateRef}
                              selected={selectStartDate}
                              style={{
                                color: "#1B9D2F",
                                fontSize: "16px",

                              }}
                            />
                            <span><button onClick={openStartImageClick} ><img src="/calendar.svg" /></button> </span>
                          </div>
                          {/* <h3>{selectEndDate}</h3> */}
                          <div className="inputwithdateimage">
                            {/*   <input className="inputdate" value={selectEndDate} placeholder="EndDate" readOnly /> */}
                            <DatePicker
                              onChange={(date) => setSelectEndDate(date)}
                              customInput={<CustomInputEnd />}
                              ref={EndDateRef}
                              selected={selectEndDate}
                              className="datepickercalender"
                              style={{
                                color: "#1B9D2F",
                                fontSize: "16px",

                              }}
                            />
                            <span> <img src="/calendar.svg" onClick={openEndImageClick} /></span>
                          </div>
                          {/* <input type="date" ref={StartDateRef} onChange={handleStartDate} className="hiddendate" /> */}
                          {/*   <input type="date" ref={EndDateRef} onChange={handleEndDate} className="hiddendatend" /> */}

                        </div>
                      </div>
                    </div>
                    <button className="promocreatebtn">Create</button>
                  </div>
                </>
              )}

              <div className="input-group_newproduct">
                <label>Special Tags</label>

                <div className="greenlabelandinput">
                  <p>Tags</p>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter tags" />
                </div>
              </div>
              <button onClick={addTagsFromInput} className="add-tag_newproduct"><p>+ Add Tag</p></button>
              <div className="selected-tags_newproduct">
                {tags.map((tag) => (
                  <span key={tag} className="unit-tag_newproduct ">{tag} <img onClick={() => removeTag(tag)} src="/close.svg" /></span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="right-section_newproduct">
            {/* Image Grid */}
            <div className="image-grid_newproduct">
              {imageFiles.map((file, index) => {
                const imageUrl = file ? URL.createObjectURL(file) : null; // Get the image URL if file exists
                return (
                  <div
                    key={index}
                    className="image-slot_newproduct"
                  // Click the slot to select a file
                  >
                    {imageUrl ? (
                      <div className="Selectedimageandremove">
                        <img
                          src={imageUrl}
                          alt={`Product ${index + 1}`}
                          className="product-image_newproduct"
                          onClick={() => handleImageClick(index)}
                        />
                        <img onClick={() => handleFileChangeRemove(index)} className="removeimage" src="/close.svg" />
                      </div>
                    ) : (
                      <div className="no-image-placeholder_newproduct">
                        <img src='/clickhere.svg' onClick={() => handleImageClick(index)} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept="image/*"
            />

            {/* Hidden input for file selection */}

            {/* Button Group */}
            <div className="button-group_newproduct">
              <button className="save-draft_newproduct">Save as draft</button>
              <button className="preview_newproduct">Preview</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
