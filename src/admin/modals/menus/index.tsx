import axios from 'axios';
import React, { useEffect, useState } from 'react'
import nullImg from '../../../assets/null.png'

type MenuType = {
  _id: number,
  no: number,
  img: string,
  name: string,
  price: number,
  category: string
}

type NewMenuType = {
  name: string,
  price: number,
  category: string
}

const Menus = () => {
  const [menus, setMenus] = useState<MenuType[]>([])
  const [selectedMenu, setSelectedMenu] = useState<MenuType>({
    _id: 0,
    no: 0,
    img:'',
    price: 0,
    name: '',
    category: ''
  })
  const [editClicked, setEditClicked] = useState(false)
  const [addMenuClicked, setAddMenuClicked] = useState(false)
  const [newMenu, setNewMenu] = useState<NewMenuType>({
    name: '',
    price: 0,
    category: '' || 'meals'
  })

  const handleSelectedMenu = (menu: any) => {
    setSelectedMenu(menu);
    setEditClicked(true)
  };
  

  const deleteSelectedMenu = (menu: any) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${menu.name}"?`);
  
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        axios
          .delete(`https://halalbox.cyclic.app/api/menu/${menu._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(`Error deleting ${menu.name}:`, error);
          });
      } catch (error) {
        console.error(`Error deleting ${menu.name}:`, error);
      }
    }
  };

  const handleEditMenu = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { no, img, ...menuWithoutIdAndImage } = selectedMenu;
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `https://halalbox.cyclic.app/api/menu/${selectedMenu._id}`,
        menuWithoutIdAndImage, // Send the object without 'id' and 'image'
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      
      if(response.status === 200) {
        setEditClicked(false)
      }
    } catch (error) {
      console.error('Error updating menu:', error);
    }
  };

  const handleAddMenuBtnClick = () => setAddMenuClicked(true)

  const handleAddMenu = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.post(
        `https://halalbox.cyclic.app/api/menu/`,
        newMenu,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if(response.status === 201) {
        setAddMenuClicked(false)
      }
  
    } catch (error) {
      console.error('Error adding menu:', error);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMenu( prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
    
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewMenu((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getAllMenus = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://halalbox.cyclic.app/api/menu/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMenus(response.data.menus);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };
  

  useEffect(() => {
    getAllMenus();
  }, []);

  const editForm = selectedMenu && (
    <div className='my-5 bg-slate-300 shadow-md md:p-10 rounded-md fixed'>
      <h2 className='my-2 text-red-700 font-bold'>Edit {selectedMenu.name}</h2>
      <form onSubmit={handleEditMenu}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={selectedMenu.name}
          onChange={(e) => setSelectedMenu({ ...selectedMenu, name: e.target.value })}
          required 
          className='mx-2 p-2 rounded-lg'
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={selectedMenu.price}
          onChange={(e) => setSelectedMenu({ ...selectedMenu, price: parseFloat(e.target.value) })}
          required 
          className='mx-2 p-2 rounded-lg'
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          required 
          className='mx-2 p-2 rounded-lg'
          value={selectedMenu.category}
          onChange={(e) => setSelectedMenu({ ...selectedMenu, category: e.target.value })}
        >
          <option value="meals">Meals</option>
          <option value="snacks">Snacks</option>
          <option value="shawarma">Shawarma</option>
          <option value="drinks">Drinks</option>
        </select>
    
    <button className='p-2 rounded-lg mx-2 bg-green-600 text-white' type="submit">Save</button>
    <button className='p-2 rounded-lg mx-2 bg-red-600 text-white' type="button" onClick={() => setEditClicked(false)}>Cancel</button>
  </form>
</div>

  );

  const addMenu = (
    <form className='my-5 bg-slate-300 shadow-md md:p-10 rounded-md fixed' onSubmit={handleAddMenu} >
      <label htmlFor="name">Name</label>
      <input className='mx-2 p-2 rounded-lg' type="text" name="name" id="" required onChange={handleChange}/>
      <label htmlFor="price">Price</label>
      <input className='mx-2 p-2 rounded-lg' type="text" name='price' required onChange={handleChange}/>
      <label htmlFor="category">Category</label>
      <select
      className='mx-2 p-2 rounded-lg'
      id="category"
      name="category"
      required
      onChange={handleSelectChange}
    >
      <option value="meals">Meals</option>
      <option value="snacks">Snacks</option>
      <option value="shawarma">Shawarma</option>
      <option value="drinks">Drinks</option>
    </select>
      <button className='p-2 rounded-lg mx-2 bg-green-600 text-white' type="submit">Add</button>
      <button className='p-2 rounded-lg mx-2 bg-red-600 text-white' onClick={() => setAddMenuClicked(!addMenuClicked)} type="button">cancel</button>
    </form>
  )

  return (
    <div className='p-3'>
      {addMenuClicked && addMenu}
      {editClicked && editForm}
      {!addMenuClicked && <button onClick={handleAddMenuBtnClick} style={{padding: "10px", borderRadius: "5px", backgroundColor:"green", fontSize:"17px", color: "#fff"}}>Add Menu</button>}
      <table className='w-full'>
          <thead className='border-black border-2 w-full p-2'>
            <tr className='p-5'>
              <th className='p-2 border-black border-2'>No.</th>
              <th className='p-2 border-black border-2'>Image</th>
              <th className='p-2 border-black border-2'>Name</th>
              <th className='p-2 border-black border-2'>Price</th>
              <th className='p-2 border-black border-2'>Category</th>
              <th className='p-2 border-black border-2'>Edit</th>
              <th className='p-2 border-black border-2'>Delete</th>
            </tr>
          </thead>
          <tbody className='border-black border-2 w-full'>
            {menus.map((menu: any, index: number) => (
              <tr key={menu.id} className='border-black border-2 w-full'>
                <td className='border border-black p-2 m-2' style={{ textAlign: 'center' }}>{index + 1}</td>
                <td className='border border-black p-2 m-2' style={{ display: 'flex', justifyContent: 'center' }}>
                  <img className='h-20 w-20' src={menu.img || nullImg} alt={menu.name} />
                </td>
                <td className='border border-black p-2 m-2'>{menu.name}</td>
                <td className='border border-black p-2 m-2'>{menu.price}</td>
                <td className='border border-black p-2 m-2'>{menu.category}</td>
                <td className='border border-black p-2 m-2' style={{ textAlign: 'center' }}>
                  <button className='bg-slate-200 rounded-md shadow-md py-1 px-4' onClick={() => handleSelectedMenu(menu)}>edit</button>
                </td>
                <td className='border border-black p-2 m-2' style={{ textAlign: 'center' }}>
                  <button className='bg-red-500 text-white rounded-md shadow-md py-1 px-4' onClick={() => deleteSelectedMenu(menu)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Menus