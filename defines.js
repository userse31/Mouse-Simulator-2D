/*
Utilizes GNU GENERAL PUBLIC LICENSE 3. See "LICENSE" file for details 
This program is free software! This means you may redistribute and/or modify this program under the terms of the GNU General Public License. Why you would want to redistribute/modify my horrible coding, who knows! But you can!!!
The GNU General Public License is published by the "Free Software Foundation, Inc" at 675 Mass Ave, Cambridge MA 02139, USA
*/

//In game calander and time
//the day
const HOUR_DIV=(65535/16);
const HOUR_MOD=16;//16 hours a day
const MINUTE_DIV=65535/(16*256);
const MINUTE_MOD=256;//256 minutes an hour
//16 ticks a minute
//Day: 0:00 to 3:255 and 12:00 to 15:255
//Night: 4:00 to 11:255
//Enemy chance percentage polynomial (a+bx+cx^2)
//tick 16384:50% (4:00)
//tick 32768:100% (8:00)
//tick 49152:50% (12:00)
const ENEMY_CHANCE_A=-100;
const ENEMY_CHANCE_B=1.22070312e-02;
const ENEMY_CHANCE_C=-1.86264515e-07;
const NIGHT_START_HOUR=4;
const NIGHT_END_HOUR=11;
//the year
const YEAR_LEN=256;//256 days in a year.
const MONTH_LEN=16;
const MONTH_MOD=16;//16 days in a month. 16 Months.
const MONTHLET_MOD=16;//"MONTHLET"=days in a month.
const WEEK_MOD=4;//4 day weeks.
//Month Names,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
const MONTH_NAMES=["Nulliuary","Uniuary","Duary","Triuary","Quadruary","Quinquary","Sexauary","Septuary","Octuary","Novemuary","Decemuary","Undecuary"];

//Enemys
const MAX_SPAWNS_ONCE=3;//Max enemy spawn group size.
const ENEMY_HEALTH=20;
const ENEMY_STRENGTH=1;
const CAT_HEALTH=40;
const CAT_STRENGTH=5;
const CAT_TICK=(16*256)*4;//every 4 hours in the slip.
const CAT_CHANCE=0.5;

//Navigators
const key_words=[
	"Android",
	"iPhone",
	"iPad",
	"iPod",
];

//Map size
const MAX_MAP_SIZE_NEG=-64;
const MAX_MAP_SIZE_POS=63;

//microwave cannon config
const MICROWAVE_PWM=20/65535;
const FILAMENT_THERMAL_MASS=255;
const FILAMENT_THERMAL_WARMUP=16;
const FILAMENT_THERMAL_COOLDOWN=8;
const FILAMENT_THERMAL_COOLDOWN_TICK=4;

//const FILAMENT_THERMAL_ENOUGH=240;
const FILAMENT_THERMAL_ENOUGH=240;
//entity id's
const NPC_ID=1;
const DROPPED_ITEM_ID=2;
const PROJ_ID=3;
const PLASMA_ID=4;
const BOBBER_ID=5;

//quotas
const PROJ_QUOTA=1000;//Max projectiles to process.
const PLASMA_QUOTA=50;//Max Plasmas to process.
const NPC_QUOTA=200;//Max NPC's to process.

//radio stuff
const RADIO_INTERFERENCE_DISTANCE=3;

//projectile directions
const P_NONE=-1;
const P_UP=0;
const P_DOWN=1;
const P_LEFT=2;
const P_RIGHT=3;

//rain
const RAIN_TICK=16;

//thunder
const THUN_DAMAGE=10;
const THUN_DECAY=1;
const THUN_CHAR=106;//T_PLASMA

//amber projectile
const AMBER_PROJ_DECAY=16;
const AMBER_PROJ_STRENGTH=15;

//Spear projectile
const SPEAR_DECAY=2;
const SPEAR_STRENGTH=20;

//Arrow projectile
const ARROW_DECAY=32;
const ARROW_STRENGTH=20;

//bobber
const MIN_CATCH_TIME=5;
const CATCH_TIME_ADD_MAX=25;

//fishing
const FISH_WEIGHT=0.85;
const JUNK_WEIGHT=0.10;
const TREASURE_WEIGHT=0.05;
const WEIGHT_SUM=1;

//Players and entities when on fire
const ON_FIRE_COUNT=8;//for fire_tick
const ON_FIRE_DAMAGE=1;

//game states
const GAMING="game";
const CRAFTING="craft";
const TITLE="title";

//debugging
const DEBUG_RANDOM_TICK=false;
const SHOW_KEYCODE=false;
const SHOW_HITSCAN=false;
const SHOW_HITSCAN_EFFECT=false;
const SHOW_NODES=false;
const TILE_MAP=false;
const FORCE_RAIN=false;

