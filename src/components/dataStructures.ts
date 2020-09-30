import defaultEquip from "../image/human.png";

export interface Item {
    title : string,
    description : string,
    effect : string,
    image : string,
    tooltip : string,
    clickAction : () => void,
    price : number,
    type : number,
}

export enum ITEM_TYPE {
    Spell,
    Equipable
}

export interface RPG {
    inventory : [Item[], (arg0 : Item[]) => void],
    equippedItem : [Partial<Item>, (arg0 : Item) => void],
    itemIndex : [number, (arg0 : number) => void],
    actionLog : string[]
}


export const noEquipSlot: Item = {
    title: '',
    type: 1,
    description: '',
    effect: 'No effect equipped',
    image: defaultEquip,
    tooltip: '',
    price: 0,
    clickAction: () => null
};