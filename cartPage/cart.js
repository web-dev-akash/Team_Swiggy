import {items} from "./utility.js"
var data=JSON.parse(localStorage.getItem("items"))||[];

var form = document.querySelector("form").innerHTML;
var placeOrderBtn = document.querySelector(".payNowAjax-base-actionButton").innerHTML;


document.getElementById("card").addEventListener("click", showCard);
function showCard(){
    var x = document.querySelector("form");
    document.querySelector("#card").style.color = "black";
    document.querySelector("#cod").style.color = "#686b78";
    document.querySelector("#cod").style.backgroundColor = "#edf1f7";
    document.querySelector("#card").style.backgroundColor = "white";
    x.innerHTML = form;
    var btn = document.querySelector(".payNowAjax-base-actionButton");
    btn.addEventListener("click", function(){
        event.preventDefault();
        window.location = "thankyou.html";
    })
}
document.getElementById("cod").addEventListener("click", showCod);
function showCod(){
    var form = document.querySelector("form");
    form.innerHTML = "";

    document.querySelector("#card").style.color = "#686b78";
    document.querySelector("#cod").style.color = "black";
    document.querySelector("#card").style.backgroundColor = "#edf1f7";
    document.querySelector("#cod").style.backgroundColor = "white";

    var div = document.createElement("div");
    var headingDiv = document.createElement("div");
    headingDiv.innerText = "Pay on delivery (Cash/Card/UPI)";
    headingDiv.setAttribute("class","card-base-heading");

    var inputDiv = document.createElement("div");
    inputDiv.innerText = "You can pay via Cash/Card or UPI enabled app at the time of delivery. Ask your delivery executive for these options.";
    inputDiv.setAttribute("class", "codCardUI-base-helpText");
    div.append(headingDiv, inputDiv);
    
    var btn = document.createElement("button");
    btn.setAttribute("class", "payNowAjax-base-actionButton");
    btn.innerHTML = placeOrderBtn;
    // var formbtn = document.querySelector(".payNowAjax-base-actionButton");
    btn.addEventListener("click", function(){
        event.preventDefault();
        // alert("Order confirmed")
        location = "thankYou.html";
    });
    form.append(div, btn);
}

const displayRightside=()=>{
    let div1=`<div id="shopname">
    <div>shop Image</div>
    <div>Shopname</div>
</div>`
let div2=document.createElement("div");
div2.innerHTML=items(data);

let div3=`
<div id="suggestion">
<svg class="_3iLcN" width="10px" height="10px" viewBox="0 0 32 32"><path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path></svg>
<input type="text" placeholder="Any suggestions? We will pass it on...">
</div>
`
let div4=`
                <div id="coupon">
                    <div><img src="./img/Screenshot (196).png" alt=""></div>
                    <div>Apply Coupons</div>
                </div>
`
let div5=`
                <div id="billdetails">
                    <div>Bill Details</div>
                    <div>
                        <div>Item Total</div>
                        <div>₹2700</div>
                    </div>
                    <div>
                        <div>Delivery Fee | 2.8 kms</div>
                        <div>₹27</div>
                    </div>
                    <div>
                        <div>Cancellation Fee</div>
                        <div>₹100.50</div>
                    </div>
                    <div>
                        <div>Taxes and Charges</div>
                        <div>₹145.50</div>
                    </div>
                    <div id="toPay">
                        <div>TO PAY</div>
                        <div id="totalamt">₹2973</div>
                    </div>
                </div>

`
document.getElementById("rightBlock").append(div1,div2,div3,div4,div5)

}
