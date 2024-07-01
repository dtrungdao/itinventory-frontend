import React, { useEffect } from 'react'
import './ProductOverview.scss'
import { TbCategory2,TbDevicesCheck, TbDevicesSearch  } from "react-icons/tb";
import SummaryBoard from '../../summaryBoard/SummaryBoard';
import { useDispatch, useSelector } from 'react-redux';
import { CALC_CATEGORIES, selectCategory, CALC_READY_DEVICES, seleceReadyProduct } from '../../../redux/features/product/productSlice';


//Adjusted icons in the board
const categoryIcon = <TbCategory2 size={40} color='#fff' />;
const deviceIcon = <TbDevicesSearch size={40} color='#fff' />;
const readyIcon = <TbDevicesCheck size={40} color='#fff' />;

const ProductOverview = ({products}) => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory)
    const ready = useSelector(seleceReadyProduct)

    useEffect(() => {
      dispatch(CALC_CATEGORIES(products));
      dispatch(CALC_READY_DEVICES(products))
    }, [dispatch, products]);

  return (
    <div className='product-overview'>
        <h2 className='mt'>Overview</h2>
        <div className='info-overview'>
            <SummaryBoard icon={categoryIcon} title = {"Categories"} 
            count={category.length} bgColor="card1" />
            <SummaryBoard icon={deviceIcon} title = {"Total devices"} 
            count={products.length} bgColor="card2" />
            <SummaryBoard icon={readyIcon} title = {"Ready devices"} 
            count={ready} bgColor="card3" />
        </div>
    </div>
  )
}

export default ProductOverview