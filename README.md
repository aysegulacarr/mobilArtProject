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
 -Kullanıcı verileri Firebase Firestore veritabanında tutulur
# konfigiruasyon
Harvars art api erişim alınıp kullanılabilir https://github.com/harvardartmuseums/api-docs#access-to-the-api
# Uygulama Kullanımı

   - Girişi için login ekranından kayıtlı kullanıcı maili ve şifresi alınır.
   - Kullanıcı bilgileri doğru ise uygulamaya giriş yapılır.
   - Günlük güncellenen eserlerden rastgele 10 tanesine ulaşılır.
   - Eser incelenmek istenirse üstüne tıklandığında detaylar saayfasında eğer kaydı varsa hangi kültüre ait olduğu,yılı, eser sahibi gibi bilgiler gösterilir.
   - Detaylar sayfasınının en altındaki palet iconuna çift tıklandığında eser sahibinin diğer eserlerine ek sekma açarak yönlendirir.
