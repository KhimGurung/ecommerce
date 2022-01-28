import React, { useState, useEffect } from 'react'
import Header from '@components/Header'
import BrowseHeader from '@components/BrowseHeader'
import CardProduct from '@components/CardProduct'
import BrowseFilter from '@components/BrowseFilter'
import Footer from '@components/Footer'
import PageTemplate from '@components/PageTemplate'

const items = [
  {
    image: "https://picsum.photos/360/430",
    category: "Under Armour",
    title: "City Backpack Black",
    price: "55.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "New Balance",
    title: "Skinny Jeans Black",
    price: "80.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Bugatti",
    title: "Mercury T-shirt",
    price: "30.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Nike",
    title: "Sweatshirt",
    price: "75.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "The North Face",
    title: "City Backpack Black",
    price: "55.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Under Armour",
    title: "Skinny Jeans Black",
    price: "80.20"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Bugatti",
    title: "Sneaker low",
    price: "30.40"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Nike",
    title: "NIKE METCON 7 - Trainings-/Fitnessschuh",
    price: "75.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "The North Face",
    title: "City Backpack Black",
    price: "55.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Under Armour",
    title: "Skinny Jeans Black",
    price: "80.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Bugatti",
    title: "Sneaker low",
    price: "30.20"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Nike",
    title: "NIKE METCON 7 - Trainings-/Fitnessschuh",
    price: "75.00"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Bugatti",
    title: "Sneaker low",
    price: "30.5"
  },
  {
    image: "https://picsum.photos/360/430",
    category: "Nike",
    title: "NIKE METCON 7 - Trainings-/Fitnessschuh",
    price: "75.00"
  }
]

const Browse = () => {
    const [products, setProducts] = useState(items)

    const toggleBodyScroll = (e: React.FormEvent<HTMLInputElement>) => {
      document.body.style.overflow = e.currentTarget.checked ? "hidden" : "auto"
    }

    const toggleCheckbox = () => {
      const checkbox = document.getElementById("toggleFilter") as HTMLInputElement
      checkbox.checked = false
      document.body.style.overflow = "auto"
    }

    const handleResize = () => {
      if(window.innerWidth >= 1024){
        toggleCheckbox()
      }
    }

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <PageTemplate>
          <section className="mt-5 flex flex-col flex-1">
            <BrowseHeader className="sticky top-0 lg:z-30 bg-white py-5" />
            <div className="flex flex-1 gap-10 lg:relative">
              <input type="checkbox" id="toggleFilter" className="hidden peer" onChange={ toggleBodyScroll } />
              <div className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-black/30 peer-checked:z-40 -z-10 peer-checked:opacity-100 opacity-0 transition-opacity duration-500" onClick={ toggleCheckbox } />
              <div className="w-[250px] lg:w-[205px] fixed top-0 bottom-0 p-5 lg:p-0 left-[-250px] bg-white lg:sticky lg:left-0 mb-0 peer-checked:left-0 transition-left duration-300 overflow-auto lg:z-20 z-50 self-start">
                <BrowseFilter />
              </div>
              <div className="flex-1 gap-3 md:gap-4 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr]  xl:grid-cols-[1fr_1fr_1fr_1fr]">
                {
                  products.map((product, index) => <CardProduct key={ index } product={ product } />)
                }
              </div>
            </div>
          </section>
        </PageTemplate>
    )
}

export default Browse
