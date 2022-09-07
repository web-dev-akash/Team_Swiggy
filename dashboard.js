function getData() {
  fetch(`https://swiggy-clone-akash.herokuapp.com/data`).then((response) =>
    response
      .json()
      .then((data) => ({
        data: data,
        status: response.status,
      }))
      .then((res) => {
        const data = res.data;
        renderDom(data);
      })
  );
}
getData();

function renderDom(data) {
  console.log(data);
  let target = document.getElementById("restaurants_cards");
  let count_target = document.getElementById("total_restaurant_count");
  let row = document.createElement("div");
  row.setAttribute("class", "row py-4");
  if (data != []) {
    count_target.innerText = data.length + " Restaurants";
    for (let i = 0; i < data.length; i++) {
      let rating = Number(data[i].aggregate_rating);
      let color_code;
      if (rating > 3.5) {
        color_code = "badge-success";
      } else if (rating < 3.5 && rating > 2.3) {
        color_code = "badge-warning";
      } else {
        color_code = "badge-danger";
      }
      row.innerHTML += ` 
            <a href="user_restaurent_view.html?restaurant_id=${data[i].restaurant_id}"><div class="col-3 mb-4">
                    <div class="card">
                        <img src="Resource/${data[i].restaurant_images}" style="width: 245px ; height: 200px" class="card-img-top" alt="restaurant_img">
                    <div class="card-body">

                        <p>${data[i].restaurant_name}</p>
                        <p class="text-muted">${data[i].Cuisines}</p>
                        <div class="col">
                            <span class="badge ${color_code}">★ ${rating}</span>
                        </div>
                        
                        <div class="col">
                            <p>₹${data[i].average_Cost_for_two} FOR TWO</p>
                        </div>
                        <div class="dropdown-divider"></div>
                        <a href="">Look Up the restaurant</a>

                    </div>
                </div>
            </div></a>`;
    }
    target.append(row);
  } else {
    target.innerHTML = `<p class="h3">No Result Found</p>`;
  }
}
