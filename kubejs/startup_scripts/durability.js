ItemEvents.modification(event => {
    function durable(modifiedItem, modifiedAmount) {
        event.modify(modifiedItem, item => {item.maxDamage = modifiedAmount})
    }
    durable('minecraft:leather_helmet', 110)
    durable('minecraft:leather_chestplate', 160)
    durable('minecraft:leather_leggings', 150)
    durable('minecraft:leather_boots', 130)
    durable('minecraft:golden_helmet', 110)
    durable('minecraft:golden_chestplate', 160)
    durable('minecraft:golden_leggings', 150)
    durable('minecraft:golden_boots', 130)
    event.modify([
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_shovel',
        'minecraft:wooden_hoe',
        'minecraft:wooden_sword'
    ], item => {item.maxDamage = 112})
    event.modify([
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_shovel',
        'minecraft:stone_hoe',
        'minecraft:stone_sword',
        'caverns_and_chasms:silver_pickaxe',
        'caverns_and_chasms:silver_axe',
        'caverns_and_chasms:silver_shovel',
        'caverns_and_chasms:silver_hoe',
        'caverns_and_chasms:silver_sword'
    ], item => {item.maxDamage = 223})
    event.modify([
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_shovel',
        'minecraft:iron_hoe',
        'minecraft:iron_sword'
    ], item => {item.maxDamage = 446})
    event.modify([
        'alloyed:steel_pickaxe',
        'alloyed:steel_axe',
        'alloyed:steel_shovel',
        'alloyed:steel_hoe',
        'alloyed:steel_sword'
    ], item => {item.maxDamage = 1115})
})
