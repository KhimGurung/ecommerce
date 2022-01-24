import React, { useState } from 'react'
import Header from '@components/Header'
import BrowseHeader from '@components/BrowseHeader'
import CardProduct from '@components/CardProduct'
import BrowseFilter from '@components/BrowseFilter'

const items = [
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Under Armour",
    name: "City Backpack Black",
    price: "55"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "New Balance",
    name: "Skinny Jeans Black",
    price: "80"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Bugatti",
    name: "Mercury T-shirt",
    price: "30"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Nike",
    name: "Sweatshirt",
    price: "75"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "The North Face",
    name: "City Backpack Black",
    price: "55"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Under Armour",
    name: "Skinny Jeans Black",
    price: "80"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Bugatti",
    name: "Sneaker low",
    price: "30"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Nike",
    name: "NIKE METCON 7 - Trainings-/Fitnessschuh",
    price: "75"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "The North Face",
    name: "City Backpack Black",
    price: "55"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Under Armour",
    name: "Skinny Jeans Black",
    price: "80"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Bugatti",
    name: "Sneaker low",
    price: "30"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Nike",
    name: "NIKE METCON 7 - Trainings-/Fitnessschuh",
    price: "75"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Bugatti",
    name: "Sneaker low",
    price: "30"
  },
  {
    image: "https://via.placeholder.com/360x430",
    brand: "Nike",
    name: "NIKE METCON 7 - Trainings-/Fitnessschuh",
    price: "75"
  }
]

const Browse = () => {
    return (
        <main className="min-h-screen flex flex-col">
          <Header /> 
          <section className="container mt-10 flex flex-col flex-1">
            <BrowseHeader />
            <div className="flex flex-1 gap-10 mt-5">
              <div className="w-[250px] hidden lg:block mb-0">
                <BrowseFilter />
              </div>
              <div className="flex-1 gap-3 md:gap-6 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr]  xl:grid-cols-[1fr_1fr_1fr_1fr] ">
                {
                  items.map((item, index) => <CardProduct key={ index } product={ item } />)
                }
              </div>
            </div>
          </section>
        </main>
    )
}

export default Browse
