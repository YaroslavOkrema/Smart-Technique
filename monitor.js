const monitors = [
    {
      photo: "images/monitors/1.jpg",
      hoverPhoto: "images/monitors/1.1.jpg",
      title: "Монитор 24.5\" BenQ Zowie XL2546K",
      price: "21 500₴",
      subtitle: "Есть в наличии",
      brand: "BenQ"
    },
    {
      photo: "images/monitors/2.jpg",
      hoverPhoto: "images/monitors/2.2.jpg",
      title: "Монитор BenQ 24\" XL2411P Grey 144Hz",
      price: "9 200₴",
      subtitle: "Есть в наличии",
      brand: "BenQ"
    },
    {
      photo: "images/monitors/3.jpg",
      hoverPhoto: "images/monitors/3.3.jpg",
      title: "Монитор 23.8\" AOC 24G2SAE/BK - 165 Hz",
      price: "6 200₴",
      subtitle: "Есть в наличии",
      brand: "AOC"
    },
    {
      photo: "images/monitors/4.jpg",
      hoverPhoto: "images/monitors/4.4.jpg",
      title: "Монитор 23.8\" Asus VG249Q - Adaptive-Sync",
      price: "7 999₴",
      subtitle: "Есть в наличии",
      brand: "Asus"
    },
    {
      photo: "images/monitors/5.jpg",
      hoverPhoto: "images/monitors/5.5.jpg",
      title: "Монитор 34\" QUBE Overlord C34UQ144",
      price: "14 999₴",
      subtitle: "Есть в наличии",
      brand: "QUBE"
    },
    {
      photo: "images/monitors/6.jpg",
      hoverPhoto: "images/monitors/6.6.jpg",
      title: "Монитор 26.9\" Samsung Odyssey G7 C27G75TQSI",
      price: "19 500₴",
      subtitle: "Есть в наличии",
      brand: "Samsung"
    },
    {
      photo: "images/monitors/7.jpg",
      hoverPhoto: "images/monitors/7.7.jpg",
      title: "Монитор 23.8\" Gigabyte G24F 2 Gaming Monitor",
      price: "8 999₴",
      subtitle: "Есть в наличии",
      brand: "Gigabyte"
    },
    {
      photo: "images/monitors/8.jpg",
      hoverPhoto: "images/monitors/8.8.jpg",
      title: "Монитор 23.8\" AOC 24G2SPU/BK",
      price: "7 299₴",
      subtitle: "Есть в наличии",
      brand: "AOC"
    }
  ];

  let originalMonitors = monitors.slice();

  function filterMonitorsByBrand(brands) {
    let monitorContainer = document.getElementById('monitorContainer');
    monitorContainer.innerHTML = '';
  
    let filteredMonitors;
    if (brands.length === 0) {
      filteredMonitors = originalMonitors.slice();
    } else {
      filteredMonitors = originalMonitors.filter(function(monitor) {
        return brands.includes(monitor.brand);
      });
    }
  
    for (let i = 0; i < filteredMonitors.length; i++) {
      let monitorItem = createMonitorItem(filteredMonitors[i]);
      monitorContainer.appendChild(monitorItem);
    }
  }

function createMonitorItem(monitor) {
  let item = document.createElement('div');
  item.classList.add('product__item');

  let photo = document.createElement('img');
  photo.classList.add('product__photo');
  photo.src = monitor.photo;
  photo.alt = 'Monitors';
  item.appendChild(photo);

  let hoverPhoto = document.createElement('img');
  hoverPhoto.classList.add('photo__hover');
  hoverPhoto.src = monitor.hoverPhoto;
  hoverPhoto.alt = 'Monitors';
  item.appendChild(hoverPhoto);

  let title = document.createElement('div');
  title.classList.add('product__title');
  title.textContent = monitor.title;
  item.appendChild(title);

  let price = document.createElement('div');
  price.classList.add('product__price');
  price.textContent = monitor.price;
  item.appendChild(price);

  let subtitle = document.createElement('div');
  subtitle.classList.add('product__subtitle');
  subtitle.textContent = monitor.subtitle;
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
      filterMonitorsByBrand('');
    } else {
      filterMonitorsByBrand(selectedBrands);
    }
}