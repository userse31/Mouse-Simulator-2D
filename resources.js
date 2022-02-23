//preinitialized data
const MAX_MAP_SIZE_NEG=-64;
const MAX_MAP_SIZE_POS=63;
const MICROWAVE_PWM=2;
var cur_page=0;
var paused=0;
var last_dir="";
var player={brain:{gender:0.0, dysphoria:1, mode:1}, name:"Alex", x:1, y:1, health:20, strength:1, inv:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],0], creative:0, tainted:0, days:0, noclip:0,seed:0,};
//inventory: [(item id),(item amount)]; player.inv[10]=selected pointer
//maps
var pages=[{
	//home_page
	map:[
	[1,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,0,10,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,11,10,1],//craft bench
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,0,10,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,13,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	entities:[
        {id:2, char:9, x:4, y:10, item: [1,10]},//branch
        {id:2, char:12, x:5, y:10, item: [2,10]},//hay
        {id:2, char:27, x:5, y:11, item: [12,10]},//stew
	],
	holes:[
		//holes
		{x:1, y:0, dest_page:[0,0,0], next_x: 19, next_y: 12},//gen new page
		//{x:2, y:0, dest_page:[null,null,1], next_x: 19, next_y: 12},//gen new slip page
		//dest_page:[page_x,page_y,page_layer]
	],
	metadata:{
	safety:1,//Do enemies spawn here at night?
	north_goto:false,//Can leave north edge
	south_goto:false,//Can leave south edge
	west_goto:false,//Can leave west edge
	east_goto:false,//Can leave north edge
	x:0,
	y:0,
	layer:-1,
	//underground:true,
	}
},
];

//the font/sprites
const font=[
//0, solid white
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//1, solid black
[
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,0,0,0,255,255,255
],
//2, dither
[
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,255,255,255,0,0,0
],
//3, Deer mouse/player
[
0,1,1,1,1,1,1,0,
1,1,1,1,1,1,1,1,
1,1,0,1,1,0,1,1,
1,1,1,1,1,1,1,1,
1,1,0,0,0,0,1,1,
1,1,1,0,0,1,1,1,
1,1,1,1,1,1,1,1,
0,1,1,1,1,1,1,0,185,122,87,255,255,255
],
//4	Enemy?
[
0,1,1,1,1,1,1,0,
1,1,1,1,1,1,1,1,
1,1,0,1,1,0,1,1,
1,1,1,1,1,1,1,1,
1,1,1,0,0,1,1,1,
1,1,0,0,0,0,1,1,
1,1,1,1,1,1,1,1,
0,1,1,1,1,1,1,0,185,122,87,255,255,255
],
//5, solid black, not invul
[
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,0,0,0,255,255,255
],
//6, hole	
[
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,0,0,1,1,1,
1,1,0,0,0,0,1,1,
1,1,0,0,0,0,1,1,
1,1,1,0,0,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,0,0,0,128,128,255
],
//7, bedding
[
1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,244,164,96,255,255,255
],
//8, border
[
1,1,1,1,1,1,1,1,
1,0,1,0,0,1,0,1,
1,1,0,0,1,0,0,1,
1,0,0,1,0,0,1,1,
1,0,1,0,0,1,0,1,
1,1,0,0,1,0,0,1,
1,0,0,1,0,0,1,1,
1,1,1,1,1,1,1,1,0,255,255,255,255,255
],
//9, Branch
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,0,0,0,
0,0,1,0,1,0,1,0,
0,0,0,1,0,0,1,0,
0,0,0,0,1,1,0,0,
0,0,0,0,1,1,0,0,
0,0,1,1,0,0,1,0,
0,0,0,0,0,0,0,1,244,164,96,255,255,255
],
//10, craft_space
[
1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,0,0,0,255,255,255
],
//11, craft_arrow
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,0,1,0,
0,1,1,1,1,1,1,1,
0,1,1,1,1,1,1,1,
0,0,0,0,0,0,1,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//12, hay
[
0,0,0,1,1,0,0,0,
0,0,1,0,1,1,0,0,
0,1,0,1,0,1,1,0,
1,0,1,0,1,0,1,1,
1,1,0,1,0,1,0,1,
0,1,1,0,1,0,1,0,
0,0,1,0,0,1,0,0,
0,0,0,1,1,0,0,0,244,164,96,255,255,255
],
//13, Grass
[
0,1,0,1,0,1,0,1,
1,0,0,1,0,1,0,1,
1,0,0,1,0,0,1,0,
1,0,0,1,0,0,1,0,
0,1,1,0,0,1,0,1,
0,1,1,0,0,1,0,1,
1,0,0,1,0,1,0,1,
1,1,1,1,1,1,1,1,0,255,0,255,255,255
],
//14, Tree leaves
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,1,1,1,1,0,0,
0,1,1,1,1,1,1,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
0,1,1,1,1,1,1,0,0,255,0,255,255,255
],
//15, Tree trunk
[
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,1,1,1,1,1,1,0,185,122,87,255,255,255
],
//16, brown mushroom
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,1,1,1,1,1,1,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,179,170,154,255,255,255
],
//17, red mushroom
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,1,1,1,1,1,1,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,255,0,0,255,255,255
],
//18, Fence
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
1,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,1,185,122,87,255,255,255
],
//19, attack indicator/projectile
[
0,0,0,1,1,0,0,0,
0,1,0,1,1,0,1,0,
0,0,1,1,1,1,0,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
0,0,1,1,1,1,0,0,
0,1,0,1,1,0,1,0,
0,0,0,1,1,0,0,0,255,0,0,255,255,255
],
//20, raygun ring
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,0,0,1,0,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,0,1,0,0,1,0,0,
0,0,0,1,1,0,0,0,
0,0,0,0,0,0,0,0,0,255,0,255,255,255
],
//21, stick
[
0,0,0,0,0,0,0,0,
0,1,1,0,0,0,0,0,
0,1,1,1,0,0,0,0,
0,0,1,1,1,0,0,0,
0,0,0,1,1,1,0,0,
0,0,0,0,1,1,1,0,
0,0,0,0,0,1,1,0,
0,0,0,0,0,0,0,0,185,122,87,255,255,255
],
//22, String
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,0,0,1,0,0,
0,1,0,0,0,0,0,0,
0,0,1,1,1,0,0,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,1,1,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//23, Bow
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//24, Sapling.
[
0,1,0,0,1,0,1,0,
0,1,0,0,1,0,1,0,
0,0,1,1,1,1,0,0,
1,0,0,1,1,0,0,1,
0,1,1,1,1,1,1,0,
0,0,1,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,0,255,0,255,255,255
],
//25, Leaves
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,1,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,1,0,0,
0,0,0,0,0,0,1,0,
0,0,0,0,0,0,0,0,0,255,0,255,255,255
],
//26, Bowl
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,0,1,0,0,1,0,0,
0,0,0,1,1,0,0,0,0,0,0,255,255,255
],
//27, Mushroom Stew
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,0,0,0,255,255,255
],
//28, Carpet
[
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,193,113,45,255,255,255
],
//29, water
[
1,1,0,0,1,1,1,1,
0,0,1,1,0,0,0,0,
1,1,0,0,1,1,1,1,
0,0,1,1,0,0,0,0,
1,1,0,0,1,1,1,1,
0,0,1,1,0,0,0,0,
1,1,0,0,1,1,1,1,
0,0,1,1,0,0,0,0,0,0,200,0,0,150
],
//30, fire 0
[
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,200,0,0,255,255,255
],
//31, fire 1
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,200,0,0,255,255,255
],
//32, fire 2
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,200,0,0,255,255,255
],
//33, bow
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,0,1,0,0,0,
0,1,0,1,0,0,0,0,
0,1,1,0,0,0,0,0,
0,1,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//34, bow and spindle
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,0,1,0,0,0,
0,1,0,1,0,0,1,0,
0,1,1,0,0,1,0,0,
0,1,0,0,1,0,0,0,
0,0,0,1,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//35, Amber
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,200,0,0,255,255,255
],
//36, Fire Bow
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,0,1,0,0,0,
0,1,0,1,0,0,0,0,
0,1,1,0,0,1,1,0,
0,1,0,0,1,1,1,0,
0,0,0,0,1,1,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//37, spear
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,1,1,0,
0,0,0,0,0,1,1,0,
0,0,0,0,1,0,1,0,
0,0,0,1,0,0,0,0,
0,0,1,0,0,0,0,0,
0,1,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,185,122,87,255,255,255
],
//38, Raygun
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,0,0,0,0,0,0,255,0,0,255,255,255
],
//39, Poisonous Spear
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,1,1,0,
0,0,0,0,0,1,1,0,
0,0,0,0,1,0,1,0,
0,0,0,1,0,0,0,0,
0,0,1,0,0,0,0,0,
0,1,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,255,0,0,255,255,255
],
//40, Cyan Thing
[
0,0,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,0,0,1,1,0,0,0,
0,0,0,1,0,0,0,0,
0,1,0,0,0,0,0,0,
1,1,1,0,1,1,0,0,
0,1,0,0,1,1,0,0,
0,0,0,0,0,0,0,0,0,255,255,120,120,120
],
//41, stone
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,120,120,120,255,255,255
],
//42, Door closed
[
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,185,122,87,255,255,255
],
//43, Door open
[
0,1,1,1,1,1,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,185,122,87,255,255,255
],
//44, npc hole
[
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,0,0,1,1,1,
1,1,0,0,0,0,1,1,
1,1,0,0,0,0,1,1,
1,1,1,0,0,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,0,0,0,255,255,255
],
//45, Walnut trunk
[
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,1,1,1,1,1,1,0,165,102,67,255,255,255
],
//46, Walnut leaves 1 (middle)
[
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,0,215,0,255,255,255
],
//47, Walnut leaves 2 (left)
[
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,0,1,1,1,1,1,0,215,0,255,255,255
],
//48, Walnut leaves 3 (right)
[
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,0,0,0,0,215,0,255,255,255
],
//49, Walnut leaves 4 (top)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,0,215,0,255,255,255
],
//50, Walnut leaves 5 (top left)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,
0,0,1,1,1,1,1,1,0,215,0,255,255,255
],
//51, Walnut leaves 6 (top right)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
1,1,1,1,1,0,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,
1,1,1,1,1,1,0,0,0,215,0,255,255,255
],
//52, walnut fruit
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,160,0,255,255,255
],
//53, walnut stone
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,165,102,67,255,255,255
],
//54, walnut peels
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,0,1,1,0,0,0,0,
0,0,0,0,0,0,0,0,0,160,0,255,255,255
],
//55, Bone meal
[
0,0,0,0,0,0,0,0,
0,1,0,1,0,0,0,0,
0,0,0,0,1,0,0,0,
0,0,0,1,0,1,1,0,
0,0,0,1,0,0,1,0,
0,1,0,0,1,0,1,0,
0,0,1,1,1,0,0,0,
0,0,0,0,0,0,0,0,160,160,160,255,255,255
],
//56, Fibers
[
0,0,0,0,0,0,0,0,
0,1,0,0,1,0,1,0,
0,1,0,0,1,0,1,0,
0,0,1,0,1,0,1,0,
0,0,1,0,0,1,0,0,
1,0,1,1,0,1,0,0,
1,0,0,1,0,1,0,0,
0,0,0,0,0,0,0,0,0,160,0,255,255,255
],
//57, book
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,1,0,
0,1,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,
0,0,0,1,0,0,0,0,
0,0,0,0,0,0,0,0,139,69,19,255,255,255
],
//58, bookshelf
[
1,1,1,1,1,1,1,1,
1,0,1,0,1,0,0,1,
1,0,1,0,1,0,0,1,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
1,0,1,0,0,1,0,1,
1,0,1,0,0,1,0,1,
1,1,1,1,1,1,1,1,165,102,67,255,255,255
],
//59, Paper
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,1,0,
0,1,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,
0,0,0,1,0,0,0,0,
0,0,0,0,0,0,0,0,160,160,160,255,255,255
],
//60, Iron
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,1,0,
0,1,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,
0,0,0,1,0,0,0,0,
0,0,0,0,0,0,0,0,211,211,211,255,255,255
],
//61, Meat
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,1,1,0,
0,0,0,0,1,1,1,1,
0,0,0,0,1,1,1,1,
0,0,1,1,1,1,1,1,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,249,144,111,255,255,255
],
//62, Copper
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,1,0,
0,1,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,
0,0,0,1,0,0,0,0,
0,0,0,0,0,0,0,0,184,115,51,255,255,255
],
//63, Cooked Meat
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,1,1,0,
0,0,0,0,1,1,1,1,
0,0,0,0,1,1,1,1,
0,0,1,1,1,1,1,1,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,76,32,5,255,255,255
],
//64, Iron Wall
[
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,211,211,211,160,160,160
],
//65, Copper Wall
[
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,184,115,51,169,100,26
],
//66, Bowl of Water
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,0,0,255,255,255,255
],
//67, Suspicious Stew
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,0,255,255,255,255,255
],
//68, Camp Fire
[
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,0,0,0,0,0,0,
0,1,1,0,0,1,1,0,
0,0,0,1,1,0,0,0,
0,1,1,0,0,1,1,0,200,0,0,255,255,255
],
//69, Saw Dust
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,0,1,0,0,
0,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,0,
0,0,1,0,1,0,1,0,
0,0,0,1,0,1,0,0,185,122,87,255,255,255
],
//70, Bowl of Glue
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,200,200,0,255,255,255
],
//71, mdf puddy
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,
0,0,1,1,1,1,0,0,185,122,87,255,255,255
],
//72, mdf
[
1,1,1,1,0,1,1,1,
0,0,0,0,0,0,0,0,
1,1,0,1,1,1,1,1,
0,0,0,0,0,0,0,0,
1,1,1,1,1,0,1,1,
0,0,0,0,0,0,0,0,
1,1,1,0,1,1,1,1,
0,0,0,0,0,0,0,0,185,122,87,200,137,102
],
//73, Grind Stone
[
0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,1,0,0,
0,0,1,1,1,0,0,0,
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,1,1,1,1,1,0,120,120,120,255,255,255
],
//74, green stained mdf
[
1,1,1,1,0,1,1,1,
0,0,0,0,0,0,0,0,
1,1,0,1,1,1,1,1,
0,0,0,0,0,0,0,0,
1,1,1,1,1,0,1,1,
0,0,0,0,0,0,0,0,
1,1,1,0,1,1,1,1,
0,0,0,0,0,0,0,0,93,141,46,108,156,61
],
//75, Red stained mdf
[
1,1,1,1,0,1,1,1,
0,0,0,0,0,0,0,0,
1,1,0,1,1,1,1,1,
0,0,0,0,0,0,0,0,
1,1,1,1,1,0,1,1,
0,0,0,0,0,0,0,0,
1,1,1,0,1,1,1,1,
0,0,0,0,0,0,0,0,220,61,44,235,76,59
],
//76, Cyan Stained mdf
[
1,1,1,1,0,1,1,1,
0,0,0,0,0,0,0,0,
1,1,0,1,1,1,1,1,
0,0,0,0,0,0,0,0,
1,1,1,1,1,0,1,1,
0,0,0,0,0,0,0,0,
1,1,1,0,1,1,1,1,
0,0,0,0,0,0,0,0,93,189,171,108,204,186
],
//77, Copper wire up (off)
[
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,1,0,1,1,0,1,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,184,115,51,255,255,255
],
//78, Copper wire down (off)
[
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,1,0,1,1,0,1,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,184,115,51,255,255,255
],
//79, Copper wire left (off)
[
0,0,0,0,0,0,0,0,
0,0,1,0,0,0,0,0,
0,1,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
0,1,0,0,0,0,0,0,
0,0,1,0,0,0,0,0,
0,0,0,0,0,0,0,0,184,115,51,255,255,255
],
//80, Copper wire right (off)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,0,1,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
0,0,0,0,0,0,1,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,0,0,0,184,115,51,255,255,255
],
//81, Copper wire up (on)
[
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,
0,1,0,1,1,0,1,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,184,115,255,255,255,255
],
//82, Copper wire down (on)
[
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,1,0,1,1,0,1,0,
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,184,115,255,255,255,255
],
//83, Copper wire left (on)
[
0,0,0,0,0,0,0,0,
0,0,1,0,0,0,0,0,
0,1,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
0,1,0,0,0,0,0,0,
0,0,1,0,0,0,0,0,
0,0,0,0,0,0,0,0,184,115,255,255,255,255
],
//84, Copper wire right (on)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,0,1,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
0,0,0,0,0,0,1,0,
0,0,0,0,0,1,0,0,
0,0,0,0,0,0,0,0,184,115,255,255,255,255
],
//85, Copper wire (item)
[
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,184,115,51,255,255,255
],
//86, Switch (off)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,1,0,0,
0,0,0,0,1,0,0,0,
0,0,0,1,0,0,0,0,
1,1,1,0,0,1,1,1,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//87, Switch (on)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,255,255,255
],
//88, not gate (off)
[
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,
1,0,0,0,0,0,0,1,
1,1,0,0,0,0,1,1,
1,1,0,0,0,0,1,1,
1,0,0,0,0,0,0,1,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,184,115,51,0,255,255
],
//89, not gate (on)
[
0,0,1,1,1,1,0,0,
0,0,0,1,1,0,0,0,
1,0,0,0,0,0,0,1,
1,1,0,0,0,0,1,1,
1,1,0,0,0,0,1,1,
1,0,0,0,0,0,0,1,
0,0,0,1,1,0,0,0,
0,0,1,1,1,1,0,0,184,115,255,0,255,255
],
//90, gate (off)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,184,115,51,184,115,51
],
//91, gate (on)
[
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,184,115,255,184,115,255
],
//92, Wire Jumper
[
0,0,0,1,1,0,0,0,
0,0,0,0,1,0,0,0,
0,0,1,1,1,1,1,0,
1,1,1,0,1,0,1,1,
1,1,1,0,1,0,1,1,
0,0,0,0,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,184,115,51,255,255,255
],
//93, Pump
[
0,0,0,0,0,1,0,0,
0,0,1,0,0,1,0,0,
0,1,0,1,0,1,0,0,
0,1,0,1,1,1,1,0,
0,1,0,1,1,1,1,0,
0,1,0,1,1,1,1,0,
0,1,0,0,0,0,0,0,
0,1,0,0,0,0,0,0,100,100,100,255,255,255
],
//94, Fan
[
0,0,0,0,0,0,0,0,
0,1,0,0,0,0,1,0,
0,0,1,0,0,1,0,0,
0,0,0,1,1,0,0,0,
0,0,0,1,1,0,0,0,
0,0,1,0,0,1,0,0,
0,1,0,0,0,0,1,0,
0,0,0,0,0,0,0,0,100,100,100,255,255,255
],
//95, Electrodes, off
[
0,0,0,0,0,0,0,0,
0,1,0,0,0,0,1,0,
1,1,1,0,0,1,1,1,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,184,115,51,255,255,255
],
//96, Electrodes, on
[
0,0,0,0,0,0,0,0,
0,1,0,0,0,0,1,0,
1,1,1,0,0,1,1,1,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,184,115,255,255,255,255
],
//97, napkin, (black-red plaid)
[
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,255,0,0,0,0,0
],
//98, Vacuum Tube
[
0,1,1,1,1,1,1,0,
1,0,0,0,0,0,0,1,
1,1,1,1,1,0,0,1,
1,0,0,0,0,0,0,1,
1,0,0,1,1,1,1,1,
1,0,0,0,0,0,0,1,
1,0,0,1,1,0,0,1,
0,1,1,1,1,1,1,0,0,0,0,255,255,255
],
//99, thread
[
0,0,0,0,0,0,0,0,
0,0,0,0,1,0,1,0,
0,0,0,0,1,1,0,0,
0,0,0,1,1,1,1,0,
0,1,1,1,1,0,0,0,
0,0,1,1,0,0,0,0,
0,1,0,1,0,0,0,0,
0,0,0,0,0,0,0,0,213,200,181,255,255,255
],
//100, House Carpet
[
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,
1,0,1,0,1,0,1,0,
0,1,0,1,0,1,0,1,244,226,198,255,255,255
],
//101, Glass
[
1,1,1,1,1,1,1,1,
1,0,1,0,0,1,0,1,
1,1,0,0,1,0,0,1,
1,0,0,1,0,0,1,1,
1,0,1,0,0,1,0,1,
1,1,0,0,1,0,0,1,
1,0,0,1,0,0,1,1,
1,1,1,1,1,1,1,1,0,0,0,255,255,255
],
//102, Microwave Cannon
[
0,0,1,1,1,1,0,0,
0,1,0,0,0,0,1,0,
0,0,0,1,1,0,0,0,
0,0,1,0,0,1,0,0,
1,0,0,0,0,0,0,1,
1,0,0,1,1,0,0,1,
0,1,0,1,1,0,1,0,
0,0,1,1,1,1,0,0,0,0,0,255,255,255
],
];

