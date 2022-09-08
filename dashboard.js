let restaurant;
function getData() {
  fetch(`https://swiggy-clone-akash.herokuapp.com/data`).then((response) =>
    response.json().then((res) => {
      // const data = res.data;
      // console.log(res[0]);
      console.log(res);
      restaurant = res;
      renderDom(res);
    })
  );
}
getData();

function renderDom(data) {
  console.log(data);
  let container = document.getElementById("ak-restaurant-data");
  container.innerHTML = null;
  let count_target = document.getElementById("ak-restaurant-count");
  if (data != []) {
    count_target.innerText = data.length + " Restaurants";
    for (let i = 0; i < data.length; i++) {
      let rating = Number(data[i].AggregateRating);
      let colorCode;
      if (rating > 3.5) {
        colorCode = "#48c479";
      } else if (rating < 3.5 && rating > 2.3) {
        colorCode = "#db7c38";
      } else {
        colorCode = "#e1b055";
      }
      container.innerHTML += ` 
            <a href="eg_user_restaurent_view.html?restaurantID=${data[i].RestaurantID}">
              <div class="ak-card">
                  <img src="${data[i].restaurantImages}" alt="restaurant_img">
                  <p>${data[i].RestaurantName}</p>
                  <p>${data[i].Cuisines}</p>
                  <div class="restaurantRating">
                    <span style="background:${colorCode}; color:white">★ ${rating}</span>
                    <p>₹ ${data[i].AverageCost} FOR TWO</p>
                  </div>
                </div>
            </a>`;
    }
  } else {
    container.innerHTML = `<p class="h3">No Result Found</p>`;
  }
}
// let count = 0;
document.getElementById("relevance").addEventListener("click", () => {
  renderDom(restaurant);
  // console.log(count++);
});

document.getElementById("rating").addEventListener("click", () => {
  restaurant.sort((a, b) => Number(b.AggregateRating - a.AggregateRating));
  // console.log(restaurant);
  renderDom(restaurant);
});
document.getElementById("lowToHigh").addEventListener("click", () => {
  restaurant.sort((a, b) => Number(a.AverageCost - b.AverageCost));
  // console.log(restaurant);
  renderDom(restaurant);
});
document.getElementById("highToLow").addEventListener("click", () => {
  restaurant.sort((a, b) => Number(b.AverageCost - a.AverageCost));
  // console.log(restaurant);
  renderDom(restaurant);
});

document.getElementById("delivery").addEventListener("click", () => {
  let data = restaurant.filter((elem) => {
    return elem.HasOnlineDelivery == "Yes";
  });
  // console.log(data);
  renderDom(data);
});
