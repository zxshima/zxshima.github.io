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

LootJS.modifiers((event) => {
    event
    .addEntityLootModifier("specialmobs:zombifiedpiglin")
    .removeLoot('minecraft:gold_ingot')
    .removeLoot('minecraft:gold_nugget')
})



LootJS.modifiers((event) => {
    const cookedWhenAspect = LootEntry.of("kubejs:cooked_chevon").limitCount([1, 3]).applyLootingBonus([0, 1, 2, 3]).when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fire_aspect"))
    );
    const chevon = LootEntry.of('kubejs:chevon').limitCount([1, 3]).applyLootingBonus([0, 1, 2, 3])
    event
    .addEntityLootModifier("minecraft:goat")
    .matchDamageSource((source) => source.isFire)
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(cookedWhenAspect, chevon)
})
