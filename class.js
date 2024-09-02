matrix_list={}

class Matrix{
    constructor(matrixID,m_width,m_height,l_color){
        this.width=m_width
        this.height=m_height
        this.leds=Array.from({ length: this.height }, () => Array(this.width).fill(0));
        this.color = l_color
        this.matrixID=matrixID
    }
    get_led(led_x,led_y){
        console.log(led_x)
        if(this.leds[led_y][led_x]==1){
            return true
        }else{
            return false
        }
    }
    set_led(led_x,led_y,state){
        this.leds[led_y][led_x]=state
    }
    click=(btn)=>{
        console.log(btn.id)
        let mat_id=btn.getAttribute("mat_id")
        let led_x=btn.getAttribute("led_x")
        let led_y=btn.getAttribute("led_y")
        if(matrix_list[mat_id].get_led(led_x,led_y)){
            matrix_list[mat_id].set_led(led_x,led_y,false)
            document.getElementById(btn.id).setAttribute("state","0")
        }else{
            matrix_list[mat_id].set_led(led_x,led_y,true)
            document.getElementById(btn.id).setAttribute("state","1")
        }
    }
    get_matrix(){
        let led_body = document.createElement('div');
        led_body.className = 'led_body';
        led_body.id=this.matrixID
        led_body.style="grid-template-columns: repeat("+this.width+", 1fr); grid-template-rows: repeat("+this.height+", 1fr);"

        

        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let led_light = document.createElement('div');
                led_light.className = 'led_light';
                led_light.setAttribute('state', "0");
                led_light.setAttribute('led_x', j);
                led_light.setAttribute('led_y', i);
                led_light.setAttribute('mat_id', this.matrixID);
                led_light.id=i.toString()+j.toString()+this.matrixID
                led_light.onclick=()=>this.click(led_light)
                led_body.appendChild(led_light)
                }
            }
            return led_body;
        // document.getElementById(div_id).appendChild(led_body);
        }
}




matrix_list["mx1"] = new Matrix("mx1",8,8);
matrix_list["mx2"] = new Matrix("mx2",16,8);



document.getElementById("matrix_table").appendChild(matrix_list.mx1.get_matrix())
document.getElementById("matrix_table").appendChild(matrix_list.mx2.get_matrix())

// m1.draw("owo")

        // newDiv.id = 'new-div';
        // .setAttribute('role', 'alert');