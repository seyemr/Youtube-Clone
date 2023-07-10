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