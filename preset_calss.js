//panels panel name + rozmiar + isrgb

class Led_preset{
    constructor(name,panels){
     
        this.name=name
        this.preset=panels
    }
    get_preset_body(up,down){
        document.getElementById(down).appendChild(this.preset.m1.get_matrix_body)
        if(this.name=="mk5"){
            document.getElementById(down).appendChild(this.preset.m3.get_matrix_body)
        }
        document.getElementById(down).appendChild(this.preset.m2.get_matrix_body)
        document.getElementById(up).appendChild(this.preset.e1.get_matrix_body)
        document.getElementById(up).appendChild(this.preset.n1.get_matrix_body)
        document.getElementById(up).appendChild(this.preset.n2.get_matrix_body)
        document.getElementById(up).appendChild(this.preset.e2.get_matrix_body)
    }
}

// face_list = {}
// face_list["n1"]=new Matrix("qwe1",false,8,8,"green","n1"),
// face_list["n2"]=new Matrix("qwe2",false,8,8,"green","n2"),
// face_list["m1"]=new Matrix("qwe3",false,32,8,"green","m1"),
// face_list["m2"]=new Matrix("qwe4",false,32,8,"green","m2"),
// face_list["e1"]=new Matrix("qwe5",false,16,8,"green","e1"),
// face_list["e2"]=new Matrix("qwe6",false,16,8,"green","e2"),

// mk3 = new Led_preset("mk3",face_list)
// mk3.get_preset_body("up","down")

face_list2 = {}
face_list2["n1"]=new Matrix("qwe1",false,8,8,"green","n1"),
face_list2["n2"]=new Matrix("qwe2",false,8,8,"green","n2"),
face_list2["m1"]=new Matrix("qwe3",false,32,8,"green","m1"),
face_list2["m3"]=new Matrix("qwe7",false,16,8,"green","m3"),
face_list2["m2"]=new Matrix("qwe4",false,32,8,"green","m2"),
face_list2["e1"]=new Matrix("qwe5",false,16,8,"green","e1"),
face_list2["e2"]=new Matrix("qwe6",false,16,8,"green","e2"),

mk5 = new Led_preset("mk5",face_list2)
mk5.get_preset_body("up","down")