//weather
const W_CLEAR=0;
const W_RAIN=1;
const W_THUNDER=2;
const THUN_TICK_MOD=120;
const RAIN_TICK_MOD=10;

//plasma
const PLASMA_DECAY=4;
const PLASMA_DAMAGE=2;

//default lighting level rgbs
const DAY_RGB=[1,1,1];
const NIGHT_RGB=[0.75,0.75,0.75];
const NEST_RGB=[0.5,0.5,0.5];
const SLIP_RGB=[0.75,0.717,0.711];
const LARGEST_LIGHT_LEVEL=2;
const LOWEST_LIGHT_LEVEL=0;
const ENEMY_SPAWN_MAX_LUM=1;
const LUM_R_CONST=0.2126;
const LUM_G_CONST=0.7152;
const LUM_B_CONST=0.0722;

//tile light levels
const L_CLOCK_RADIO_STR=1;
const L_CLOCK_RADIO_RGB=[1*0.75,0.772*0.75,0.56*0.75];
const L_BORDER_STR=1;
const L_BORDER_RGB=[0.847,0.968,1];
const L_CAMP_FIRE_STR=4;
const L_CAMP_FIRE_RGB=[1,0.576,0.16];

const L_FIRE0_STR=2;
const L_FIRE0_RGB=[1,0.576,0.16];

const L_FIRE1_STR=1;
const L_FIRE1_RGB=[1,0.576,0.16];

const L_FIRE2_STR=0;
const L_FIRE2_RGB=[1,0.576,0.16];

const L_BMUSH_STR=0;
const L_BMUSH_RGB=[1,1,1];


//item id's
const I_NOTHING=0;
const I_BRANCH=1;
const I_HAY=2;
const I_GRASS=3;
const I_BROWN_MUSHROOM=4;
const I_RED_MUSHROOM=5;
const I_FENCE=6;
const I_STICK=7;
const I_STRING=8;
const I_SAPLING=9;
const I_LEAVES=10;
const I_BOWL=11;
const I_MUSHROOM_STEW=12;
const I_CARPET=13;
const I_BOW=14;
const I_BOW_AND_SPINDLE=15;
const I_AMBER=16;
const I_AIR0=17;
const I_SPEAR=18;
const I_RAYGUN=19;
//const I_POISONOUS_SPEAR=20;
const I_ARROW=20;
const I_CYAN_THING=21;
const I_DOOR=22;
const I_STONE=23;
const I_HAY_BAIL=24;
const I_W_FRUIT=25;//walnut stuff
const I_W_STONE=26;
const I_W_PEELS=27;
const I_BONE_MEAL=28;
const I_FIBERS=29;
const I_BOOK=30;
const I_BOOKSHELF=31;
const I_PAPER=32;
const I_IRON=33;
const I_MEAT=34;
const I_COPPER=35;
const I_COOKED_MEAT=36;
const I_IRON_WALL=37;
const I_COPPER_WALL=38;
const I_BOWL_OF_WATER=39;
const I_SUS_STEW=40;
const I_CAMP_FIRE=41;
const I_SAW_DUST=42;
const I_COMPOSTER=43;
const I_MDF_PUDDY=44;
const I_MDF=45;
const I_GRIND_STONE=46;
const I_GREEN_MDF=47;
const I_RED_MDF=48;
const I_CYAN_MDF=49;
const I_BLACK_WALL=50;
const I_BEDDING=51;
const I_HOUSE_CARPET=52;
const I_TREE_LEAVES=53;
const I_TREE_TRUNK=54;
const I_WATER=55;
const I_FIRE=56;
const I_CLOCK_RADIO=57;
const I_NPC_HOLE=59;
const I_W_TRUNK=60;//Walnut stuff
const I_W_L1=61;//Walnut leaves
const I_W_L2=62;
const I_W_L3=63;
const I_W_L4=64;
const I_W_L5=65;
const I_W_L6=66;
const I_COPPER_WIRE=67;
const I_SWITCH=68;
const I_NOT_GATE=69;
const I_GATE=70;
const I_WIRE_JUMPER=71;
const I_PUMP=72;
const I_FAN=73;
const I_ELECTRODES=74;
const I_NAPKIN=75;
const I_VACUUM_TUBE=76;
const I_THREAD=77;
const I_GLASS=78;
const I_MICROWAVE_CANNON=79;
const I_T_GATE=80;
const I_RING=81;
const I_MOUSE_EGG=82;
const I_ENEMY_EGG=83;
const I_CAT_EGG=84;
const I_CAPACITOR=85;
const I_BUTTON=86;
const I_FISH_ROD=87;
const I_FISH=88;

