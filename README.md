# Youtube Clone
<img src="/gif/youtube.gif"/>

# YouTube Clone

Bu, React ve ilgili kütüphaneleri kullanarak oluşturulmuş bir YouTube klonu projesidir. Bu proje, YouTube'un temel işlevlerini taklit etmek için tasarlanmış basit bir kullanıcı arayüzü sunar.

# Özellikler
Ana sayfa üzerinde popüler videoları gösterir.
Videoları kategorilere göre filtreleme.
Videoları arama.
Videoları oynatma, duraklatma, ileri sarma ve geri sarma özellikleri.
Beğenme ve beğenmeme işlemleri.
Abone olma ve abonelikten çıkma.

# Gereksinimler
Projenin çalışması için aşağıdaki yazılımların yüklü olması gerekmektedir:
- Node.js
- npm (Node Package Manager)


# Kütüphaneler

- reacr-icons
- react-router-dom
- tailwind (kurulum kendi sayfasında)
- axios
- millify 

# Yapılacaklar

- ``SideNav.jsx`` bileşenindekategorileri listele
- Seçilen kategori bilgisini bütün erişebilmesi 
- için Context yapısında tut

- Seçilen kategori state i her değiştiğinde ilgili kategoriye ait youtube video verisini çek 
- Bu veriyi `Feed.jsx` kullan ve her bir video objesi için ekrana kart bas. ` VideoCard.jsx` bas

- videolardan birini tıklanıldıgında kullanıcıyı o videonun id'sini parametre olarak içeren bir linke yönlendir.
- - `VideoCard.jsx` sayfasından urlden parametreyi al parametreyle beraber API ye video detayları için istek at API den gelen veriyi ekrana bas.