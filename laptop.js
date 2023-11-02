const laptops = [
    {
      img: "images/laptops/1.jpg",
      hoverImg: "images/laptops/1.1.jpg",
      title: "Ноутбук Apple MacBook Air 13\" M1 256GB 2020",
      features: "Процесор: Восьмиядерний Apple M1 Відеокарта:  Apple Інтегрована Оперативна пам'ять: 16 ГБ",
      price: "39 999₴",
      subtitle: "В наявності",
      brand: "Apple"
    },
    {
      img: "images/laptops/2.jpg",
      hoverImg: "images/laptops/2.2.jpg",
      title: "Ноутбук ASUS TUF Gaming A15 Graphite Black",
      features: "Процесор: AMD 6-core Ryzen 5 3600 Відеокарта: GeForce GTX 1650 Оперативна пам'ять: 16 ГБ",
      price: "35 999₴",
      subtitle: "В наявності",
      brand: "ASUS"
    },
    {
      img: "images/laptops/3.jpg",
      hoverImg: "images/laptops/3.3.jpg",
      title: "Ноутбук Acer Nitro 5 Shale Black",
      features: "Процесор: AMD 8-core Ryzen 7 3600  Відеокарта: GeForce GTX 1650 Оперативна пам'ять: 16 ГБ",
      price: "45 999₴",
      subtitle: "В наявності",
      brand: "Acer"
    },
    {
      img: "images/laptops/4.jpg",
      hoverImg: "images/laptops/4,4.jpg",
      title: "Ноутбук Apple MacBook Air 13.6\" M2 256GB 2022",
      features: "Процесор: Восьмиядерний Apple M2 Відеокарта:  Apple Інтегрована Оперативна пам'ять: 32 ГБ",
      price: "57 999₴",
      subtitle: "В наявності",
      brand: "Apple"
    },
    {
      img: "images/laptops/5.jpg",
      hoverImg: "images/laptops/5.5.jpg",
      title: "Ноутбук Acer Predator Helios 300 PH317-55-55X1",
      features: "Процесор: AMD 8-core Ryzen 7 5600  Відеокарта:  Palit GeForce RTX 2080 Оперативна пам'ять: 32 ГБ",
      price: "67 999₴",
      subtitle: "В наявності",
      brand: "Acer"
    },
    {
      img: "images/laptops/6.jpg",
      hoverImg: "images/laptops/6.6.jpg",
      title: "Ноутбук ASUS ROG Zephyrus Duo GX650PZ",
      features: "Процесор: AMD 10-core Ryzen 9 5600 Відеокарта:  Palit GeForce RTX 3050 Оперативна пам'ять: 64 ГБ",
      price: "178 500₴",
      subtitle: "В наявності",
      brand: "ASUS"
    },
    {
      img: "images/laptops/7.jpg",
      hoverImg: "images/laptops/7.7.jpg",
      title: "Ноутбук Apple MacBook Pro 16\" Pro 512GB 2023",
      features: "Процесор: Восьмиядерний Apple M5 Відеокарта:  Apple Інтегрована Оперативна пам'ять: 64 ГБ",
      price: "124 999₴",
      subtitle: "В наявності",
      brand: "Apple"
    },
    {
      img: "images/laptops/8.jpg",
      hoverImg: "images/laptops/8.8.jpg",
      title: "Ноутбук MSI Raider GE78 HX 13V",
      features: "Процесор: AMD 10-core Ryzen 9 5600 Відеокарта:  Palit GeForce RTX 3050 Оперативна пам'ять: 64 ГБ",
      price: "198 299₴",
      subtitle: "В наявності",
      brand: "MSI"
    }
  ];

  let originalLaptops = laptops.slice();

function filterLaptopsByBrand(brands) {
  let laptopContainer = document.getElementById('laptopContainer');
  laptopContainer.innerHTML = '';

  let filteredLaptops;
  if (brands.length === 0) {
    filteredLaptops = originalLaptops.slice();
  } else {
    filteredLaptops = originalLaptops.filter(function(laptop) {
      return brands.includes(laptop.brand);
    });
  }

  for (let i = 0; i < filteredLaptops.length; i++) {
    let laptopItem = createLaptopItem(filteredLaptops[i]);
    laptopContainer.appendChild(laptopItem);
  }
}

function createLaptopItem(laptop) {
    let item = document.createElement('div');
    item.classList.add('product__item');
  
    let photo = document.createElement('img');
    photo.classList.add('product__photo');
    photo.src = laptop.img;
    photo.alt = 'Laptop';
    item.appendChild(photo);
  
    let hoverPhoto = document.createElement('img');
    hoverPhoto.classList.add('photo__hover');
    hoverPhoto.src = laptop.hoverImg;
    hoverPhoto.alt = 'Laptop';
    item.appendChild(hoverPhoto);
  
    let title = document.createElement('div');
    title.classList.add('product__title');
    title.textContent = laptop.title;
    item.appendChild(title);

    let features = document.createElement('div');
    features.classList.add('product__features');
    features.textContent = laptop.features;
    item.appendChild(features);
  
    let price = document.createElement('div');
    price.classList.add('product__price');
    price.textContent = laptop.price;
    item.appendChild(price);
  
    let subtitle = document.createElement('div');
    subtitle.classList.add('product__subtitle');
    subtitle.textContent = laptop.subtitle;
    item.appendChild(subtitle);
  
    let button = document.createElement('a');
    button.classList.add('product__btn');
    button.href = 'order.html'; 
    button.textContent = 'Замовити';
    item.appendChild(button);
  
    return item;
  }
  

function handleCheckboxChange() {
  let checkboxes = document.getElementsByName('brandCheckbox');
  let selectedBrands = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedBrands.push(checkboxes[i].value);
    }
  }

  if (selectedBrands.length === 0) {
    filterLaptopsByBrand([]);
  } else {
    filterLaptopsByBrand(selectedBrands);
  }
}
