import { useState } from "react";
import Swal from "sweetalert2";

const kincir = ["1", "2", "3", "4", "1", "2", "3", "4"];

function App() {
  const [name, setName] = useState("Kincir Ludo / Dm");

  // Fungsi untuk menghasilkan khodam secara acak berdasarkan waktu
  function getRandomKincirBasedOnTime() {
    const currentTime = new Date(); // Mendapatkan waktu saat ini
    const minutes = currentTime.getMinutes(); // Mendapatkan menit saat ini
    const seconds = currentTime.getSeconds(); // Mendapatkan detik saat ini

    // Menghitung total detik berdasarkan menit dan detik saat ini
    const timeFactor = minutes * 60 + seconds;
    const randomIndex = timeFactor % kincir.length;

    // Menghitung total detik berdasarkan menit dan detik saat ini
    const timeFactor1 = minutes * 15 + seconds;
    const randomIndex1 = timeFactor1 % kincir.length;

    // Menghitung total detik berdasarkan menit dan detik saat ini
    const timeFactor2 = minutes * 25 + seconds;
    const randomIndex2 = timeFactor2 % kincir.length;

    return [kincir[randomIndex], kincir[randomIndex1], kincir[randomIndex2]];
  }

  // Fungsi untuk memproses klik tombol dan melakukan validasi input
  function handleClick() {
    // Jika nama kosong, tampilkan SweetAlert dan gunakan nama default "Ludo"
    if (name.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Mohon masukkan input Anda.",
      });
      return;
    }

    setTimeout(function () {
      window.location.reload(); // Menyegarkan halaman setelah 1 detik
    }, 5000); // Set timeout untuk auto-refresh setelah 1 detik

    const kincir = getRandomKincirBasedOnTime();

    // Tampilkan SweetAlert dengan hasil khodam
    Swal.fire({
      icon: "success",
      title: "Hasil Tampil",
      text: `Hasilnya adalah: ${kincir}`,
    });
  }

  // Fungsi untuk menangani perubahan input
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  // Fungsi untuk menampilkan SweetAlert
  function showSwal() {
    Swal.fire({
      title: "Aplikasi ini dibuat oleh : Andreansyah Permana",
      html: `Klik untuk mengunjungi <a href="https://www.instagram.com/ndre_permana_01" target="_blank" class="text-blue-500 hover:underline">Andreansyah Permana</a>`,
      imageUrl:
        "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2024/02/16/ilustrasi-hackerjpg-20240216030311.jpg",
      confirmButtonText: "OK",
      showCancelButton: false,
      width: 400,
      padding: "20px",
      customClass: {
        title: "font-bold text-center",
        htmlContainer: "text-center text-sm sm:text-base md:text-lg",
      },
    });
  }

  return (
    <div className="bg-[url('https://i.gifer.com/J4o.gif')] min-h-screen flex items-center justify-center p-4">
      <div className=" bg-gray-800 p-8 rounded-lg shadow-md w-screen max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl min-h-full ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white rounded-lg text-center">
          Hago Hack Kincir
        </h1>
        <p className="mb-4 text-white text-center text-sm sm:text-base md:text-lg">
          80% menang, silakan dicoba!
        </p>
        <input
          type="text"
          className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-sm sm:text-base"
          placeholder="Tulis apa aja disini"
          value={name}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-md w-full text-sm sm:text-base md:text-lg"
          onClick={handleClick}
        >
          CHECK
        </button>
        <div className=" flex items-center justify-center p-4">
          {/* Menampilkan tombol atau event yang memicu SweetAlert */}
          <button
            onClick={showSwal}
            className="bg-blue-500 text-white p-4 rounded-md text-sm sm:text-base md:text-lg hover:bg-green-500 transition duration-300"
          >
            Tentang Aplikasi
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
