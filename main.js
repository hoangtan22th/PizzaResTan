

var btnOpen = document.querySelector('.button-login')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.close')
var btnLogin = document.querySelector('.button-form');
function toggleModal(){
    modal.classList.toggle('hide');
}



btnOpen.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
btnLogin.addEventListener('click',toggleModal);



var form = document.querySelector('.section-form-head')
var oderNow = document.querySelector('.inner-button .button-sec1')
var oderClose = document.querySelector('.section-form .close')
var bookTable  =document.querySelector('.section-form .inner-btn')
function toggleForm(){
    form.classList.toggle('hide');
}

oderNow.addEventListener('click',toggleForm)
oderClose.addEventListener('click',toggleForm)
bookTable.addEventListener('click',toggleForm)



let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.list .item');
function loadItem() {
    let beginGet = limit * (thisPage-1);
    let endGet = limit *thisPage -1;
    list.forEach((item,key) => {
        if(key >= beginGet && key <=endGet){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
    listPage();
    
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit) ;
    document.querySelector('.listPage').innerHTML='';
    if(thisPage != 1)
    {
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick',"changPage(" + (thisPage-1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }
    for(i = 1;i<= count ;i++)
    {
        let newPage = document.createElement('li');
        newPage.innerHTML = i;
        if(i == thisPage)
        {
            newPage.classList.add('.active');
        }
        newPage.setAttribute('onclick',"changPage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }
    if(thisPage != count)
    {
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick',"changPage(" + (thisPage+1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }

}

function changPage(i)
{
    thisPage = i;
    loadItem();
}