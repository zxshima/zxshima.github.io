LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("specialmobs:witch")
        .randomChance(0.1)
        .addLoot("endrem:witch_pupil");
});
