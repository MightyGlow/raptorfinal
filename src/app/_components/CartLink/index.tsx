'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import Image from 'next/image'
import { useCart } from '../../_providers/Cart'

import classes from './index.module.scss'

export const CartLink: React.FC<{
  className?: string
}> = props => {
  const { className } = props
  const { cart } = useCart()
  const [length, setLength] = useState<number>()

  useEffect(() => {
    setLength(cart?.items?.length || 0)
  }, [cart])

  return (
    <Link className={[classes.cartLink, className].filter(Boolean).join(' ')} href="/cart">
      <Fragment>
      <Image
        src="/assets/icons/cartfinal.svg"
        alt="delete"
        width={24}
        height={24}
        className={classes.qtnBt}
      />
        {typeof length === 'number' && length > 0 && (
          <small className={classes.quantity}>({length})</small>
        )}
      </Fragment>
    </Link>
  )
}



// return (
//   <button
//     type="button"
//     onClick={() => {
//       deleteItemFromCart(product)
//     }}
//     className={[className, classes.removeFromCartButton].filter(Boolean).join(' ')}
//   >
//     <Image
//       src="/assets/icons/delete.svg"
//       alt="delete"
//       width={24}
//       height={24}
//       className={classes.qtnBt}
//     />
//   </button>