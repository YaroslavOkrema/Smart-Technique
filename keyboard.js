const keyboards = [
    {
      photo: "images/keyboards/1.jpg",
      hoverPhoto: "images/keyboards/1.1.jpg",
      title: "Клавіатура дротова Hator Starfall Outemu Red",
      features: "Тип клавіатуры: Механічна Підключення: Дротове USB 3.2 Форма: Повнорозмірна",
      price: "1 999₴",
      subtitle: "В наявності",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/2.jpg",
      hoverPhoto: "images/keyboards/2.2.jpg",
      title: "Клавіатура дротова HATOR Rockfall EVO TKL",
      features: "Тип клавіатуры: Мембрана Підключення: Дротове USB 3.2 Форма: Ергономічна",
      price: "2 999₴",
      subtitle: "В наявності",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/3.jpg",
      hoverPhoto: "images/keyboards/3.3.jpg",
      title: "Клавіатура дротова A4Tech Bloody S98 Naraka",
      features: "Тип клавіатуры: Механічна Підключення: Дротове USB 3.2 Форма: Повнорозмірна",
      price: "3 999₴",
      subtitle: "В наявності",
      brand: "A4Tech"
    },
    {
      photo: "images/keyboards/4.jpg",
      hoverPhoto: "images/keyboards/4.4.jpg",
      title: "Клавіатура дротова Logitech G512 Carbon",
      features: "Тип клавіатуры: Мембрана Підключення: Дротове USB 3.2 Форма: Ергономічна",
      price: "4 999₴",
      subtitle: "В наявності",
      brand: "Logitech"
    },
    {
      photo: "images/keyboards/5.jpg",
      hoverPhoto: "images/keyboards/5.5.jpg",
      title: "Клавіатура дротова Hator Skyfall TKL PRO",
      features: "Тип клавіатуры: Механічна Підключення: Дротове USB 3.2 Форма: Повнорозмірна",
      price: "4 999₴",
      subtitle: "В наявності",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/6.jpg",
      hoverPhoto: "images/keyboards/6.6.jpg",
      title: "Клавіатура дротова HyperX Alloy Origins Core",
      features: "Тип клавіатуры: Мембрана Підключення: Дротове USB 3.2 Форма: Ергономічна",
      price: "3 500₴",
      subtitle: "В наявності",
      brand: "HyperX"
    },
    {
      photo: "images/keyboards/7.jpg",
      hoverPhoto: "images/keyboards/7.7.jpg",
      title: "Клавіатура дротова Hator Skyfall TKL PRO",
      features: "Тип клавіатуры: Механічна Підключення: Дротове USB 3.2 Форма: Повнорозмірна",
      price: "3 999₴",
      subtitle: "В наявності",
      brand: "Hator"
    },
    {
      photo: "images/keyboards/8.jpg",
      hoverPhoto: "images/keyboards/8.8.jpg",
      title: "Клавіатура дротова HyperX Alloy Origins 60 HX",
      features: "Тип клавіатуры: Мембрана Підключення: Дротове USB 3.2 Форма: Ергономічна",
      price: "4 299₴",
      subtitle: "В наявності",
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

  let features = document.createElement('div');
  features.classList.add('product__features');
  features.textContent = keyboard.features;
  item.appendChild(features);

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
    filterKeyboardsByBrand('');
  } else {
    filterKeyboardsByBrand(selectedBrands);
  }
}

