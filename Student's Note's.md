# Dokumentasi Fitur JavaScript

## 1. Menu Hamburger (Mobile Navigation)

- **Fitur**: Toggle menu navigasi untuk tampilan mobile
- **Cara Mengakses**:
  - Klik tombol hamburger di pojok layar
  - Menu akan muncul/sembunyi saat diklik
  - Menu otomatis tertutup jika mengklik area di luar menu

## 2. Dropdown Menu

- **Fitur**: Menu dropdown yang bisa dibuka/tutup
- **Cara Mengakses**:
  - Klik tombol dengan class `.dropdown-toggle`
  - Dropdown menu akan muncul/sembunyi
  - Menu otomatis tertutup jika mengklik area di luar dropdown

## 3. Sistem Artikel Dinamis

- **Fitur**: Menampilkan artikel makanan secara dinamis dari data JavaScript
- **Data Artikel**:
  ```javascript
  const articles = [
    {
      title: 'Rendang - Warisan Kuliner Dunia',
      image: 'images/rendang.png',
      description: 'Rendang adalah masakan daging yang berasal dari Minangkabau...'
    },
    {
      title: 'Soto Lamongan - Kuah Gurih Khas Jawa Timur',
      image: 'images/soto.png',
      description: 'Soto Lamongan adalah soto ayam khas Lamongan, Jawa Timur.'
    }
  ]
  ```
- **Cara Mengakses**:
  - Artikel ditampilkan otomatis saat halaman dimuat
  - Tiap artikel menampilkan judul, gambar, dan deskripsi
  - Gambar dimuat secara lazy loading untuk optimasi performa

## 4. Penanganan Error Gambar

- **Fitur**: Sistem fallback untuk gambar yang tidak ditemukan
- **Cara Mengakses**:
  - Otomatis mengganti gambar yang rusak/tidak ditemukan dengan gambar default (`images/error.png`)
  - Alt text akan berubah menjadi "Image not found"

## 5. Optimasi Performa

- **Fitur**: Implementasi teknik optimasi untuk performa website
- **Implementasi**:
  - Penggunaan `createDocumentFragment()` untuk mengurangi reflow/repaint
  - Lazy loading pada gambar artikel
  - Event delegation untuk penanganan klik di luar menu
  - Pembersihan DOM dengan `replaceChildren()`

## 6. Event Handling

- **Fitur**: Penanganan berbagai event user interaction
- **Implementasi**:
  - Event `DOMContentLoaded` untuk inisialisasi
  - Click event untuk menu hamburger
  - Click event untuk dropdown
  - Click event di luar menu untuk menutup menu/dropdown
  - Error handling untuk gambar

## Catatan Tambahan

- Semua fitur diinisialisasi otomatis saat DOM selesai dimuat
- Kode menggunakan pendekatan modular untuk memudahkan maintenance
- Implementasi menggunakan vanilla JavaScript tanpa dependensi framework
