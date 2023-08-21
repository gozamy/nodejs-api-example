export class Fouls {
    committed?: number;
    drawn?: number;
}

export class Crosses {
    total?: number;
    accurate?: number;
}

export class Dribbles {
    attempts?: number;
    success?: number;
    dribbled_past?: number;
}

export class Duels {
    total?: number;
    won?: number;
}

export class Passes {
    total?: number;
    accuracy?: number;
    key_passes?: number;
}

export class Penalties {
    won?: any;
    scores?: any;
    missed?: any;
    committed?: number;
    saves?: any;
}

export class Shots {
    shots_total?: number;
    shots_on_target?: number;
    shots_off_target?: any;
}

export class PlayerItems {
    player_id?: number;
    team_id?: number;
    country_id?: number;
    position_id?: number;
    common_name?: string;
    display_name?: string;
    fullname?: string;
    firstname?: string;
    lastname?: string;
    nationality?: string;
    birthdate?: string;
    birthcountry?: string;
    birthplace?: string;
    height?: string;
    weight?: string;
    image_path!: string;
}

export class Player {
    data: PlayerItems = new PlayerItems();
}

export class MatchStats {
    player_id?: number;
    position_id?: number;
    number?: number;
    captain!: number;
    injured: boolean = false;
    minutes?: number;
    appearences?: number;
    lineups?: number;
    substitute_in?: number;
    substitute_out?: number;
    substitutes_on_bench?: number;
    goals?: number;
    owngoals?: any;
    assists?: number;
    saves?: number;
    inside_box_saves?: number;
    dispossesed?: any;
    interceptions?: number;
    yellowcards?: number;
    yellowred?: number;
    redcards?: number;
    tackles?: number;
    blocks?: number;
    hit_post?: number;
    fouls!: Fouls;
    crosses: Crosses = new Crosses();
    dribbles: Dribbles = new Dribbles();
    duels: Duels = new Duels();
    passes: Passes = new Passes();
    penalties: Penalties = new Penalties();
    shots: Shots = new Shots();
    player: Player = new Player();
}

export class MatchObject {
    data: MatchStats[] = [];
}