//tile id's
const T_WHITE=0;
const T_BLACK_INV=1;
const T_DITHER=2;
const T_MOUSE=3;
const T_ENEMY=4;
const T_BLACK=5;
const T_HOLE=6;
const T_BEDDING=7;
const T_BORDER=8;
const T_BRANCH=9;
const T_CRAFT_SPACE=10;
const T_CRAFT_ARROW=11;
const T_HAY=12;
const T_GRASS=13;
const T_TREE_LEAVES=14;
const T_TREE_TRUNK=15;
const T_BROWN_MUSHROOM=16;//
const T_RED_MUSHROOM=17;
const T_FENCE=18;
const T_ATTACK=19;
const T_RAYGUN_RING=20;
const T_STICK=21;
const T_STRING=22;
const T_CLOCK_RADIO=23;//
const T_SAPLING=24;
const T_LEAVES=25;
const T_BOWL=26;
const T_MUSHROOM_STEW=27;
const T_CARPET=28;
const T_WATER=29;
const T_FIRE0=30;//
const T_FIRE1=31;//
const T_FIRE2=32;//
const T_BOW=33;
const T_BOW_AND_SPINDLE=34;
const T_AMBER=35;
const T_RANDOM_TICK=36;
const T_SPEAR=37;
const T_RAYGUN=38;
//const T_POISONOUS_SPEAR=39;
const T_ARROW=39;
const T_CYAN_THING=40;//
const T_STONE=41;
const T_DOOR_CLOSED=42;
const T_DOOR_OPEN=43;
const T_NPC_HOLE=44;
const T_WAL_TRUNK=45;//Walnut stuff.
const T_WAL_LEAVES1=46;
const T_WAL_LEAVES2=47;
const T_WAL_LEAVES3=48;
const T_WAL_LEAVES4=49;
const T_WAL_LEAVES5=50;
const T_WAL_LEAVES6=51;
const T_WAL_FRUIT=52;
const T_WAL_STONE=53;
const T_WAL_PEELS=54;
const T_BONE_MEAL=55;
const T_FIBERS=56;
const T_BOOK=57;
const T_BOOKSHELF=58;
const T_PAPER=59;
const T_IRON=60;
const T_MEAT=61;
const T_COPPER=62;
const T_COOKED_MEAT=63;
const T_IRON_WALL=64;
const T_COPPER_WALL=65;
const T_BOWL_OF_WATER=66;
const T_SUSPICIOUS_STEW=67;
const T_CAMP_FIRE=68;//
const T_SAW_DUST=69;
const T_COMPOSTER=70;
const T_MDF_PUDDY=71;
const T_MDF=72;
const T_GRIND_STONE=73;
const T_GREEN_MDF=74;
const T_RED_MDF=75;
const T_CYAN_MDF=76;
const T_C_W_UP_OFF=77;//Copper wire
const T_C_W_DOWN_OFF=78;
const T_C_W_LEFT_OFF=79;
const T_C_W_RIGHT_OFF=80;
const T_C_W_UP_ON=81;
const T_C_W_DOWN_ON=82;
const T_C_W_LEFT_ON=83;
const T_C_W_RIGHT_ON=84;
const T_COPPER_WIRE=85;//Item
const T_SWITCH_OFF=86;
const T_SWITCH_ON=87;
const T_NOT_GATE_OFF=88;
const T_NOT_GATE_ON=89;
const T_GATE_OFF=90;
const T_GATE_ON=91;
const T_WIRE_JUMPER=92;
const T_PUMP=93;
const T_FAN=94;
const T_ELECTRODES_OFF=95;
const T_ELECTRODES_ON=96;
const T_NAPKIN=97;
const T_VACUUM_TUBE=98;
const T_THREAD=99;
const T_HOUSE_CARPET=100;
const T_GLASS=101;
const T_MICROWAVE_CANNON=102;
const T_T_GATE_OFF=103;
const T_T_GATE_ON=104;
const T_HITSCAN_DEBUG=105;
const T_PLASMA=106;
const T_RING=107;
const T_CAT=108;
const T_MOUSE_EGG=109;
const T_ENEMY_EGG=110;
const T_CAT_EGG=111;
const T_CAP4=112;
const T_CAP3=113;
const T_CAP2=114;
const T_CAP1=115;
const T_CAP0=116;
const T_BUTTON_OFF=117;
const T_BUTTON_ON=118;
const T_RAIN0=119;
const T_RAIN1=120;
const T_FISH_ROD=121;
const T_FISH_BOBBER=122;
const T_FISH=123;
