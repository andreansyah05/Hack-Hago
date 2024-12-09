import { useState } from "react";
import Swal from "sweetalert2";

const kincir = ["1", "2", "3", "4", "", "", "", ""];

function App() {
  const [name, setName] = useState("Kincir Ludo / Dm");
  const [history, setHistory] = useState<
    { name: string; result: string[]; time: string }[]
  >([]);

  // Fungsi untuk menghasilkan kincir secara acak berdasarkan waktu
  function getRandomKincirBasedOnTime() {
    const currentTime = new Date(); // Mendapatkan waktu saat ini
    const hours = currentTime.getHours(); // Mendapatkan jam saat ini
    const minutes = currentTime.getMinutes(); // Mendapatkan menit saat ini
    const seconds = currentTime.getSeconds(); // Mendapatkan detik saat ini

    //Menghitung total detik berdasarkan menit dan detik saat ini

    const timeFactor = hours + minutes + seconds - 10;
    const randomIndex = timeFactor % kincir.length;

    const timeFactor1 = hours + minutes + seconds - 15; // Menggeser detik dengan -15
    const randomIndex1 = timeFactor1 % kincir.length;

    const timeFactor2 = hours + minutes + seconds - 20; // Menggeser detik dengan -20
    const randomIndex2 = timeFactor2 % kincir.length;

    const timeFactor3 = hours + minutes + seconds - 25; // Menggeser detik dengan -5
    const randomIndex3 = timeFactor3 % kincir.length;

    return [
      kincir[randomIndex],
      kincir[randomIndex1],
      kincir[randomIndex2],
      kincir[randomIndex3],
    ];
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

    // setTimeout(function () {
    //   window.location.reload(); // Menyegarkan halaman setelah 1 detik
    // }, 50); // Set timeout untuk auto-refresh setelah 1 detik

    const kincir = getRandomKincirBasedOnTime();
    const currentTime = new Date().toLocaleString(); // Mendapatkan waktu lokal sebagai string

    // Menambahkan data ke dalam history dengan waktu
    setHistory([{ name: name, result: kincir, time: currentTime }, ...history]);

    Swal.fire({
      icon: "success",
      title: "Hasil Kincir",
      text: `Hasilnya adalah: ${kincir}`,
      timer: 1000,
      showConfirmButton: false,
    });
  }

  // Fungsi untuk menghapus seluruh history
  const clearHistory = () => {
    setHistory([]); // Mengosongkan array history

    // Tampilkan SweetAlert untuk konfirmasi penghapusan
    Swal.fire({
      icon: "info",
      title: "History Dihapus",
      text: "Seluruh riwayat telah dihapus.",
    });
  };

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

  // buatkan fungsi untuk membuar rules nya
  const createRules = () => {
    Swal.fire({
      title: "Aturan Permainan",
      html: `<ul>
          <li style="margin-bottom: 15px;">1. Kamu akan diminta input nama Anda</li>
          <li style="margin-bottom: 15px;">2. Ketik nama Anda sesuai yang kamu inginkan</li>
          <li style="margin-bottom: 15px;">3. Klik "CHECK" di waktu sisa 5 detik untuk mendapatkan kincir yang acak</li>
          <li style="margin-bottom: 15px;">4. Lihat hasil kincir dan tunggu popup hilang automatis" untuk melanjutkan permainan</li>
          <li style="margin-bottom: 15px;">5. Kamu dapat melihat riwayat hasil kincir di bawah</li>
          <li style="margin-bottom: 15px;">6. Klik "Hapus Riwayat" untuk menghapus seluruh riwayat</li>
          <li style="margin-bottom: 30px;">7. Klik "Aturan" untuk melihat aturan permainan</li>
           <li style="margin-bottom: 10px;"> PERHATIAN !!! </li>
          <li style="margin-bottom: ;"> Hack kincir ini tidak berlaku pada angka kolom di garis bawah seperti 5 , 6 , 7 , 8 </li>
        </ul>`,
      confirmButtonText: "OK",
      showCancelButton: false,
      width: 600,
      padding: "20px",
      customClass: {
        title: "font-bold text-center",
        htmlContainer:
          "text-center text-sm sm:text-base md:text-lg text-color-red-500",
      },
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

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
        <div className="flex items-center justify-center p-4">
          <button
            onClick={showSwal}
            className="bg-blue-500 text-white p-4 rounded-md text-sm sm:text-base md:text-lg hover:bg-green-500 transition duration-300"
          >
            Tentang Aplikasi
          </button>
          <button
            onClick={clearHistory}
            className="bg-red-500 text-white p-4 rounded-md text-sm sm:text-base md:text-lg hover:bg-red-700 transition duration-300 ml-3 "
          >
            Delete history
          </button>
          <button
            onClick={createRules}
            className="bg-yellow-500 text-white p-4 rounded-md text-sm sm:text-base md:text-lg hover:bg-green-700 transition duration-300 ml-3"
          >
            Aturan Bermain
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            History Kincir
          </h2>
          <div className="space-y-4">
            {history.length > 0 ? (
              history.map((item, index) => (
                <div key={index} className=" p-4 rounded-md text-green-500">
                  <strong>{item.name}</strong>
                  <div>Hasil: {item.result.join(", ")}</div>
                  <div className=" text-sm text-red-500">
                    Waktu: {item.time}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">Belum ada history kincir.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
