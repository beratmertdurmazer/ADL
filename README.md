# ADL Law & Consultancy - Coming Soon Web Platform

Prestijli hukuk ve danışmanlık bürosu **ADL Law & Consultancy** için özel olarak tasarlanmış, White & Case referans mimarisine ve kurumsal kimlik standartlarına tam uyumlu tek sayfalık hazırlık aşaması (Coming Soon) web sitesi.

---

## 🏛️ Tasarım ve Fonksiyonel Özellikler

- **Kurumsal Renk Entegrasyonu (`#360c17`):** Header ve marka alanı, ADL logosunun zemin rengiyle (`#360c17`) birebir eşleştirilmiştir. Böylece logo hiçbir kenarlık veya sırıtma olmadan kusursuz bir şekilde arayüze entegre olur.
- **İki Dilli Yapı (Türkçe & İngilizce):**
  - Sayfa varsayılan olarak **Türkçe** açılır.
  - Header'da ve mobil menüde yer alan **TR | EN** dil seçici ile sayfa yenilenmeden tüm metinler, menüler, butonlar ve bildirimler anında Türkçe/İngilizce arasında değiştirilebilir.
- **Kurumsal Menü Yapısı:**
  - **Ekibimiz** *(Our Team)*
  - **Çalışma Alanlarımız** *(Practice Areas)*
  - **Kariyer** *(Careers)*
  - **İletişim** *(Contact)*
  - Arama butonu *(Search)*
  - Menü linkleri tıklandığında sayfadan ayrılmayacak şekilde tasarlanmış olup, kullanıcıyı bilgilendiren zarif ve çok dilli bir **"Hazırlık Aşaması / Coming Soon"** toast bildirimi gösterir.
- **Yüzen (Floating) Ofis Bilgi Kartı:**
  - "İstanbul" ana başlığı ve ADL Law & Consultancy kurumsal unvanı.
  - **Resmi Adres:** Acıbadem, Akasya Koru Kule, B3C 117, Üsküdar / İstanbul.
  - **Telefon:** `+90 539 571 53 71` (Tek tıkla arama ve kopyalama desteği).
  - **E-Posta:** `info@adllawconsultancy.com` (Tek tıkla e-posta gönderme ve kopyalama).
  - Vurgulanmış "Website Coming Soon / Web Sitemiz Çok Yakında Yayında" bildirim alanı.
- **Otomatik 10 Saniyelik Arka Plan Döngüsü:**
  - Sayfa ilk açıldığında otomatik olarak **Gündüz fotoğrafı** açılır.
  - Her **10 saniyede bir** sırasıyla Gündüz &rarr; İkindi &rarr; Gece Boğaz fotoğrafları arasında yumuşak fade geçişiyle otomatik döngü sağlanır.
  - Kullanıcı alt widget'tan manuel seçim yaptığında da anında o görsele geçer.
- **Mobil & Tablet Uyumu (Responsive):**
  - Mobilde görsel değiştirici widget 100% ortalanmış ve butonların üzerine binmeyecek şekilde düzenlenmiştir.
  - Modern hamburger menü çekmecesi.

---

## 📁 Dosya Yapısı

```
ADL/
├── index.html                   # Ana sayfa HTML yapısı (Çok dilli altyapı)
├── style.css                    # Kurumsal CSS stil dosyası (Vanilla CSS)
├── script.js                    # Çok dillilik motoru, 10s otomatik slayt ve etkileşimler
├── .gitignore                   # Git yoksayma kuralları
├── README.md                    # Proje dokümantasyonu
└── assets/
    └── images/
        ├── logo.jpg             # Orijinal kurumsal logo (#360c17 zemin)
        ├── logo-header.jpg      # Header için optimize edilmiş logo
        ├── logo-transparent.png # Şeffaf arka planlı PNG versiyonu
        ├── istanbul-panorama.jpg# Gündüz Ortaköy & Boğaziçi panoraması (Varsayılan)
        ├── istanbul-twilight.jpg# İkindi / Gün batımı şehir manzarası
        └── istanbul-night.jpg   # Gece Boğaz Köprüsü görseli
```

---

## 🌐 Canlı Yayın & GitHub

- **GitHub Deposu:** [github.com/beratmertdurmazer/ADL](https://github.com/beratmertdurmazer/ADL)
- **Canlı Yayın (GitHub Pages):** [beratmertdurmazer.github.io/ADL](https://beratmertdurmazer.github.io/ADL/)

---

&copy; 2026 ADL Law & Consultancy. Tüm Hakları Saklıdır.
