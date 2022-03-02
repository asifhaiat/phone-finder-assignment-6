 // added search phone by arrow function
const searchPhone = () => {
    const searchText = document.getElementById("search-field").value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        displayPhone(data.data.slice(0, 20));
      });
  };
  
  // display phone
  const displayPhone = (data) => {
    let dataDisplay = "";
    if (data.length > 0) {
      data.forEach((phone) => {
        dataDisplay += `
                <div class="col-md-4">
                  <div class="card m-2 p-3 text-center">
                    <img src="${phone.image}" class="img-fluid" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">${phone.brand}</p>
                      <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary btn-sm">Details</button>
                    </div>
                  </div>
                </div>
            `;
        document.getElementById("details-phone").innerHTML = "";
        document.getElementById("phone-search").innerHTML = dataDisplay;
        document.getElementById("search-field").value = "";
      });
    } else {
      dataDisplay += `
      <div class="col off-5">
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Sorry!</strong> No Data found for you!!!!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      </div>
  `;
      document.getElementById("details-phone").innerHTML = "";
      document.getElementById("phone-search").innerHTML = dataDisplay;
      document.getElementById("search-field").value = "";
    }
  };
  
  // load phone details
  const loadPhoneDetails = (phoneId) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
      .then((res) => res.json())
      .then((data) => phoneDetails(data.data));
  };
  
  // phone details
  const phoneDetails = (phone) => {
    const displayData = `
    <div class="col-12">
      <div class="card">
        <div class="card-header mx-auto">
          <img src="${phone.image}" class="img-fluid" alt="" >
        </div>
        <div class="card-body text-center">
        <h5 class="card-title">${phone.name}</h5>
        <p class="card-text"><span class="brand fw-bold">Brand: </span> ${phone.brand}</p>
        <p class="card-text"><span class="brand fw-bold">Release Date: </span> ${phone.releaseDate}</p>
        <p class="card-text"><span class="brand fw-bold">RAM and ROM: </span> ${phone.mainFeatures.memory}</p>
        <p class="card-text"><span class="brand fw-bold">Display size: </span> ${phone.mainFeatures.displaySize}</p>
        <p class="card-text"><span class="brand fw-bold">ID: </span> ${phone.slug}</p>
        <p class="card-text"><span class="brand fw-bold mx-2">Sensors:</span> ${phone.mainFeatures.sensors}</p>
        <p class="card-text"><span class="brand fw-bold">USB:</span> ${phone.others.USB}</p>
        <p class="card-text"><span class="brand fw-bold">Bluetooth:</span> ${phone.others.Bluetooth}</p>
        <p class="card-text"><span class="brand fw-bold">WLAN:</span> ${phone.others.WLAN}</p>
        <p class="card-text"><span class="brand fw-bold">GPS:</span> ${phone.others.GPS}</p>
        <p class="card-text"><span class="brand fw-bold">Radio:</span> ${phone.others.Radio}</p>
        </div>
      </div>
    </div>
  `;
    document.getElementById("details-phone").innerHTML = displayData;
    document.getElementById("phone-search").innerHTML = "";
  };
