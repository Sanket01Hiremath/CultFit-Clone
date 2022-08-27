let relativeNavbar=()=>{
    return `<a href="../navbar.html"><img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_1.3125,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" alt=""></a>
    <div>
    <a href="../Day1/fitness.html">FITNESS</a>
    <a href="../Mind/mindTherapy.html">MIND</a>
    <a href="../care/care.html">CARE</a>
    <a href="../sports/index.html">STORE</a>
    </div>
    <div>
        <input type="text" placeholder="Banglore">
        <button>GET APP</button>
        <img src="https://static.cure.fit/assets/images/user-default.png" alt="">
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.3125,f_auto,fl_progressive//image/test/cart-dark-theme.svg" alt="">
    </div>`
}

let stickyNavbar=()=>{
    return `<a href="../Day2/Elitepass.html">cultpass ELITE</a>
    
    <a href="../Day2/Propass.html">cultpass PRO</a>
    <a href="../Day3/Livepass.html">cultpass LIVE</a>
    <a href="../Day3/culttransform.html">cult Transform</a>
    <a href="../Day3/LuxuaryGyms.html">Luxuary Gym</a>
    
    <button>COMPARE PLANS</button>`
}

let sidenavmenu=()=>{
    return `<div id="sidenavbar">
    <img id="navb1" onclick="navclick()" width="6%" style="border-radius:50%;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAhNCKfiq9lyMYz6c8oWY5uXYvmOrf5SGWg&usqp=CAU" alt="">
    <img width="5%" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" alt="">
    <input type="text" placeholder="Bangalore">
</div>`
}

export {relativeNavbar as nav1,stickyNavbar as nav2,sidenavmenu as nav3} 