const properties={
walkable:[0,2,6,7,9,10,11,13,14,15,16,17,24,28,29,30,31,32,38,40,43,44,45,46,47,48,49,50,51,52,54,68,73,77,78,79,80,81,82,83,84,86,87,88,89,92,95,96,100],
not_spawnable:[2,28,29,30,31,32,43,68,73,88,89,86,87,77,78,79,80,81,82,83,84,8],
burnable:[12,13,14,15,18,24,28,42,43,45,46,47,48,49,50,51,72,74,75,76,100],
bangable:[18,42,43,12,5,93,94,97,72,74,75,76,101],
placeable_breakable:[3,4,5,6,9,13,21,22,24,25,27,31,37,38,41,45,46,47,48,49,68,69,70,71,72,73,74,51,52,78],
bonemealable:[52,51,50,49,48,47,46,24,17,16,15,13],
creative_noremove:[1,6,10,11,8],
elec_on:[87,81,82,83,84,89,91,96],
elec_off:[86,77,78,79,80,88,90,95],
wires:[77,78,79,80,81,82,83,84],
attack_items:[17,18,19,20,79],
};
const item_drops={
enemy:[
{chance:0.1,item_id:34,item_min:1,item_max:1},//Meat
{chance:0.05,item_id:33,item_min:1,item_max:1},//iron
{chance:0.05,item_id:35,item_min:1,item_max:1},//copper
{chance:0.01,item_id:21,item_min:1,item_max:1},//cyan thing, 115
],
enemy_slip:[
{chance:0.1,item_id:75,item_min:1,item_max:1},//Napkin
{chance:0.1,item_id:77,item_min:1,item_max:1},//Thread
{chance:0.05,item_id:78,item_min:1,item_max:10},//Glass
]};
//items
const item_char=[
0,//Nothing,0
9,//Branch,1
12,//Hay,2
13,//Grass,3
16,//Brown Mushroom,4
17,//Red Mushroom,5
18,//Fence,6
21,//stick,7
22,//string,8
24,//Sapling,9
25,//Leaves,10
26,//Bowl,11
27,//Mushroom Stew,12
28,//Carpet,13
33,//Bow,14
34,//Bow and spindle,15
35,//Amber,16
36,//Fire bow, 17
37,//Spear,18
38,//Raygun,19
39,//Poisonous Spear, 20
40,//cyan thing, 21
42,//Door, 22
41,//Stone, 23
12,//hay bail, 24
52,//walnut fruit, 25
53,//walnut stone, 26
54,//walnut peels, 27
55,//bone meal, 28
56,//Fibers, 29
57,//Book, 30
58,//Bookshelf, 31
59,//Paper, 32
60,//Iron,33
61,//Meat,34
62,//Copper,35
63,//Cooked Meat,36
64,//Iron Wall,37
65,//Copper Wall,38
66,//Bowl of Water,39
67,//Suspicious Stew,40
68,//Camp Fire,41
69,//Saw Dust,42
70,//Bowl of Glue,43
71,//mdf puddy,44
72,//mdf,45
73,//Grind Stone,46
74,//Green Stained MDF,47
75,//Red Stained MDF,48
76,//Cyan Stained MDF,49
5,//Black Wall,50
7,//bedding,51
100,//House Carpet,52
14,//Tree leaves,53
15,//Tree Trunk,54
29,//Water,55
30,//Fire 0,56
31,//Fire 1,57
32,//Fire 2,58
44,//NPC Hole,59
45,//Walnut Trunk,60
46,//Walnut Leaves 1,61
47,//Walnut Leaves 2,62
48,//Walnut Leaves 3,63
49,//Walnut Leaves 4,64
50,//Walnut Leaves 5,65
51,//Walnut Leaves 6,66
85,//Copper wire,67
86,//Switch,68
88,//Not gate,69
90,//Gate, 70
92,//Wire Jumper,71
93,//Pump,72
94,//Fan,73
95,//Electrodes,74
97,//Napkin,75
98,//Vacuum Tube,76
99,//Thread,77
101,//Glass,78
102,//Microwave Cannon,79
];

