const laptops = [
    {
      img: "images/laptops/1.jpg",
      hoverImg: "images/laptops/1.1.jpg",
      title: "Ноутбук Apple MacBook Air 13\" M1 256GB 2020",
      price: "39 999₴",
      availability: "Есть в наличии",
      brand: "Apple"
    },
    {
      img: "images/laptops/2.jpg",
      hoverImg: "images/laptops/2.2.jpg",
      title: "Ноутбук ASUS TUF Gaming A15 Graphite Black",
      price: "35 999₴",
      availability: "Есть в наличии",
      brand: "ASUS"
    },
    {
      img: "images/laptops/3.jpg",
      hoverImg: "images/laptops/3.3.jpg",
      title: "Ноутбук Acer Nitro 5 Shale Black",
      price: "45 999₴",
      availability: "Есть в наличии",
      brand: "Acer"
    },
    {
      img: "images/laptops/4.jpg",
      hoverImg: "images/laptops/4,4.jpg",
      title: "Ноутбук Apple MacBook Air 13.6\" M2 256GB 2022",
      price: "57 999₴",
      availability: "Есть в наличии",
      brand: "Apple"
    },
    {
      img: "images/laptops/5.jpg",
      hoverImg: "images/laptops/5.5.jpg",
      title: "Ноутбук Acer Predator Helios 300 PH317-55-55X1",
      price: "67 999₴",
      availability: "Есть в наличии",
      brand: "Acer"
    },
    {
      img: "images/laptops/6.jpg",
      hoverImg: "images/laptops/6.6.jpg",
      title: "Ноутбук ASUS ROG Zephyrus Duo GX650PZ",
      price: "178 500₴",
      availability: "Есть в наличии",
      brand: "ASUS"
    },
    {
      img: "images/laptops/7.jpg",
      hoverImg: "images/laptops/7.7.jpg",
      title: "Ноутбук Apple MacBook Pro 16\" Pro 512GB 2023",
      price: "124 999₴",
      availability: "Есть в наличии",
      brand: "Apple"
    },
    {
      img: "images/laptops/8.jpg",
      hoverImg: "images/laptops/8.8.jpg",
      title: "Ноутбук MSI Raider GE78 HX 13V",
      price: "198 299₴",
      availability: "Есть в наличии",
      brand: "MSI"
    }
  ];

  var originalLaptops = laptops.slice();

function filterLaptopsByBrand(brands) {
  var laptopContainer = document.getElementById('laptopContainer');
  laptopContainer.innerHTML = '';

  var filteredLaptops;
  if (brands.length === 0) {
    filteredLaptops = originalLaptops.slice();
  } else {
    filteredLaptops = originalLaptops.filter(function(laptop) {
      return brands.includes(laptop.brand);
    });
  }

  for (var i = 0; i < filteredLaptops.length; i++) {
    var laptopItem = createLaptopItem(filteredLaptops[i]);
    laptopContainer.appendChild(laptopItem);
  }
}

function createLaptopItem(laptop) {
    var item = document.createElement('div');
    item.classList.add('product__item');
  
    var photo = document.createElement('img');
    photo.classList.add('product__photo');
    photo.src = laptop.img;
    photo.alt = 'Laptop';
    item.appendChild(photo);
  
    var hoverPhoto = document.createElement('img');
    hoverPhoto.classList.add('photo__hover');
    hoverPhoto.src = laptop.hoverImg;
    hoverPhoto.alt = 'Laptop';
    item.appendChild(hoverPhoto);
  
    var title = document.createElement('div');
    title.classList.add('product__title');
    title.textContent = laptop.title;
    item.appendChild(title);
  
    var price = document.createElement('div');
    price.classList.add('product__price');
    price.textContent = laptop.price;
    item.appendChild(price);
  
    var subtitle = document.createElement('div');
    subtitle.classList.add('product__subtitle');
    subtitle.textContent = laptop.subtitle;
    item.appendChild(subtitle);
  
    var button = document.createElement('button');
    button.classList.add('product__btn');
    button.textContent = 'Купить';
    item.appendChild(button);
  
    return item;
  }
  

function handleCheckboxChange() {
  var checkboxes = document.getElementsByName('brandCheckbox');
  var selectedBrands = [];

  for (var i = 0; i < checkboxes.length; i++) {
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

function handleResetFilter() {
  var checkboxes = document.getElementsByName('brandCheckbox');

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  filterLaptopsByBrand([]);
}
