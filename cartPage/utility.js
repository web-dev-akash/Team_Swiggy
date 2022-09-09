 const cartDiv=()=>{

 }
 const items=(data)=>{
    let maindiv=document.createElement("div");
    data.map(function(el){
        let itemdiv=document.createElement("div");
        itemdiv.setAttribute("class","itemdiv");
        let vegimg=document.createElement("img");
        vegimg.src="./img/800px-Indian-vegetarian-mark.svg.png"
        let name=document.createElement("p");
        name.innerText=el.name;
        let qtydiv=document.createElement("div")
        let minus=document.createElement("button");
        minus.setAttribute("onclick",decrease)
        let qty=document.createElement("p");
        let plus=document.createElement("button");
        plus.setAttribute("onclick",increase);
        qtydiv.append(minus,qty,plus)
        let amt=document.createElement("div");
        amt.innerText=el.price
        itemdiv.append(vegimg,name,qtydiv,amt);
        maindiv.innerHTML+=itemdiv
    })
 }


 export {items}

 export const footer =
  `  
  <div class="footer-container">
  <div class="footer-top">
    <div>
      <h3>COMPANY</h3>
      <a href="#">About us</a>
      <a href="#">Team</a>
      <a href="#">Careers</a>
      <a href="#">Swiggy Blog</a>
      <a href="#">Bug Bounty</a>
      <a href="#">Swiggy One</a>
      <a href="#">Swiggy Corporate</a>
      <a href="#">Swiggy Instamart</a>
    </div>
    <div>
      <h3>CONTACT</h3>
      <a href="#">Help & Support</a>
      <a href="#">Partner with us</a>
      <a href="#">Ride with us</a>
    </div>
    <div>
      <h3>LEGAL</h3>
      <a href="#">Terms & Conditions</a>
      <a href="#">Refund & Cancellation</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a>
      <a href="#">Offer Terms</a>
      <a href="#">Phishing & Fraud</a>
      <a href="#">Corporate – Swiggy Money Codes Terms and Conditions</a>
      <a href="#">Corporate - Swiggy Discount Voucher Terms and Conditions</a>
    </div>
    <div class="ak-footer-google">
      <a
        href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
          alt=""
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
          alt=""
        />
      </a>
    </div>
  </div>
  <div class="footer-hr"></div>
  <div class="footer-down">
    <div>
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
        alt=""
      />
    </div>
    <div>
      <p>© 2022 Swiggy</p>
    </div>
    <div class="footer-promo">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-pinterest"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
    </div>
  </div>
</div>
`



export const navbar = `<nav>
        <div class="ak-header-left">
          <img
            src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
            alt=""
          />
          <p id="ak-searched-place">
            SECURE CHECKOUT </i>
          </p>
        </div>
        <div class="ak-header-right">
          <ul>
            
            
          </ul>
        </div>
      </nav>`;