const item_names=[
"Nothing",
"Branch",
"Hay",
"Grass",
"Brown Mushroom",
"Red Mushroom",
"Fence",
"Stick",
"String",
"Sapling",
"Leaves",
"Bowl",
"Mushroom Stew",
"Carpet",
"Bow",
"Bow and Spindle",
"Amber",
"Fire Bow",
"Spear",
"Raygun",
"Poisonous Spear",
"Cyan Thing",
"Door",
"Stone",
"Hay Bail",
"Walnut Fruit",
"Walnut Stone",
"Walnut Peels",
"Bone Meal",
"Fibers",
"Book",
"Bookshelf",
"Paper",
"Iron",
"Meat",
"Copper",
"Cooked Meat",
"Iron Wall",
"Copper Wall",
"Bowl of Water",
"Suspicious Stew",
"Camp Fire",
"Saw Dust",
"Bowl of Glue",
"MDF Puddy",
"MDF",
"Grind Stone",
"Green Stained MDF",
"Red Stained MDF",
"Cyan Stained MDF",
"Black Wall",
"Bedding",
"House Carpet",
"Tree Leaves",
"Tree Trunk",
"Water",
"Fire 0",
"Fire 1",
"Fire 2",
"NPC Hole",
"Walnut Trunk",
"Walnut Leaves 1",
"Walnut Leaves 2",
"Walnut Leaves 3",
"Walnut Leaves 4",
"Walnut Leaves 5",
"Walnut Leaves 6",
"Copper Wire",
"Switch",
"Not Gate",
"Gate",
"Wire Jumper",
"Pump",
"Fan",
"Electrodes",
"Napkin",
"Vacuum Tube",
"Thread",
"Glass",
"Microwave Cannon"
];
//crafting
const recipies=[
{//sapling to stick+leaves
input_id:[9,0,0,0,0,0],
output:[[7,1],[10,1]]
},
{//sapling to stick+leaves
input_id:[0,9,0,0,0,0],
output:[[7,1],[10,1]]
},
{//sapling to stick+leaves
input_id:[0,0,9,0,0,0],
output:[[7,1],[10,1]]
},
{//sapling to stick+leaves
input_id:[0,0,0,9,0,0],
output:[[7,1],[10,1]]
},
{//sapling to stick+leaves
input_id:[0,0,0,0,9,0],
output:[[7,1],[10,1]]
},
{//sapling to stick+leaves
input_id:[0,0,0,0,0,9],
output:[[7,1],[10,1]]
},
{//branch to stick+leaves
input_id:[1,0,0,0,0,0],
output:[[7,1],[10,1]]
},
{//branch to stick+leaves
input_id:[0,1,0,0,0,0],
output:[[7,1],[10,1]]
},
{//branch to stick+leaves
input_id:[0,0,1,0,0,0],
output:[[7,1],[10,1]]
},
{//branch to stick+leaves
input_id:[0,0,0,1,0,0],
output:[[7,1],[10,1]]
},
{//branch to stick+leaves
input_id:[0,0,0,0,1,0],
output:[[7,1],[10,1]]
},
{//branch to stick+leaves
input_id:[0,0,0,0,0,1],
output:[[7,1],[10,1]]
},
{//hay to string
input_id:[2,0,0,0,0,0],
output:[[8,3]]
},
{//hay to string
input_id:[0,2,0,0,0,0],
output:[[8,3]]
},
{//hay to string
input_id:[0,0,2,0,0,0],
output:[[8,3]]
},
{//hay to string
input_id:[0,0,0,2,0,0],
output:[[8,3]]
},
{//hay to string
input_id:[0,0,0,0,2,0],
output:[[8,3]]
},
{//hay to string
input_id:[0,0,0,0,0,2],
output:[[8,3]]
},
{//2 sticks + 1 string to fence
input_id:[7,0,8,0,7,0],
output:[[6,3]]
},
{//2 sticks + 1 string to fence
input_id:[0,7,0,8,0,7],
output:[[6,3]]
},
{//2 string + 1 leaves to bowl
input_id:[8,0,10,0,8,0],
output:[[11,1]]
},
{//2 string + 1 leaves to bowl
input_id:[0,8,0,10,0,8],
output:[[11,1]]
},
{//bowl + brown mushroom to mushroom stew
input_id:[0,0,4,0,11,0],
output:[[11,1]]
},
{//bowl + brown mushroom to mushroom stew
input_id:[4,0,11,0,0,0],
output:[[12,1]]
},
{//4 grass to hay
input_id:[3,3,3,3,0,0],
output:[[2,1]]
},
{//4 grass to hay
input_id:[0,0,3,3,3,3],
output:[[2,1]]
},
{//4 string + 2 hay to carpet
input_id:[8,8,2,2,8,8],
output:[[13,1]]
},
{//bow
input_id:[7,0,8,7,7,0],
output:[[14,1]]
},
{//bow
input_id:[0,7,7,8,0,7],
output:[[14,1]]
},
{//bow+stick to bow and spindle
input_id:[14,7,0,0,0,0],
output:[[15,1]]
},
{//bow and spindle+hay+stick to amber and bow and spindle
input_id:[15,2,1,0,0,0],
output:[[15,1],[16,5]]
},
{//bow + amber to fire bow
input_id:[14,16,16,16,16,16],
output:[[17,5]]
},
{//2 sticks+iron to spear.
input_id:[33,0,7,0,7,0],
output:[[18,1]]
},
{//2 sticks+iron to spear.
input_id:[0,33,0,7,0,7],
output:[[18,1]]
},
{//Spear+Red Mushroom to Poisonous Spear.
input_id:[18,5,0,0,0,0],
output:[[20,1]]
},
{//6 sticks to door.
input_id:[7,7,7,7,7,7],
output:[[22,1]]
},
{//6 hay to hay bail.
input_id:[2,2,2,2,2,2],
output:[[24,1]]
},
{//hay bail to 6 hay.
input_id:[24,0,0,0,0,0],
output:[[2,6]]
},
{//hay bail to 6 hay.
input_id:[0,24,0,0,0,0],
output:[[2,6]]
},
{//hay bail to 6 hay.
input_id:[0,0,24,0,0,0],
output:[[2,6]]
},
{//hay bail to 6 hay.
input_id:[0,0,0,24,0,0],
output:[[2,6]]
},
{//hay bail to 6 hay.
input_id:[0,0,0,0,24,0],
output:[[2,6]]
},
{//hay bail to 6 hay.
input_id:[0,0,0,0,0,24],
output:[[2,6]]
},
{//Walnut fruit to walnut stone and peels
input_id:[25,0,0,0,0,0],
output:[[26,1],[27,1]]
},
{//Walnut fruit to walnut stone and peels
input_id:[0,25,0,0,0,0],
output:[[26,1],[27,1]]
},
{//Walnut fruit to walnut stone and peels
input_id:[0,0,25,0,0,0],
output:[[26,1],[27,1]]
},
{//Walnut fruit to walnut stone and peels
input_id:[0,0,0,25,0,0],
output:[[26,1],[27,1]]
},
{//Walnut fruit to walnut stone and peels
input_id:[0,0,0,0,25,0],
output:[[26,1],[27,1]]
},
{//Walnut fruit to walnut stone and peels
input_id:[0,0,0,0,0,25],
output:[[26,1],[27,1]]
},
{//Brown mushroom+red mushroom to Bone meal
input_id:[4,0,10,0,5,0],
output:[[28,3]]
},
{//Brown mushroom+red mushroom to Bone meal
input_id:[0,4,0,10,0,5],
output:[[28,3]]
},
{//Brown mushroom+red mushroom to Bone meal
input_id:[5,0,10,0,4,0],
output:[[28,3]]
},
{//Brown mushroom+red mushroom to Bone meal
input_id:[0,5,0,10,0,4],
output:[[28,3]]
},
{//stone+5 leaves to 3 Fibers+stone
input_id:[23,10,10,10,10,10],
output:[[23,1],[29,3]]
},
{//6 fibers to paper
input_id:[29,29,29,29,29,29],
output:[[32,1]]
},
{//3 Paper+String to book
input_id:[8,32,32,32,0,0],
output:[[30,1]]
},
{//4 MDF+2 Books to Bookshelf
input_id:[45,45,30,30,45,45],
output:[[31,1]],
},
{//1 meat+amber to cooked meat.
input_id:[34,16,0,0,0,0],
output:[[36,1]],
},
{//6 iron to iron wall
input_id:[33,33,33,33,33,33],
output:[[37,1]],
},
{//iron wall to 6 iron
input_id:[37,0,0,0,0,0],
output:[[33,6]],
},
{//iron wall to 6 iron
input_id:[0,37,0,0,0,0],
output:[[33,6]],
},
{//iron wall to 6 iron
input_id:[0,0,37,0,0,0],
output:[[33,6]],
},
{//iron wall to 6 iron
input_id:[0,0,0,37,0,0],
output:[[33,6]],
},
{//iron wall to 6 iron
input_id:[0,0,0,0,37,0],
output:[[33,6]],
},
{//iron wall to 6 iron
input_id:[0,0,0,0,0,37],
output:[[33,6]],
},
{//6 copper to copper wall
input_id:[35,35,35,35,35,35],
output:[[38,1]],
},
{//copper wall to 6 copper
input_id:[38,0,0,0,0,0],
output:[[35,6]],
},
{//copper wall to 6 copper
input_id:[0,38,0,0,0,0],
output:[[35,6]],
},
{//copper wall to 6 copper
input_id:[0,0,38,0,0,0],
output:[[35,6]],
},
{//copper wall to 6 copper
input_id:[0,0,0,38,0,0],
output:[[35,6]],
},
{//copper wall to 6 copper
input_id:[0,0,0,0,38,0],
output:[[35,6]],
},
{//copper wall to 6 copper
input_id:[0,0,0,0,0,38],
output:[[35,6]],
},
{//Amber+Bowl of Water+Brown Mushroom+Red Mushroom to Suspicious Stew
input_id:[4,5,39,21,16,0],
output:[[40,1]],
},
{//Amber+Bowl of Water+Brown Mushroom+Red Mushroom to Suspicious Stew
input_id:[5,4,39,21,16,0],
output:[[40,1]],
},
{//Amber+2 Sticks to Camp Fire
input_id:[16,7,7,0,0,0],
output:[[41,1]],
},
{//stone+stick to sawdust+stone
input_id:[23,7,0,0,0,0],
output:[[42,3],[23,1]]
},
{//stone+fence to sawdust+stone
input_id:[23,6,0,0,0,0],
output:[[42,3],[23,1]]
},
{//stone+bowl to sawdust+stone
input_id:[23,11,0,0,0,0],
output:[[42,3],[23,1]]
},
{//stone+door to sawdust+stone
input_id:[23,22,0,0,0,0],
output:[[42,3],[23,1]]
},
{//Bowl of Water+fibers to bowl of glue
input_id:[39,29,0,0,0,0],
output:[[43,1]]
},
{//bowl of glue+sawdust to mdf puddy+bowl
input_id:[43,42,0,0,0,0],
output:[[44,1],[11,1]]
},
{//Stone+iron to Grind Stone
input_id:[23,0,33,0,0,0],
output:[[46,1]]
},
{//MDF+walnut peels to Green Stained MDF
input_id:[45,27,0,0,0,0],
output:[[47,1]]
},
{//MDF+walnut peels to Red Stained MDF
input_id:[45,5,0,0,0,0],
output:[[48,1]]
},
{//MDF+Cyan thing to Cyan Stained MDF
input_id:[45,21,0,0,0,0],
output:[[49,1]]
},
{//2 copper to 5 wire
input_id:[35,35,0,0,0,0],
output:[[67,5]]
},
{//wire+stick to 1 switch
input_id:[67,7,0,0,0,0],
output:[[68,1]]
},
{//wire+stick to 1 switch
input_id:[7,67,0,0,0,0],
output:[[68,1]]
},
{//wire+cyan thing to 1 not gate
input_id:[67,21,0,0,0,0],
output:[[69,1]]
},
{//wire+cyan thing to 1 not gate
input_id:[21,67,0,0,0,0],
output:[[69,1]]
},
{//wire+copper wall to 1 gate
input_id:[67,38,0,0,0,0],
output:[[70,1]]
},
{//wire+copper wall to 1 gate
input_id:[38,67,0,0,0,0],
output:[[70,1]]
},
{//4wire to 1 wire jumper
input_id:[67,67,67,67,0,0],
output:[[71,1]]
},
{//4 iron+1 stick+1 paper to pump
input_id:[33,33,7,32,33,33],
output:[[72,1]]
},
{//4 iron+1 stick+1 paper to pump
input_id:[33,33,32,7,33,33],
output:[[72,1]]
},
{//2 iron+1 stick to fan
input_id:[33,0,7,0,33,0],
output:[[73,1]]
},
{//2 iron+1 stick to fan
input_id:[0,33,0,7,0,33],
output:[[73,1]]
},
{//thread to 32 string
input_id:[77,0,0,0,0,0],
output:[[8,32]]
},
{//thread to 32 string
input_id:[0,77,0,0,0,0],
output:[[8,32]]
},
{//thread to 32 string
input_id:[0,0,77,0,0,0],
output:[[8,32]]
},
{//thread to 32 string
input_id:[0,0,0,77,0,0],
output:[[8,32]]
},
{//thread to 32 string
input_id:[0,0,0,0,77,0],
output:[[8,32]]
},
{//thread to 32 string
input_id:[0,0,0,0,0,77],
output:[[8,32]]
},
{//Napkin+Hay to bedding 51
input_id:[75,2,0,0,0,0],
output:[[51,1]]
},
{//wire+glass+iron to Vacuum Tube
input_id:[67,78,33,0,0,0],
output:[[76,1]]
},
{//Vacuum Tube+Wire+Iron Wall+Cyan thing to Microwave Cannon
input_id:[76,67,37,21,0,0],
output:[[79,1]]
},
];

