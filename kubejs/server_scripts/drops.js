LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("specialmobs:witch")
        .randomChance(0.1)
        .addLoot("endrem:witch_pupil")
})

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:chicken")
        .matchDamageSource((source) => source.anyType('lava'))
        .removeLoot('minecraft:cooked_chicken')
        .addLoot("kubejs:lava_chicken")
})

LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:iron_golem").replaceLoot("minecraft:iron_ingot", "kubejs:iron_scrap", true)
})

LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:iron_golem").replaceLoot("minecraft:poppy", "biomesoplenty:rose", true)
})

LootJS.modifiers((event) => {
    event
    .addEntityLootModifier("specialmobs:ghast")
    .matchDirectKiller((entity) => {
        entity.anyType("fireball")
    })
    .addLoot("addurdisc:disc_tears")
})
