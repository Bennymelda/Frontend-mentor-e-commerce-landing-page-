let cart=[{
  id:'1',
  image:'images (18).jpeg',
  little:'waffle',
  name:'coconut rice',
  price:'$5.5',
  quantity:0
},{
  id:'2',
  image:'images (7).jpeg',
  little:'aka',
  name:'akara',
  price:'$3',
  quantity:0
},{
  id:'3',
  image:'images (13).jpeg',
  little:'nut',
  name:'jollef rice',
  price:'$4.5',
  quantity:0
},{
  id:'4',
  image:'images (30).jpeg',
  little:'malnut',
  name:'mainut puden',
  price:'$6',
  quantity:0
},{
  id:'5',
  image:'images (32).jpeg',
  little:'pancake',
  name:'pancake sweetner',
  price:'$7.5',
  quantity:0
},{
  id:'6',
  image:'images (4).jpeg',
  little:'almond',
  name:'amala',
  price:'$4',
  quantity:0
},{
  id:'7',
  image:'images (20).jpeg',
  little:'mush',
  name:'mushroom',
  price:'$7.5',
  quantity:0
},{
  id:'8',
  image:'images (23).jpeg',
  little:'cumcumber',
  name:'cumcumber puden',
  price:'$7',
  quantity:0
},{
  id:'9',
  image:'images (8).jpeg',
  little:'goastt',
  name:'Goaste ride',
  price:'$8',
  quantity:0
}]

let myArray =[]

// displays the items
let result =''
cart.forEach(item=>{
  result +=`  <div class="main">
      <div class='image'>
        <img src="image/${item.image}" alt="image">
      </div>
       <div class="relative">
        <button data-id="${item.id}"
        data-quantity="${item.quantity}"
        data-name="${item.name}"
        data-price="${item.price}"
        data-image="${item.image}"
        class='bug'
        >Add to cart</button>
      </div>
      <div class="gather">
        <p class="little">${item.little}</p>
        <p><strong>${item.name}</strong></p>
        <p class="price">${item.price}</p>
      </div>
           
    
    </div>`
})
document.querySelector('.display').innerHTML= result

array()


document.querySelectorAll('button').forEach(items => {
  items.addEventListener('click', () => {
    let data = Number(items.dataset.id);
    let object ={
      id: items.dataset.id,
 name: items.dataset.name,
price:  items.dataset.price,
image:  items.dataset.image,
quantity : 1
}
 let kop =   myArray.find(dop=> dop.id == object.id)
 if(kop){
   
 }else {
   myArray.push(object)
   allRest()
 }
  



    let sort = cart.find(nest => nest.id == data);
    if (sort) {
      
      if (items.innerHTML === 'Add to cart') {
        sort.quantity += 1;
        array()
        items.innerHTML = `
          <div class="lop">
            <button class="plus" data-id="${sort.id}">+</button>
            <p>${sort.quantity}</p>
            <button class="minus" data-id="${sort.id}">-</button>
          </div>
        `
        // Add event listeners to minus and plus buttons
        items.querySelector('.minus').addEventListener('click', (e) => {
          e.stopPropagation();
          let data = Number(items.dataset.id);
          let item = cart.find(datas => datas.id == data);
          if (item && item.quantity > 0) {
            item.quantity -= 1;
            
            let index = myArray.findIndex(dop => dop.id == item.id);
  if (index !== -1) {
    myArray[index].quantity = item.quantity;
  }
            
            items.querySelector('p').textContent = item.quantity;
            array()
            allRest()
          }
        });
      
        
        items.querySelector('.plus').addEventListener('click', (e) => {
          e.stopPropagation();
          let data = Number(items.dataset.id);
          let item = cart.find(datas => datas.id == data);
          if (item) {
            item.quantity += 1;
            let index = myArray.findIndex(dop => dop.id == item.id);
  if (index !== -1) {
    myArray[index].quantity = item.quantity;
  }
            items.querySelector('p').textContent = item.quantity;
            array()
            allRest()
          }
        });
        

      } 
    }
  });
});

function array(){
let total =0
cart.forEach(check=>{
  total += check.quantity
})
document.querySelector('.quantity').innerHTML =`<p class="cart">Your Cart(${total})</p>`
}

  

function allRest(){
let rest =''
let added =0
let sumTotal = 0
myArray.forEach(pop=>{
 let price = pop.price.replace('$', (''))
let kept = price* pop.quantity
added += kept

  rest +=`
  
  <p class="name">${pop.name}</p>
  <div class="threes">
  <div class="three">
    <p class="pop">${pop.quantity}*</p>
  <p class="p"> ${pop.price}</p>
  <p class="b">$${kept}</p>
    </div>
    <div class="box">
  <button class="delete">*</button>
  </div>
  </div>
  <hr>
  
  `
})
document.querySelector('.quan').innerHTML=rest
document.querySelector('.hi').innerHTML=`
<div class="increase">
<p class="tot">Order Total:</p>
<p class="order">$${added.toFixed(2)}</p>
</div>
<div class="box">
<button class="confirm">Confirm order</button>
</div>
`

//document.querySelector('.quantity').innerHTML=rest


document.querySelector('.confirm').addEventListener('click', ()=>{
  let added = 0
  let showAll =""
  let toas= document.querySelector('.toas').style.display="block"
myArray.forEach(pop=>{

  let price = pop.price.replace('$', (''))

let kept = price* pop.quantity
added += kept
  
showAll +=` 
<div class="last">
<div class="us">
<img class="mage" src=" image/${pop.image}">
</div>
<div class="hu">
<div>
<p class="hop">${pop.name}</p>
</div>
<div class='mu'>
  <p class='g'>${pop.quantity}*</p>
    <p class='no'>${pop.price}</p>
  <p class="kept">${kept}</p>
  </div>
  </div>
  </div>
  `
})
showAll +=`
<div class="toast">
<div class="this">
<p class="mod">Order Total:</p>
<p class="hm"> ${added}</p>
</div>
<div class='gone'>
 <button class='new-order' onclick =nail()>start a new order</button>
 </div>
<div>`

let toast = document.querySelector('.toas')
toast.classList.add("toast")

 toast.innerHTML= showAll
 

})


document.querySelectorAll('.delete').forEach((deletes, index)=>{
  deletes.addEventListener('click', ()=>{
  alert('hi')
    myArray.splice(index, 1)
    allRest()
    
  })
})
}
function nail(){
  myArray = []
  allRest()
  document.querySelector('.toas').style.display = "none"
  document.querySelector('.toas').innerHTML = ''
  document.querySelector('.quantity').innerHTML = ''
  document.querySelector('.quan').innerHTML = ''
  document.querySelector('.hi').innerHTML = ''
  // Reset cart buttons
  document.querySelectorAll('.bug').forEach(button => {
    button.innerHTML = 'Add to cart'
  })
  cart.forEach(item => {
    item.quantity = 0
  })
  array()
}



