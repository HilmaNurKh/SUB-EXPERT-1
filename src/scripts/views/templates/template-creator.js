import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurants) => `
  <h2 class="resto_title">${restaurants.name}</h2>
  <img class="resto_img" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
  <div class="resto_info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurants.address}</p>
    <h4>City</h4>
    <p>${restaurants.city}</p>
    <h4>Description</h4>
    <p>${restaurants.description}</p>
    <h4>Food Menu</h4>
    <p>${restaurants.menus}</p>
    <h4>Drink Menu</h4>
    <p>${restaurants.menus}</p>
  </div>
  <div class="resto_review">
    <h4>Review</h3>
    <p>${restaurants.customerReviews}</p>
  </div>
`;

const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item_header">
      <img class="resto-item_header_img" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" 
        alt="${restaurants.name}">
      <div class="resto-item_header_rating">
        <p>⭐️<span class="resto-item_header_rating_score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item_content">
      <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <h4>${restaurants.city}</h4>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
