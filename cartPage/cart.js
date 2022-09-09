import {items} from "./utility.js"
var data=JSON.parse(localStorage.getItem("cartItems"))||[];
console.log(data);
var addressArr=JSON.parse(localStorage.getItem("address"))||[];
var id=1;

if(addressArr.length!=0){
document.getElementById("address").innerHTML="";
displayAddress(addressArr);
}


// var form = document.querySelector("form").innerHTML;
// var placeOrderBtn = document.querySelector(".payNowAjax-base-actionButton").innerHTML;


// document.getElementById("card").addEventListener("click", showCard);
// function showCard(){
//     var x = document.querySelector("form");
//     document.querySelector("#card").style.color = "black";
//     document.querySelector("#cod").style.color = "#686b78";
//     document.querySelector("#cod").style.backgroundColor = "#edf1f7";
//     document.querySelector("#card").style.backgroundColor = "white";
//     x.innerHTML = form;
//     var btn = document.querySelector(".payNowAjax-base-actionButton");
//     btn.addEventListener("click", function(){
//         event.preventDefault();
//         window.location = "thankyou.html";
//     })
// }
// document.getElementById("cod").addEventListener("click", showCod);
// function showCod(){
//     var form = document.querySelector("form");
//     form.innerHTML = "";

//     document.querySelector("#card").style.color = "#686b78";
//     document.querySelector("#cod").style.color = "black";
//     document.querySelector("#card").style.backgroundColor = "#edf1f7";
//     document.querySelector("#cod").style.backgroundColor = "white";

//     var div = document.createElement("div");
//     var headingDiv = document.createElement("div");
//     headingDiv.innerText = "Pay on delivery (Cash/Card/UPI)";
//     headingDiv.setAttribute("class","card-base-heading");

//     var inputDiv = document.createElement("div");
//     inputDiv.innerText = "You can pay via Cash/Card or UPI enabled app at the time of delivery. Ask your delivery executive for these options.";
//     inputDiv.setAttribute("class", "codCardUI-base-helpText");
//     div.append(headingDiv, inputDiv);
    
//     var btn = document.createElement("button");
//     btn.setAttribute("class", "payNowAjax-base-actionButton");
//     btn.innerHTML = placeOrderBtn;
//     // var formbtn = document.querySelector(".payNowAjax-base-actionButton");
//     btn.addEventListener("click", function(){
//         event.preventDefault();
//         // alert("Order confirmed")
//         location = "thankYou.html";
//     });
//     form.append(div, btn);
// }

function displayRightside(){
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


const map=()=>{
    let value="kanpur";
    let div=`    <div class="mapouter"><div class="gmap_canvas"><iframe width="349" height="310" id="gmap_canvas" src="https://maps.google.com/maps?q=${value}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a><br><style>.mapouter{position:relative;text-align:right;height:310px;width:349px;}</style><a href="https://www.embedgooglemap.net">embed google map location</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:310px;width:349px;}</style></div></div>
    `
    document.getElementById("map").innerHTML=div;
}
map()
let getAddress=()=>{
    w3_close();
    let flat=document.getElementById("door").value;
    let landmark=document.getElementById("landmark").value;
    homevalue;
    let obj={
        id:id,
        name:"name",
        flat:flat,
        landmark:landmark,
        home:homevalue,
        time:"36 MINS"
    }
    addressArr.push(obj);
    id++;
    localStorage.setItem("address",JSON.stringify(addressArr));
    
    displayAddress(addressArr)

    

    
    
}
function displayAddress(data){
    document.getElementById("addnew").innerHTML="";
    document.getElementById("confirmAdd").innerHTML="";
    data.map(function(el){
        var div1=document.createElement("div");
    div1.setAttribute("class","newone");
    var div2=document.createElement("div");
    div2.setAttribute("class",icon)
    var div3=document.createElement("div");
    div3.setAttribute("class","addressBox")
    var div4=document.createElement("div");
    div4.innerText=el.home;
    var div5=document.createElement("p");
    div5.innerText=el.flat;
    var div6=document.createElement("p");
    div6.innerText=el.landmark
    var div7=document.createElement("div");
    div7.setAttribute("class","time");
    div7.innerText="36 MINS"
    var div8=document.createElement("div");
    div8.append(div5,div6);
    let btn=document.createElement("button");
    btn.innerText="DELIVER HERE"
    btn.addEventListener("click",function(){
        displayPayment()
        displayConfirmAddress(el.id)
    })
    var div9=document.createElement("div");
    div9.append(div4,div8,div7,btn)
    div3.append(div9)
    div1.append(div2,div3)
    
    
    document.getElementById("address").innerHTML=`<div class="flex"><div>Select Address</div>
    <div><button onclick="w3_open()" id="addbtn">ADD NEW</button></div></div>
    `
    document.getElementById("addnew").append(div1);
    })
    
}

function displayConfirmAddress(index){
    let obj=addressArr.filter(function(el){
        return el.id==index;
    })
    console.log(obj)

    document.getElementById("addnew").innerHTML="";
    document.getElementById("confirmAdd").innerHTML="";
    document.getElementById("address").innerHTML="";
    console.log(obj[0].home)
    var div1=document.createElement("div");
    div1.setAttribute("class","cnfrm")
    var div2=document.createElement("div");
    div2.innerText="DELIVERY ADDRESS"
    var i=document.createElement("i");
    i.setAttribute("class","fa-solid fa-circle-check")
    div2.append(i)
    var div3=document.createElement("div");
    div3.innerText="CHANGE"
    div3.addEventListener("click",displayAddress);
    div1.append(div2,div3);
    document.getElementById("confirmAdd").append(div1);
    let div = `
                    
                    <div>
                        <div>${obj[0].home}</div>
                        <div>
                            <p>${obj[0].flat}</p>
                            <p>${obj[0].landmark}</p>
                        </div>
                        <div>${obj[0].time}</div>
                    </div>
    `
    document.getElementById("confirmAdd").innerHTML+=div;
}


document.getElementById("bottom").addEventListener("click",getAddress);
var homevalue
var icon
function check(){
    homevalue=event.target.id;
    if(homevalue=="Home"){
        icon="fa-solid fa-house";
        document.getElementById("Home").style.color="black";
        document.getElementById("Work").style.color="#93959f";
        document.getElementById("other").style.color="#93959f";
    }
    if(homevalue=="Work"){
        icon="fa-solid fa-briefcase"
        document.getElementById("Work").style.color="black";
        document.getElementById("Home").style.color="#93959f";
        document.getElementById("other").style.color="#93959f";
    }
    if(homevalue=="other"){
        icon="fa-solid fa-location-dot"
        document.getElementById("other").style.color="black";
        document.getElementById("Work").style.color="#93959f";
        document.getElementById("Home").style.color="#93959f";
    }
}
document.getElementById("icons").addEventListener("click",check);




function displayPayment(){
    document.getElementById("removeafter").innerText="";
    document.getElementById("hide").setAttribute("class","unhide");

}




// payment


var form = document.querySelector("form").innerHTML;
var placeOrderBtn = document.querySelector(".payNowAjax-base-actionButton").innerHTML;
document.getElementById("card").addEventListener("click", showCard);
document.getElementById("card").addEventListener("click", showCard);
function showCard(){
    var x = document.querySelector("form");
    document.querySelector("#card").style.color = "#282c3f";
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
    document.querySelector("#cod").style.color = "#282c3f";
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




// displayright


