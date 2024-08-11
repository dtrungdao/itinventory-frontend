import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { selectIsLoading, selectProduct,getProduct, 
  updateProduct,getProducts } from "../../redux/features/product/productSlice"
import ProductForm from '../../components/product/form/ProductForm';


const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading)

  const edit = useSelector(selectProduct)
  const [product, setProduct] = useState(edit)
  const [productImage, setProductImage] = useState("")
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  useEffect(() => {
    setProduct(edit)
    setImagePreview(
      edit && edit.image ? `${edit.image.filePath}` : null
    )
  }, [edit])

  //Handle all information when typing add product
  //e: parameter event
  const handleInput = (e) => {
    const {name, value} = e.target;
    setProduct({...product, [name]: value});
  }

    //Handle when uploading image
  const handleImage = (e) => { 
    setProductImage(e.target.files[0])
    setImagePreview(URL.createObjectURL(e.target.files[0]))
  }

    //Handle when user is choosen for device
  const handleBelongToChange = (e) => {
    setProduct({ ...product, belongTo: e.target.value });
  };

  const saveProduct = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append("id", id)
    formData.append("name", product?.name)
    formData.append("category", product?.category)
    formData.append("inventorynumber", product?.inventorynumber)
    formData.append("serialnumber", product?.serialnumber)
    formData.append("model", product?.model)
    formData.append("guarantee", product?.guarantee)
    formData.append("price", product?.price)
    formData.append("statusDevice", product?.statusDevice)
    formData.append("belongTo", product?.belongTo)
    formData.append("description", product?.description)
    formData.append("comment", product?.comment)
    if(productImage){
      formData.append("image", productImage)
    }

    console.log(...formData)

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    await dispatch(updateProduct({id, formData}));
    await dispatch(getProduct(id))
    await dispatch(getProducts())

  }

  return (
    <div>
      {isLoading}
      <h3 className='mt'>Edit a device</h3>
      <ProductForm 
      product = {product}
      productImage = {productImage}
      imagePreview = {imagePreview}
      handleInput = {handleInput}
      handleImage = {handleImage}
      handleBelongToChange = {handleBelongToChange}
      saveProduct = {saveProduct}
      />
    </div>
  )
}

export default EditProduct