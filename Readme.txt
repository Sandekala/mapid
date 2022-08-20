1. Struktur file/folder hasil pengerjaan

folder utama hasil pengerjaan adalah folder src didalam folder mapid, didalamnya terdapat file App.css sebagai parent styling dan App.js sebagai parrent aplikasi.

2. Lokasi api key mapbox jika perlu diganti

api key disimpan di variable REACT_APP_BASEURL didalam file .env

3. Cara penginstalan librari

librari yang saya gunakan adalah Reactjs, Axios dan React-leaflet sebagai basemap
saya menggunakan gitbash untuk instalasi librarinya

instal React = buka gitbash, ketik 'npx create-react-app nama_folder' lalu enter dan tunggu sampai selesai
instal Axios = buka gitbash, ketik 'npm install axios' lalu enter dan tunggu sampai selesai
instal react-leaflet = buka gitbash, ketik 'npm install react-leaflet' lalu enter dan tunggu sampai selesai

4. Cara penjalanan aplikasi

buka folder project menggunakan IDE, bukan terminal didalam IDEnya lalu ketik 'npm start' dan tunggu hingga project terbuka di browser secara otomatis

5. Fitur-fitur basik sesuai rekuiremen

a. mengakses basemap dari react-leaflet
b. menampilkan titik lokasi yang dirender dari API
c. menampilkan warna titik berbeda sesuai status properti object dari API
d. menampilkan popup ketika titik diklik

6. Fitur-fitur tambahan di luar rekuiremen jika ada.

a. menampilkan warna berbeda pada teks status sesuai statusnya
