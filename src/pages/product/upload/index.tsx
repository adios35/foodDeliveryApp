import React, { useState } from "react";

const ProductUploadPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  //   const handleImageUpload = (event) => {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       setSelectedImage(reader.result);
  //     };

  //     reader.readAsDataURL(file);
  //   };

  return (
    <div className=" rounded-lg p-4 my-10 mb-12">
      <h2 className="text-2xl font-bold mb-4">Upload Product</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-semibold mb-2">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            // onChange={handleImageUpload}
          />
        </div>
        {selectedImage && (
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Preview</label>
            <img
              src={selectedImage}
              alt="Product"
              className="mt-4 rounded-lg shadow-md"
              style={{ maxWidth: "300px" }}
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter product title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-semibold mb-2"
          >
            Product Description
          </label>
          <textarea
            id="description"
            className="border border-gray-300 rounded-lg p-2 w-full"
            rows={4}
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-lg font-semibold mb-2">
            Product Price
          </label>
          <input
            type="number"
            id="price"
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter product price"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProductUploadPage;