const struct=[
{weight:0.8,tries:10,sub:[0,1],id:0},//tree
{weight:0.6,tries:1,sub:[2,2],id:9},//walnut tree
{weight:0.8,tries:10,sub:[0,0],id:1},//grass
{weight:0.1,tries:3,sub:[0,0],id:10},//brown mushroom
{weight:0.1,tries:3,sub:[0,0],id:11},//red mushroom
{weight:0.01,tries:1,sub:[1,1],id:2},//115
{weight:0.2,tries:1,sub:[4,4],id:3},//abandoned shed
{weight:-1,tries:2,sub:[0,0],id:4},//hole
{weight:0.1,tries:2,sub:[3,3],id:5},//pond
{weight:0.01,tries:1,sub:[0,0],id:6},//raygun
{weight:0.1,tries:1,sub:[11,5],id:7},//facility
{weight:0.3,tries:1,sub:[2,2],id:8,entity:{offset_x:1,offset_y:1}},//Mouse Nest
];

const structures=[
//tree,0
[[14],[15]],
//grass, 1
[[13]],
//115, 2
[[40]],
//Human_abandoned_shed, 3
[[5,5,5,0,5],[13,28,28,28,5],[5,28,28,28,13],[5,28,28,28,5],[5,2,5,5,5],],
//hole, 4
[[-1,2,-1],[2,6,2],[-1,2,-1]],
//pond,5
[[0,29,29,0],[29,29,29,29],[29,29,29,29],[0,29,29,0],],
//raygun,6
[[38]],
//group 935, 7
[[5,5,5,2,5,5,5,5,5,5,5,5],[5,13,13,30,13,13,13,13,13,13,13,5],[5,13,13,13,13,13,13,13,14,13,13,5],[14,13,13,13,13,13,13,13,15,13,13,5],[5,13,13,13,13,13,13,13,13,13,13,5],[5,5,5,5,13,5,5,5,5,5,5,5],],
//mouse nest (ncp), 8
[[0,7,0],[7,44,7],[0,7,0],],
//walnut tree, 9
[[50,49,51],[47,46,48],[-1,45,-1]],
//brown mushroom, 10
[[16]],
//red mushroom, 11
[[17]],
];

