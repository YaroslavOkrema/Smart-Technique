const monitors = [
    {
      photo: "images/monitors/1.jpg",
      hoverPhoto: "images/monitors/1.1.jpg",
      title: "Монітор 24.5\" BenQ Zowie XL2546K",
      features: "Час реакції матриці: 1 мс (TN) Яскравість дисплея: 320 кд/м² Діагональ дисплея: 24.5",
      price: "21 500₴",
      subtitle: "В наявності",
      brand: "BenQ"
    },
    {
      photo: "images/monitors/2.jpg",
      hoverPhoto: "images/monitors/2.2.jpg",
      title: "Монітор BenQ 24\" XL2411P Grey 144Hz",
      features: "Час реакції матриці: 2 мс (TN) Яскравість дисплея: 300 кд/м² Діагональ дисплея: 24",
      price: "9 200₴",
      subtitle: "В наявності",
      brand: "BenQ"
    },
    {
      photo: "images/monitors/3.jpg",
      hoverPhoto: "images/monitors/3.3.jpg",
      title: "Монітор 23.8\" AOC 24G2SAE/BK - 165 Hz",
      features: "Час реакції матриці: 1 мс (IPS) Яскравість дисплея: 320 кд/м² Діагональ дисплея: 24.5",
      price: "6 200₴",
      subtitle: "В наявності",
      brand: "AOC"
    },
    {
      photo: "images/monitors/4.jpg",
      hoverPhoto: "images/monitors/4.4.jpg",
      title: "Монітор 23.8\" Asus VG249Q - Adaptive-Sync",
      features: "Час реакції матриці: 3 мс (TN) Яскравість дисплея: 290 кд/м² Діагональ дисплея: 22",
      price: "7 999₴",
      subtitle: "В наявності",
      brand: "Asus"
    },
    {
      photo: "images/monitors/5.jpg",
      hoverPhoto: "images/monitors/5.5.jpg",
      title: "Монітор 34\" QUBE Overlord C34UQ144",
      features: "Час реакції матриці: 1 мс (IPS) Яскравість дисплея: 320 кд/м² Діагональ дисплея: 30",
      price: "14 999₴",
      subtitle: "В наявності",
      brand: "QUBE"
    },
    {
      photo: "images/monitors/6.jpg",
      hoverPhoto: "images/monitors/6.6.jpg",
      title: "Монітор 26.9\" Samsung Odyssey G7 C27G75TQSI",
      features: "Час реакції матриці: 1 мс (TN) Яскравість дисплея: 320 кд/м² Діагональ дисплея: 24.5",
      price: "19 500₴",
      subtitle: "В наявності",
      brand: "Samsung"
    },
    {
      photo: "images/monitors/7.jpg",
      hoverPhoto: "images/monitors/7.7.jpg",
      title: "Монітор 23.8\" Gigabyte G24F 2 Gaming Monitor",
      features: "Час реакції матриці: 2 мс (TN) Яскравість дисплея: 320 кд/м² Діагональ дисплея: 22",
      price: "8 999₴",
      subtitle: "В наявності",
      brand: "Gigabyte"
    },
    {
      photo: "images/monitors/8.jpg",
      hoverPhoto: "images/monitors/8.8.jpg",
      title: "Монітор 23.8\" AOC 24G2SPU/BK",
      features: "Час реакції матриці: 1 мс (IPS) Яскравість дисплея: 320 кд/м² Діагональ дисплея: 24",
      price: "7 299₴",
      subtitle: "В наявності",
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

  let features = document.createElement('div');
  features.classList.add('product__features');
  features.textContent = monitor.features;
  item.appendChild(features);

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
      filterMonitorsByBrand('');
    } else {
      filterMonitorsByBrand(selectedBrands);
    }
}