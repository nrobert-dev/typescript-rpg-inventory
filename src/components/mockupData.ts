import {Item} from "./dataStructures";
import url from "../image/fireball-red-2.png";
import url2 from "../image/fireball-sky-2.png";
import url3 from "../image/heal-royal-1.png";
import url11 from "../image/1.png";
import url22 from "../image/2.png";
import url33 from "../image/3.png";
import url44 from "../image/4.png";
import url55 from "../image/5.png";

import {ITEM_TYPE} from "./dataStructures";

export const inventoryItems : Item[] = [
  {image : url, type : 0, title : "Fireball Scroll", effect : 'Hit 10 Fire Damage', description : "\"Cast boom!Flames\"", clickAction : () => alert(1), tooltip : "item", price : 90},
  {image : url2,type : 0, title : "Icy Ball Scroll", effect : 'Hit 8.5 Cold Damage',description : '"Freeze everything including yourself"', clickAction : () => alert(1), tooltip : "item", price : 100},
  {image : url3, type : 0,title : "Heal Life Scroll", effect : 'Heal 10 Nature Points', description : '"Cast and feel better"', clickAction : () => alert(1), tooltip : "item", price : 100},
  {image : url11,type : 1, title : "Helm of Storm", effect : '+10 Armor +2 Lightning', description : "\"Provides thunder abilities! Zap zap!\"", clickAction : () => alert(1), tooltip : "item", price : 2500},
  {image : url22,type : 1, title : "Orb of Dizzy", effect : '+11 Armor -1.5 Balance', description : '"The world is suddenly moving"', clickAction : () => alert(1), tooltip : "item", price : 10},
  {image : url33,type : 1, title : "Robe of Domination", effect : '+44 Mind Control', description : '"Exercise control"', clickAction : () => alert(1), tooltip : "item", price : 10000},
  {image : url44,type : 1, title : "Fire Shield", effect : '+88 Armor -2 Movement', description : '"Hot to the touch"', clickAction : () => alert(1), tooltip : "item", price : 455},
  {image : url55,type : 0, title : "Shadow Dagger", effect : 'Hit 102.5 Shadow Damage', description : '"Stab them with darkness"', clickAction : () => alert(1), tooltip : "item", price : 4539}
];