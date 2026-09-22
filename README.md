# ADL Law & Consultancy - Coming Soon Web Platform

Prestijli hukuk ve danışmanlık bürosu **ADL Law & Consultancy** için özel olarak tasarlanmış, White & Case referans mimarisine ve kurumsal kimlik standartlarına tam uyumlu tek sayfalık hazırlık aşaması (Coming Soon) web sitesi.

---

## 🏛️ Tasarım Özellikleri

- **Kurumsal Renk Entegrasyonu (`#360c17`):** Header ve marka alanı, ADL logosunun zemin rengiyle (`#360c17`) birebir eşleştirilmiştir. Böylece logo hiçbir kenarlık veya sırıtma olmadan kusursuz bir şekilde arayüze entegre olur.
- **White & Case Referans Mimarisi:**
  - Üst menü navigasyonu (*People*, *Services*, *Insights*, *Newsroom*, *About Us*, *Careers* ve Arama butonu).
  - Menü linkleri tıklandığında sayfadan ayrılmayacak şekilde tasarlanmış olup, kullanıcıyı bilgilendiren zarif bir **"Hazırlık Aşaması / Coming Soon"** toast bildirimi gösterir.
  - White & Case tarzı **Home / Offices / Istanbul** breadcrumb alt barı.
- **Yüzen (Floating) Ofis Bilgi Kartı:**
  - "Istanbul" ana başlığı ve ADL Law & Consultancy kurumsal unvanı.
  - Ofis adresi (Büyükdere Cad. Ferko Signature, Şişli / İstanbul).
  - Telefon (`+90 212 354 2000`) ve E-posta (`info@adllawconsultancy.com`).
  - Tek tıkla e-posta kopyalama butonu.
  - Vurgulanmış "Website Coming Soon / Web Sitemiz Çok Yakında Yayında" bildirim alanı ve doğrudan iletişim butonları.
- **Telif Sorunsuz İstanbul Arka Planı & Görsel Değiştirici Widget:**
  - Sağ alttaki zarif widget üzerinden 3 farklı görünüm arasında anlık geçiş yapılabilir:
    1. Gece Boğaz Köprüsü panoraması
    2. Alacakaranlık / Blue Hour İstanbul silüeti
    3. Gündüz Ortaköy & Boğaziçi panoraması
- **Mobil & Tablet Uyumu (Responsive):** Tüm ekran boyutlarında modern hamburger menü çekmecesi ve uyarlanabilir kart yerleşimi.

---

## 📁 Dosya Yapısı

```
ADL/
├── index.html                   # Ana sayfa HTML yapısı
├── style.css                    # Kurumsal CSS stil dosyası (Vanilla CSS)
├── script.js                    # Etkileşimler, toast bildirimleri ve görsel değiştirici
├── .gitignore                   # Git yoksayma kuralları
├── README.md                    # Proje dokümantasyonu
└── assets/
    └── images/
        ├── logo.jpg             # Orijinal kurumsal logo (#360c17 zemin)
        ├── logo-header.jpg      # Header için optimize edilmiş logo
        ├── logo-transparent.png # Şeffaf arka planlı PNG versiyonu
        ├── istanbul-night.jpg   # Gece Boğaz Köprüsü görseli
        ├── istanbul-twilight.jpg# Alacakaranlık şehir manzarası
        └── istanbul-panorama.jpg# Yüksek çözünürlüklü Boğaziçi panoraması
```

---

## 🚀 Yerel Olarak Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için:

1. `index.html` dosyasını doğrudan herhangi bir tarayıcıda çift tıklayarak açabilirsiniz.
2. Veya bir yerel web sunucusu ile:
```bash
python3 -m http.server 8080
```
Tarayıcınızda `http://localhost:8080` adresine gidin.

---

## 🌐 GitHub Pages ile Canlıya Alma

Bu repoyu GitHub Pages ile anında ücretsiz yayına almak için:
1. GitHub reponuzda **Settings** > **Pages** sekmesine gidin.
2. **Branch** kısmından `main` (veya `master`) dalını ve `/ (root)` dizinini seçip **Save** butonuna tıklayın.
3. Birkaç saniye içinde siteniz `https://<kullanici-adiniz>.github.io/ADL/` adresinde canlıya geçecektir.

---

&copy; 2026 ADL Law & Consultancy. Tüm Hakları Saklıdır.
