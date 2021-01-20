# mobilArtApp
# Sanat Eseri Tanıtım Uygulaması
DailyArt uygulamasından esinlenilmiştir.Harward Sanat Müzesi eserlerini incelenmesini sağlar.
# Kurulum
Projeyi çalıştırmak için gerekli komutlar sırasıyla verilmiştir
indirmek için:

    git clone https://github.com/aysegulacarr/mobilArtApp.git
npm indirmek için:

    npm install
    
ionic çalıştırmak için:

    ionic serve
    
# Temel Bilgiler

 - Kullanıcı verileri Firebase Firestore veritabanında tutulur
 - Harvar museum api kullanılarak kullanıcıya eserler ve bilgileri sunulur.
 
# konfigiruasyon

Harvars art api erişim alınıp kullanılabilir https://github.com/harvardartmuseums/api-docs#access-to-the-api

Cordava eklentisi eklentisi için:
 
        ionic cordova plugin add cordova-plugin-inappbrowser
        
        
        npm install @ionic-native/in-app-browser
        
# Uygulama Kullanımı

   - Girişi için login ekranından kayıtlı kullanıcı maili ve şifresi alınır.
   - Kullanıcı bilgileri doğru ise uygulamaya giriş yapılır.
   - Günlük güncellenen eserlerden rastgele 10 tanesine ulaşılır.
   - Eser incelenmek istenirse üstüne tıklandığında detaylar saayfasında eğer kaydı varsa hangi kültüre ait olduğu,yılı, eser sahibi gibi bilgiler gösterilir.
   - Detaylar sayfasınının en altındaki palet iconuna çift tıklandığında eser sahibinin diğer eserlerine ek sekme açarak yönlendirir.
   
# Özellikler
  - Firebase Authentication
  - Firestore
  - İonic Storage
  - ngModel
  - Routing
  - Reactive form
  - In App Browser

# Ekran görüntüleri
<img src="screenShot/login.jpg" width="200" height="350" />
<img src="screenShot/feed.jpg" width="200" height="350" />
<img src="screenShot/details.jpg" width="200" height="350" />
<img src="screenShot/person.jpg" width="200" height="350" />
