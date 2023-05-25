const computers = [
    {
      image: "images/pc/1.jpg",
      hoverImage: "images/pc/1.1.jpg",
      title: "Компьютер Artline Gaming (X43v31)",
      price: "27 500₴",
      subtitle: "Есть в наличии",
      brand: "Artline"
    },
    {
      image: "images/pc/2.jpg",
      hoverImage: "images/pc/2.2.jpg",
      title: "Компьютер COBRA Advanced",
      price: "29 200₴",
      subtitle: "Есть в наличии",
      brand: "COBRA"
    },
    {
      image: "images/pc/3.jpg",
      hoverImage: "images/pc/3.3.jpg",
      title: "Компьютер ARTLINE Gaming X77 v80",
      price: "81 200₴",
      subtitle: "Есть в наличии",
      brand: "Artline"
    },
    {
      image: "images/pc/4.jpg",
      hoverImage: "images/pc/4.4.jpg",
      title: "Компьютер ARTLINE Gaming SAMURAI",
      price: "122 999₴",
      subtitle: "Есть в наличии",
      brand: "Artline"
    },
    {
      image: "images/pc/5.jpg",
      hoverImage: "images/pc/5.5.jpg",
      title: "Компьютер ARTLINE Gaming TUF v62Win",
      price: "85 999₴",
      subtitle: "Есть в наличии",
      brand: "Artline"
    },
    {
      image: "images/pc/6.jpg",
      hoverImage: "images/pc/6.6.jpg",
      title: "Компьютер ARTLINE Overlord VALHALLA",
      price: "326 500₴",
      subtitle: "Есть в наличии",
      brand: "Artline"
    },
    {
      image: "images/pc/7.jpg",
      hoverImage: "images/pc/7.7.jpg",
      title: "Компьютер ARTLINE Overlord",
      price: "283 999₴",
      subtitle: "Есть в наличии",
      brand: "Artline"
    },
    {
      image: "images/pc/8.jpg",
      hoverImage: "images/pc/8.8.jpg",
      title: "Компьютер ARTLINE Overlord P99",
      price: "295 299₴",
      subtitle: "Есть в наличии",
      brand: "Artline"
    }
  ];

  var originalComputers = computers.slice();

  function filterComputersByBrand(brands) {
    var computerContainer = document.getElementById('computerContainer');
    computerContainer.innerHTML = '';
  
    var filteredComputers;
    if (brands.length === 0) {
      filteredComputers = originalComputers.slice();
    } else {
      filteredComputers = originalComputers.filter(function(computer) {
        return brands.includes(computer.brand);
      });
    }
  
    for (var i = 0; i < filteredComputers.length; i++) {
      var computerItem = createComputerItem(filteredComputers[i]);
      computerContainer.appendChild(computerItem);
    }
  }
  
  function createComputerItem(computer) {
    var item = document.createElement('div');
    item.classList.add('product__item');
  
    var photo = document.createElement('img');
    photo.classList.add('product__photo');
    photo.src = computer.image;
    photo.alt = 'Computers';
    item.appendChild(photo);
  
    var hoverPhoto = document.createElement('img');
    hoverPhoto.classList.add('photo__hover');
    hoverPhoto.src = computer.hoverImage;
    hoverPhoto.alt = 'Computers';
    item.appendChild(hoverPhoto);
  
    var title = document.createElement('div');
    title.classList.add('product__title');
    title.textContent = computer.title;
    item.appendChild(title);
  
    var price = document.createElement('div');
    price.classList.add('product__price');
    price.textContent = computer.price;
    item.appendChild(price);
  
    var subtitle = document.createElement('div');
    subtitle.classList.add('product__subtitle');
    subtitle.textContent = computer.subtitle;
    item.appendChild(subtitle);
  
    var button = document.createElement('a');
    button.classList.add('product__btn');
    button.href = 'order.html'; 
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
      filterComputersByBrand([]);
    } else {
      filterComputersByBrand(selectedBrands);
    }
  }
  
  function handleResetFilter() {
    var checkboxes = document.getElementsByName('brandCheckbox');
  
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  
    filterComputersByBrand([]);
  }
  