const SLIP_CARPET_DECAY=0.25;
const SLIP_CARPET_TILE=100;

const struct_slip=[
{weight:0.3,tries:6,sub:[1,5],id:0,decay:true,decay_rate:0.75},//broken chair leg
{weight:0.3,tries:2,sub:[4,4],id:1,decay:true,decay_rate:0.75},//broken chair seat
{weight:0.3,tries:2,sub:[4,4],id:2,decay:true,decay_rate:0.75},
{weight:0.3,tries:1,sub:[5,3],id:3,decay:true,decay_rate:0.25},//broken chair head
//shreaded pillow, cushion, mattress, etc...
];
//pages[cur_page].map[player.y][player.x]
const structures_slip=[
[[-1,72],
[-1,72],
[-1,72],
[72,-1],
[72,-1],
[72,-1]],//chair leg

[[72,72,72,72,72],
[72,72,72,72,72],
[72,72,72,72,72],
[72,72,72,72,72]],//chair seat

[[-1,72,-1,72,-1],
[72,-1,72,-1,72],
[72,-1,72,-1,72],
[72,-1,72,-1,72],
[72,-1,72,-1,72],],//chair head

[[28,28,28,28,28,28],
[28,28,28,28,28,28],
[28,28,28,28,28,28],
[28,28,28,28,28,28]],//shreaded pillow, cushion, mattress, etc...
];

