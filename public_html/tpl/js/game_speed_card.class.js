/**{game:number, } **/
class Game_speed_card extends Game_random_card{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_speed_card");
        super(para);
    }
}