+ imagelink = src/assets/image

+ 4 pages:
    - start_page
    - first_input_page 
    - seconde_input_page
    - output_page
+ CODE HTML,SCSS (CSS) ,TypeSCRIPT (Java Script) in src/pages/name_page
  - File HTML: giao diện <ion-content> = <body>
  - File SCSS: Cải tiến của css
  - File typeScript: Giống JS, sử dụng dữ liệu tĩnh ở src/provider/data-service

+ Dữ liệu json ở src/provider/data-service
Ex: 

 this.list_spnt2 = [
      {id:0,text:"ECO K1",dophu:10,pack:{p1:17, p2:5}, type:"lit",cost:{p1:1345,p2:415}, image:"assets/image/EcoK11.png"},
      {id:1,text:"Gloss K1",dophu:12,pack:{p1:5, p2:1}, type:"lit",cost:{p1:1280,p2:268}, image:"assets/image/Gloss K1.png"},
      {id:2,text:"Super Gloss K1",dophu:14,pack:{p1:5, p2:1}, type:"lit",cost:{p1:1600,p2:330}, image:"assets/image/Super Gloss K1.png"}]
      
      id, tên, độ phủ, các loại gói, loại lit, kg, giá từng gói, link ảnh

Code build cho web ở trong www/index.html
