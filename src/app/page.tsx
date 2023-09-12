import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Header from '@/components/Header'
import Products from '@/components/Products'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Products />
    </>
  )
}
