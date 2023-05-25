const keyboards = [
    {
      photo: "images/keyboards/1.jpg",
      hoverPhoto: "images/keyboards/1.1.jpg",
      title: "Клавиатура проводная Hator Starfall Outemu Red",
      price: "1 999₴",
      subtitle: "Есть в наличии",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/2.jpg",
      hoverPhoto: "images/keyboards/2.2.jpg",
      title: "Клавиатура проводная HATOR Rockfall EVO TKL",
      price: "2 999₴",
      subtitle: "Есть в наличии",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/3.jpg",
      hoverPhoto: "images/keyboards/3.3.jpg",
      title: "Клавиатура проводная A4Tech Bloody S98 Naraka",
      price: "3 999₴",
      subtitle: "Есть в наличии",
      brand: "A4Tech"
    },
    {
      photo: "images/keyboards/4.jpg",
      hoverPhoto: "images/keyboards/4.4.jpg",
      title: "Клавиатура проводная Logitech G512 Carbon",
      price: "4 999₴",
      subtitle: "Есть в наличии",
      brand: "Logitech"
    },
    {
      photo: "images/keyboards/5.jpg",
      hoverPhoto: "images/keyboards/5.5.jpg",
      title: "Клавиатура беспроводная Hator Skyfall TKL PRO",
      price: "4 999₴",
      subtitle: "Есть в наличии",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/6.jpg",
      hoverPhoto: "images/keyboards/6.6.jpg",
      title: "Клавиатура проводная HyperX Alloy Origins Core",
      price: "3 500₴",
      subtitle: "Есть в наличии",
      brand: "HyperX"
    },
    {
      photo: "images/keyboards/7.jpg",
      hoverPhoto: "images/keyboards/7.7.jpg",
      title: "Клавиатура проводная Hator Skyfall TKL PRO",
      price: "3 999₴",
      subtitle: "Есть в наличии",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/8.jpg",
      hoverPhoto: "images/keyboards/8.8.jpg",
      title: "Клавиатура проводная HyperX Alloy Origins 60 HX",
      price: "4 299₴",
      subtitle: "Есть в наличии",
      brand: "HyperX"
    }
  ];

let originalKeyboards = keyboards.slice();

function filterKeyboardsByBrand(brands) {
  let keyboardContainer = document.getElementById('keyboardContainer');
  keyboardContainer.innerHTML = '';

  let filteredKeyboards;
  if (brands.length === 0) {
    filteredKeyboards = originalKeyboards.slice();
  } else {
    filteredKeyboards = originalKeyboards.filter(function(keyboard) {
      return brands.includes(keyboard.brand);
    });
  }

  for (let i = 0; i < filteredKeyboards.length; i++) {
    var keyboardItem = createKeyboardItem(filteredKeyboards[i]);
    keyboardContainer.appendChild(keyboardItem);
  }
}

function createKeyboardItem(keyboard) {
  let item = document.createElement('div');
  item.classList.add('product__item');

  let photo = document.createElement('img');
  photo.classList.add('product__photo');
  photo.src = keyboard.photo;
  photo.alt = 'Keyboards';
  item.appendChild(photo);

  let hoverPhoto = document.createElement('img');
  hoverPhoto.classList.add('photo__hover');
  hoverPhoto.src = keyboard.hoverPhoto;
  hoverPhoto.alt = 'Keyboards';
  item.appendChild(hoverPhoto);

  let title = document.createElement('div');
  title.classList.add('product__title');
  title.textContent = keyboard.title;
  item.appendChild(title);

  let price = document.createElement('div');
  price.classList.add('product__price');
  price.textContent = keyboard.price;
  item.appendChild(price);

  let subtitle = document.createElement('div');
  subtitle.classList.add('product__subtitle');
  subtitle.textContent = keyboard.subtitle;
  item.appendChild(subtitle);

  let button = document.createElement('a');
  button.classList.add('product__btn');
  button.href = 'order.html'; 
  button.textContent = 'Купить';
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
    filterKeyboardsByBrand('');
  } else {
    filterKeyboardsByBrand(selectedBrands);
  }
}

