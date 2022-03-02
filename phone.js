// added search phone by arrow function
const searchPhone = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
      // console.log(searchText);
    searchField.value = "";
    
    const url = `https:openapi.programming-hero.com/api/phones?search=${searchText}`;
      // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayPhone(data.data.slice(0, 20)));
    };
// display phone 
const displayPhone = (data) => {
    // console.log(data);
  const searchPhone = document.getElementById("phone-search");
  data.forEach((phone) => {
      // console.log(data);
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
          <div class="card">
                  <img src="${phone.image}" class="card-img-top alt="...">
                  <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.brand}</p>
                  <button onclick="LoadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary btn-sm">Details</button>
              </div>
          </div>
          `;
      searchPhone.appendChild(div);
  });
  };
// load phone details
const LoadPhoneDetails = (phoneId) => {
    const url = `https:openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => phoneDetails(data.data));
    };