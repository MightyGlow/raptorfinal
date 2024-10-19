'use client'

import React from 'react'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { HR } from '../../../_components/HR'
import { useFilter } from '../../../_providers/Filter'
import { RadioButton } from '../../../_components/Radio'
import classes from './index.module.scss'
import Link from 'next/link'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updatedCategories = categoryFilters.filter(id => id !== categoryId)

      setCategoryFilters(updatedCategories)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }

  const handleSort = (value: string) => {setSort(value);}
  
  return (
    <div className={classes.filters}>
      <div>
        <h5 className={classes.title}>ALL PRODUCTS</h5>
        <div className={classes.categories}>
          {/* {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)

            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })} */}
        </div>
        {/* <ul>
          <li><p>Men Bikes</p></li><br></br>
          <li><p>Women Bikes</p></li><br></br>
          <li><p>Kids Bikes</p></li><br></br>
          <li><p>Hybrid Bikes</p></li><br></br>
          <li><p>Accessories</p></li><br></br>
          <li><p>Electric Bikes</p></li><br></br>
        </ul> */}
        {/* <HR className={classes.hr} />
        <h5 className={classes.title}>Sort By</h5>
        <div className={classes.categories}>
           <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={() => handleSort('-createdAt')} 
            groupName='sort'
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={() => handleSort('createdAt')} 
            groupName='sort'
          />
        </div> */}
      </div>
    </div>
  )
}

export default Filters