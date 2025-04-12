LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("specialmobs:witch")
        .randomChance(0.1)
        .addLoot("endrem:witch_pupil");
});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:chicken")
        .matchDamageSource((source) => source.anyType('lava'))
        .removeLoot('minecraft:cooked_chicken')
        .addLoot("kubejs:lava_chicken");
});
