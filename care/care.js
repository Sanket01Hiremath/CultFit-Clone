
let  images = ["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/77853b86-649f-4e2c-a3fa-e70b46ae6462.png","https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/b20b803c-e399-4a4c-bfac-fab3dded083e.png"]

let id;
let counter=0;
let start = ()=> {

    let container = document.getElementById('coursel')

    container.innerHTML = null;

    let img = document.createElement('img');

    img.src = images[counter];

    container.append(img);

    counter++;


   id =  setInterval(function () {

        if(counter === images.length){
            counter = 0;
        }

        img.src = images[counter];
        container.append(img)

        counter++;



    }, 3000)
}
start();

