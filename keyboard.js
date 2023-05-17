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

  var originalKeyboards = keyboards.slice(); // Создаем копию исходного массива клавиатур

function filterKeyboardsByBrand(brand) {
  var keyboardContainer = document.getElementById('keyboardContainer');
  keyboardContainer.innerHTML = '';

  var filteredKeyboards;
  if (brand === '') {
    filteredKeyboards = originalKeyboards.slice(); // Используем копию исходного массива
  } else {
    filteredKeyboards = originalKeyboards.filter(function(keyboard) {
      return keyboard.brand === brand;
    });
  }

  for (var i = 0; i < filteredKeyboards.length; i++) {
    var keyboardItem = createKeyboardItem(filteredKeyboards[i]);
    keyboardContainer.appendChild(keyboardItem);
  }
}
  
  function createKeyboardItem(keyboard) {
    var item = document.createElement('div');
    item.classList.add('product__item');
  
    var photo = document.createElement('img');
    photo.classList.add('product__photo');
    photo.src = keyboard.photo;
    photo.alt = 'Keyboards';
    item.appendChild(photo);
  
    var hoverPhoto = document.createElement('img');
    hoverPhoto.classList.add('photo__hover');
    hoverPhoto.src = keyboard.hoverPhoto;
    hoverPhoto.alt = 'Keyboards';
    item.appendChild(hoverPhoto);
  
    var title = document.createElement('div');
    title.classList.add('product__title');
    title.textContent = keyboard.title;
    item.appendChild(title);
  
    var price = document.createElement('div');
    price.classList.add('product__price');
    price.textContent = keyboard.price;
    item.appendChild(price);
  
    var subtitle = document.createElement('div');
    subtitle.classList.add('product__subtitle');
    subtitle.textContent = keyboard.subtitle;
    item.appendChild(subtitle);
  
    var button = document.createElement('button');
    button.classList.add('product__btn');
    button.textContent = 'Купить';
    item.appendChild(button);
  
    return item;
}

function handleCheckboxChange() {
    var checkboxes = document.getElementsByName('brandCheckbox');
    var selectedBrand = '';
  
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedBrand = checkboxes[i].value;
        break;
      }
    }
  
    filterKeyboardsByBrand(selectedBrand);
  }
  
  function handleResetFilter() {
    var checkboxes = document.getElementsByName('brandCheckbox');
  
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  
    filterKeyboardsByBrand('');
  }

  
