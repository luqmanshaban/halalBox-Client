import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react'

export const MenuContext = createContext();

const MenuProvider= ({ children }) => {
    const [menus, setMenus] = useState([])
    const [items, setItems] = useState([]);
    const [itemCount, setItemCount] = useState({});
    // const [orderCreated, setOrderCreated] = useState(false)
  
    const handleAdd = (foodName) =>
      setItemCount((prev) => ({
        ...prev,
        [foodName]: (prev[foodName] || 0) + 1,
      }));
  
    const handleMinus = (foodName) =>
      setItemCount((prev) => ({
        ...prev,
        [foodName]: (prev[foodName] || 0) -1,
      }));

  
    const addToCart = (name, price, img, itemQuantity) => {
      setItems((prev) => [...prev, { name, price, img, itemQuantity }]);
      console.log(items);
    };
  
    const removeFromCart = (name) => setItems((prev) => prev.filter((item) => item.name !== name));
  
    const count = items.length;
  
    const total = useMemo(() => {
      return items.reduce(
        (acc, item) => acc + item.price * (itemCount[item.name] || 1),
        0
      );
    }, [itemCount, items]);

    const getMenus = async() => {
        try {
            const response = await axios.get('http://localhost:8000/api/menu')
            setMenus(response.data.menus)
        } catch (error) {
            console.error(error);
        }
    }

    const meals = menus.filter(menu => menu.category === 'meals')
    const snacks = menus.filter(menu => menu.category === 'snacks')
    const drinks = menus.filter(menu => menu.category === 'drinks')
    const shawarma = menus.filter(menu => menu.category === 'shawarma')
    const topPick = menus.filter(menu => menu.category === 'topPick')

    const category = {
        meals: meals,
        snacks: snacks,
        drinks: drinks,
        shawarma: shawarma,
        topPick: topPick,
        all: menus
    }

useEffect(() => {
  getMenus()
},[])
    const contextValue = {
        category,
        getMenus,
        items,
        handleAdd,
        handleMinus,
        count,
        total,
        addToCart,
        removeFromCart,
        itemCount,
    }
    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider;
