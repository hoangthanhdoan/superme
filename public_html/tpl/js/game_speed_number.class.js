/**{game:number, } **/
class Game_speed_number extends Game_numbers{
    //Sinh du lieu
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_speed_number");
        
        super(para);
    }
}