function new_save(){
	paused=true;
	player={brain:{gender:0.0, dysphoria:1, mode:1}, name:"Alex", x:1, y:1, health:20, strength:1, inv:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],0], creative:0, tainted:0, days:0, noclip:0,seed:(Math.floor(Math.random()*0xffffffff)),};
	player.name=prompt("Name?","Alex");
	player.name=(player.name=="")?"Alex":player.name;
	player.creative=(confirm("Enable Creative?"))?1:0;
	pages=[{
	//home_page
	map:[
	[1,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,0,10,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,11,10,1],//craft bench
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,0,10,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,13,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	entities:[
        {id:2, char:9, x:4, y:10, item: [1,10]},//branch
        {id:2, char:12, x:5, y:10, item: [2,10]},//hay
        {id:2, char:27, x:5, y:11, item: [12,10]},//stew
	],
	holes:[
		//holes
		{x:1, y:0, dest_page:[0,0,0], next_x: 19, next_y: 12},//gen new page
		//{x:2, y:0, dest_page:[null,null,1], next_x: 19, next_y: 12},//gen new slip page
		//dest_page:[page_x,page_y,page_layer]
	],
	metadata:{
	safety:1,//Do enemies spawn here at night?
	north_goto:false,//Can leave north edge
	south_goto:false,//Can leave south edge
	west_goto:false,//Can leave west edge
	east_goto:false,//Can leave north edge
	x:0,
	y:0,
	layer:-1,
	//underground:true,
	}
},
];
	cur_page=0;
	paused=false;
}