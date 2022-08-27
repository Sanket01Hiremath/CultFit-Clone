let curr=1;
    let div1=`<div style="background-image: linear-gradient(to bottom right, rgb(210, 161, 0), rgb(255, 218, 98), rgb(210, 161, 0));">
    <div >
        <p>EXTRA 500 OFF + 1 MONTHS <br> EXTENSION</p>
        <p>on cultpass ELITE</p>
    </div>
    <div>
        <p>------- Ends In -------</p>
        <div>
            <div>
                <h2 id="hrs"></h2>
                <p>Hrs</p>
            </div>
            <h2>:</h2>
            <div>
                <h2 id="min"></h2>
                <p>Mins</p>
            </div>
            <h2>:</h2>
            <div>
                <h2 id="sec"></h2>
                <p>Sec</p>
            </div>
        </div>
    </div>
    </div>`;
    let div2=`<div style="background-image: linear-gradient(to bottom right, rgb(125, 125, 125), rgb(210, 210, 210), rgb(125, 125, 125));">
        <div>
            <p>2.5 MONTHS <br> EXTENSION</p>
            <p>on cultpass pro</p>
        </div>
        <div>
            <p>------- Ends In -------</p>
            <div>
                <div>
                    <h2 id="hrs"></h2>
                    <p>Hrs</p>
                </div>
                <h2>:</h2>
                <div>
                    <h2 id="min"></h2>
                    <p>Mins</p>
                </div>
                <h2>:</h2>
                <div>
                    <h2 id="sec"></h2>
                    <p>Sec</p>
                </div>
            </div>
        </div>
    </div>`;
    let div3=`<div style="background-image: linear-gradient(to bottom right, rgb(115, 0, 255), rgb(255, 147, 165), rgb(255, 0, 93));">
    <div>
        <p>upto 3 MONTHS <br> EXTENSION</p>
        <p>on cultpass live</p>
    </div>
    <div>
        <p>------- Ends In -------</p>
        <div>
            <div>
                <h2 id="hrs"></h2>
                <p>Hrs</p>
            </div>
            <h2>:</h2>
            <div>
                <h2 id="min"></h2>
                <p>Mins</p>
            </div>
            <h2>:</h2>
            <div>
                <h2 id="sec"></h2>
                <p>Sec</p>
            </div>
        </div>
    </div>
    </div>`;

    let divs=[
        div1,div2,div3
    ]

    setInterval(()=>{
        rightclick();
    },5000)

    let rightclick=()=>{
        if(curr<divs.length){
            curr++;
            document.getElementById("carousel").innerHTML=divs[curr-1];
            //divs[curr-2];
        }else{
            curr=1;
            document.getElementById("carousel").innerHTML=divs[curr-1];
            // divs[divs.length-1].style.display="none";
        } 
    }
    
    


    let fit = document.getElementById("fitn");
    let fitness=document.getElementById("fitne");
    fitness.addEventListener("click",()=>{
        fit.style.display=="block"
        // if(fit.style.display=="none"){
        //     fit.style.display=="block"
        // }else{
        //     fit.style.display=="none"
        // }
    })