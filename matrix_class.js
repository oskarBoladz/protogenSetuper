class Matrix{
    constructor(matrix_id,rgb=false,width,height,color=null,f_expression = null){
        if(matrix_id != null){
            this.id = matrix_id
        }else{
            this.id = new Date().getTime().toString()
        }
        this.width=width
        this.height=height
        this.f_expression=f_expression
        this.rgb=rgb
        if(this.rgb){
            this.color=null
        }else{
            this.color=color
        }
        // this.leds=Array.from({ length: this.height }, () => Array(this.width).fill( {"color":this.color,"state":false} ));
        this.leds=[]
        for (var i = 0; i < height; i++) {
            var row = [];
            for (var j = 0; j < width; j++) {
                row.push({"color":this.color,"state":false}); // Each cell contains a new, unique object
            }
            this.leds.push(row);
        }
    }
    // --------------- FUNCTIONAL FUNCTIONS ----------------- XD



    get_id(){
        return this.id
    }
    get_size(){
        return [this.width,this.height]
    }
    get_color(){
        return this.color
    }
    set_color(color){
        if(!this.rgb){
            this.color=color
        }
    }
    get_f_expression(){
        return this.f_expression
    }

    click=(btn)=>{
        let x=btn.getAttribute("x")
        let y=btn.getAttribute("y")
        if(this.get_led_state(x,y)){
            this.switch_led_state(x,y)
            document.getElementById(btn.id).setAttribute("state",false)
            if(btn.getAttribute("rgb")=="true"){
            document.getElementById(btn.id).setAttribute("style","")
            }
        }else{
            this.switch_led_state(x,y)
            document.getElementById(btn.id).setAttribute("state",true)
            if(btn.getAttribute("rgb")=="true"){
                document.getElementById(btn.id).style.backgroundColor=this.leds[y][x].color
            }
        }
    }

    update(){
        document.getElementById(this.id).innerHTML=""
        let leds =  Array.from(this.get_matrix_body.children)
        let insert = document.getElementById(this.id)
        leds.forEach(function(child) {
            // console.log(insert)
            insert.appendChild(child)
        });


    }
    //---------------- LEDS FUNCTIONS -----------------------
    set_led_color(x,y,color){
        this.leds[y][x].color=color
        this.update()
    }
    get_led_color(){
        return this.leds[y][x].color
    }

    get_led_state(x,y){
        return this.leds[y][x].state;
    }
    set_led_state(x,y,state){
        this.leds[y][x].state=state
    }
    switch_led_state(x,y,state){
        if(this.get_led_state(x,y)){
            this.leds[y][x].state=false
        }else{
            this.leds[y][x].state=true
        }
    }
    get matrix_leds(){
        return this.leds
    }

    //---------------- MATRIX FUNCTIONS ---------------------

    get get_matrix_body(){
        let matrix_body = document.createElement('div');
        matrix_body.className = 'matrix_body';
        matrix_body.id=this.id

        matrix_body.style="grid-template-columns: repeat("+this.width+", 1fr); grid-template-rows: repeat("+this.height+", 1fr);"

        for (let i = 0; i < (this.height); i++) {
            for (let j = 0; j < (this.width); j++) {
                let led_light = document.createElement('div');
                led_light.className = 'led_light';
                
                if(this.rgb){
                    led_light.classList.add("rgb")
                    // led_light.style="background-color:"+this.leds[i][j].color+";"
                }else{
                    led_light.classList.add("one")
                    led_light.style="background-color:"+this.color+";"
                }
                led_light.id=i.toString()+"-"+j.toString()+"-"+this.id

                led_light.setAttribute('rgb', this.rgb);
                led_light.setAttribute('state', this.leds[i][j].state);

                led_light.setAttribute('x', j);
                led_light.setAttribute('y', i);
                led_light.setAttribute('matrix_id', this.id);

                led_light.onclick=()=>this.click(led_light)
                matrix_body.appendChild(led_light)
                }
        }
        
        return matrix_body;
    }

}

// matrixtest = new Matrix(null,true,8,8);
// document.getElementById("matrix_table").appendChild(matrixtest.get_matrix_body)
// matrixtest.set_led_color(0,0,"#00ff00")
// matrixtest.set_led_color(1,0,"#0000ff")

// ryj = {}
//     ryj["n1"]=new Matrix("qwe1",false,8,8,"green","n1"),
//     ryj["n2"]=new Matrix("qwe2",false,8,8,"green","n2"),
//     ryj["m1"]=new Matrix("qwe3",false,32,8,"green","m1"),
//     ryj["m2"]=new Matrix("qwe4",false,32,8,"green","m2"),
//     ryj["e1"]=new Matrix("qwe5",false,16,8,"green","e1"),
//     ryj["e2"]=new Matrix("qwe6",false,16,8,"green","e2"),

// // console.log(ryj.m2.get_matrix_body)
// document.getElementById("down").appendChild(ryj.m1.get_matrix_body)
// document.getElementById("down").appendChild(ryj.m2.get_matrix_body)
// document.getElementById("up").appendChild(ryj.e1.get_matrix_body)
// document.getElementById("up").appendChild(ryj.n1.get_matrix_body)
// document.getElementById("up").appendChild(ryj.n2.get_matrix_body)
// document.getElementById("up").appendChild(ryj.e2.get_matrix_body)
// console.log(ryj.e1.id,ryj.m1.id)




getFaceSetup=()=>{
    text=" byte m1[32] = { \n"
    outputArray = Array.from({ length: 32 }, () => Array(8).fill(0));
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 8; j++) {
            if(ryj.m1.leds[j][i].state){
                outputArray[i][j] = "1"
            }else{
outputArray[i][j] = "0"
            }

        }
    }
    console.log(outputArray)

    for (let i = 0; i < 32; i++) {
        s1="0b"+outputArray[i].flat().join('')+",\n";
        text+=s1
    }
    text+="};"
    navigator.clipboard.writeText(text);
}
