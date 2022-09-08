function getData() {
  fetch(`https://swiggy-clone-akash.herokuapp.com/data`).then((response) =>
    response.json().then((res) => {
      // const data = res.data;
      // console.log(res[0]);
      // console.log(data);
      renderDom(res);
    })
  );
}
getData();

function renderDom(data) {
  // console.log(data);
  let container = document.getElementById("ak-restaurant-data");
  let count_target = document.getElementById("ak-restaurant-count");
  if (data != []) {
    count_target.innerText = data.length + " Restaurants";
    for (let i = 0; i < data.length; i++) {
      let rating = Number(data[i].AggregateRating);
      let color_code;
      if (rating > 3.5) {
        color_code = "green";
      } else if (rating < 3.5 && rating > 2.3) {
        color_code = "badge-warning";
      } else {
        color_code = "badge-danger";
      }
      container.innerHTML += ` 
            <a href="eg_user_restaurent_view.html?restaurantID=${data[i].RestaurantID}">
                    <div>
                        <img src="${data[i].restaurantImages}" alt="restaurant_img">
                    <div>

                        <p>${data[i].RestaurantName}</p>
                        <p>${data[i].Cuisines}</p>
                        <div>
                            <span>★ ${rating}</span>
                        </div>
                        
                        <div>
                            <p>₹ ${data[i].AverageCost} FOR TWO</p>
                        </div>
                    </div>
                </div>
            </div>
            </a>`;
    }
  } else {
    target.innerHTML = `<p class="h3">No Result Found</p>`;
  }
}
