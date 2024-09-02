// to jest do setupowania app nie presetu mordey setyup przyjmuje arg tablice mordy presetu
class Setup{
    constructor(face_arr,preset){
        this.face_arr=face_arr
        this.preset = preset 
    }
    face_data(panel){
        return this.face_arr[panel]
    }

    get_matrix_setup(){

    }
    
}