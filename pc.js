const computers = [
    {
      image: "images/pc/1.jpg",
      hoverImage: "images/pc/1.1.jpg",
      title: "Комп'ютер Artline Gaming (X43v31)",
      features: "Процесор: AMD 6-core Ryzen 5 3300 Відеокарта: GeForce GTX 1650 Оперативна пам'ять: 16 ГБ",
      price: "27 500₴",
      subtitle: "В наявності",
      brand: "Artline"
    },
    {
      image: "images/pc/2.jpg",
      hoverImage: "images/pc/2.2.jpg",
      title: "Комп'ютер COBRA Advanced",
      features: "Процесор: AMD 6-core Ryzen 5 3600 Відеокарта:  Palit GeForce RTX 3050 Оперативна пам'ять: 16 ГБ",
      price: "29 200₴",
      subtitle: "В наявності",
      brand: "COBRA"
    },
    {
      image: "images/pc/3.jpg",
      hoverImage: "images/pc/3.3.jpg",
      title: "Комп'ютер ARTLINE Gaming X77 v80",
      features: "Процесор: AMD 6-core Ryzen 7 3600 Відеокарта: GeForce GTX 2080 Оперативна пам'ять: 32 ГБ",
      price: "81 200₴",
      subtitle: "В наявності",
      brand: "Artline"
    },
    {
      image: "images/pc/4.jpg",
      hoverImage: "images/pc/4.4.jpg",
      title: "Комп'ютер ARTLINE Gaming SAMURAI",
      features: "Процесор: AMD 6-core Ryzen 9 5900 Відеокарта:  Palit GeForce RTX 2050 Оперативна пам'ять: 32 ГБ",
      price: "122 999₴",
      subtitle: "В наявності",
      brand: "Artline"
    },
    {
      image: "images/pc/5.jpg",
      hoverImage: "images/pc/5.5.jpg",
      title: "Комп'ютер ARTLINE Gaming TUF v62Win",
      features: "Процесор: AMD 6-core Ryzen 7 3600 Відеокарта: GeForce GTX 2080 Оперативна пам'ять: 16 ГБ",
      price: "85 999₴",
      subtitle: "В наявності",
      brand: "Artline"
    },
    {
      image: "images/pc/6.jpg",
      hoverImage: "images/pc/6.6.jpg",
      title: "Комп'ютер ARTLINE Overlord VALHALLA",
      features: "Процесор: AMD 8-core Ryzen 9 7900 Відеокарта:  Palit GeForce RTX 3050 Оперативна пам'ять: 64 ГБ",
      price: "326 500₴",
      subtitle: "В наявності",
      brand: "Artline"
    },
    {
      image: "images/pc/7.jpg",
      hoverImage: "images/pc/7.7.jpg",
      title: "Комп'ютер ARTLINE Overlord",
      features: "Процесор: 8-core Ryzen 9 7900 Відеокарта:  Palit GeForce RTX 3050 Оперативна пам'ять: 64 ГБ",
      price: "283 999₴",
      subtitle: "В наявності",
      brand: "Artline"
    },
    {
      image: "images/pc/8.jpg",
      hoverImage: "images/pc/8.8.jpg",
      title: "Комп'ютер ARTLINE Overlord P99",
      features: "Процесор: 8-core Ryzen 9 7900 Відеокарта:  Palit GeForce RTX 3050 Оперативна пам'ять: 64 ГБ",
      price: "295 299₴",
      subtitle: "В наявності",
      brand: "Artline"
    }
  ];

  let originalComputers = computers.slice();

  function filterComputersByBrand(brands) {
    let computerContainer = document.getElementById('computerContainer');
    computerContainer.innerHTML = '';
  
    let filteredComputers;
    if (brands.length === 0) {
      filteredComputers = originalComputers.slice();
    } else {
      filteredComputers = originalComputers.filter(function(computer) {
        return brands.includes(computer.brand);
      });
    }
  
    for (let i = 0; i < filteredComputers.length; i++) {
      let computerItem = createComputerItem(filteredComputers[i]);
      computerContainer.appendChild(computerItem);
    }
  }
  
  function createComputerItem(computer) {
    let item = document.createElement('div');
    item.classList.add('product__item');
  
    let photo = document.createElement('img');
    photo.classList.add('product__photo');
    photo.src = computer.image;
    photo.alt = 'Computers';
    item.appendChild(photo);
  
    let hoverPhoto = document.createElement('img');
    hoverPhoto.classList.add('photo__hover');
    hoverPhoto.src = computer.hoverImage;
    hoverPhoto.alt = 'Computers';
    item.appendChild(hoverPhoto);
  
    let title = document.createElement('div');
    title.classList.add('product__title');
    title.textContent = computer.title;
    item.appendChild(title);

    let features = document.createElement('div');
    features.classList.add('product__features');
    features.textContent = computer.features;
    item.appendChild(features);
  
    let price = document.createElement('div');
    price.classList.add('product__price');
    price.textContent = computer.price;
    item.appendChild(price);
  
    let subtitle = document.createElement('div');
    subtitle.classList.add('product__subtitle');
    subtitle.textContent = computer.subtitle;
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
      filterComputersByBrand([]);
    } else {
      filterComputersByBrand(selectedBrands)
    }
  }
  
  