import React, { useState } from "react";

const Nav = () => {
  const [ul, setUl] = useState(false); // default false, agar menu tersembunyi saat pertama kali render

  return (
    <nav className="flex justify-between items-center p-2 border">
      {/* Menu List */}
      <ul
      onClick={() => setUl(!ul)}
        className={`${
          ul ? "translate-x-[0%]" : "translate-x-[100%]" // menentukan posisi menu berdasarkan state
        } flex flex-col md:flex-row md:w-2/3 md:h-10 md:justify-evenly md:items-center md:static absolute top-0 left-0 w-full h-full z-40 justify-center items-center transition-transform bg-gray-900 text-white md:bg-transparent md:text-black md:translate-x-[0%]`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Pengaturan</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">User</a>
        </li>
      </ul>

      {/* Hamburger Icon (Klik ini untuk menampilkan/menyembunyikan menu) */}
      <i
        className="md:hidden fa-solid fa-bars text-2xl"
        onClick={() => setUl(!ul)} // toggle ul state
      ></i>

      {/* Nama dan User */}
      <h1 className="font-bold">RM_TEDU_MATUARI</h1>
      <div className="w-10 h-10 bg-green-500 rounded-md"></div>
    </nav>
  );
};

export default Nav;