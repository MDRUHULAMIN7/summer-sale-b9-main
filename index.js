const cards = document.querySelectorAll('.card');
let count=1;
let tPrice=0;
for(let index = 0; index< cards.length;index++){
    let card = cards[index];
   card.addEventListener("click",function(){
    // console.log("ruhul");
 const title = card.querySelector("h3").innerText;
 const price = card.querySelector("span").innerText.split(' ')[1];
 const mainprice = parseInt(price);
 const totalPrice = document.getElementById('totalPrice');
 tPrice=tPrice+mainprice;
 totalPrice.innerText = tPrice.toFixed(2);
//  console.log(mainprice);
 const titleContainer= document.getElementById('title-container');
 const p = document.createElement('p');
 p.innerText = count+". " +title;
 console.log(p);
 titleContainer.appendChild(p);
 count++;

 
   })

 
   function applyCupon(){
    const cuponFeild = document.getElementById('input-field');
    const cuponText = cuponFeild.value;
    const cupon = cuponText.split(" ").join("").toUpperCase();
    if(tPrice >=200){
        if(cupon === "SELL200"){
         const discountAmount = tPrice *20 /100;
         const discount = document.getElementById("discountPrice");
         discount.innerText = discountAmount.toFixed(2);
         const grandTotal = document.getElementById('total');
         const total = tPrice - discountAmount;
         grandTotal.innerText=total.toFixed(2);
         document.getElementById('input-field').value="";
        }
        else{
            alert("invalid cupon");
            document.getElementById('input-field').value="";
        }
    
    }
    

     else {
        alert('at least 200 $ khoroch koren vhai');
        document.getElementById('input-field').value="";
    }
    console.log(cuponText);
   }

}
