// mobs

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:chicken")
        .matchDamageSource((source) => source.anyType('lava'))
        .removeLoot('minecraft:cooked_chicken')
        .addLoot("kubejs:lava_chicken");
    event.addEntityLootModifier("minecraft:iron_golem").replaceLoot("minecraft:iron_ingot", "kubejs:iron_scrap", true);
    event.addEntityLootModifier("minecraft:iron_golem").replaceLoot("minecraft:poppy", "biomesoplenty:rose", true)
})

LootJS.modifiers((event) => {
    event
    .addEntityLootModifier("specialmobs:witch")
    .randomChance(0.1)
    .addLoot("endrem:witch_pupil");
    event
    .addEntityLootModifier("specialmobs:zombifiedpiglin")
    .removeLoot('minecraft:gold_ingot')
    .removeLoot('minecraft:gold_nugget')
})

LootJS.modifiers((event) => {
    const cookedWhenAspect = LootEntry.of("kubejs:cooked_chevon").limitCount([1, 3]).applyLootingBonus([0, 1, 2, 3]).when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fire_aspect"))
    );
    const cookedWhenSoulAspect = LootEntry.of("kubejs:cooked_chevon").limitCount([1, 3]).applyLootingBonus([0, 1, 2, 3]).when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("minecraft:soul_fire_aspect"))
    );
    const cookedWhenLumiseneAspect = LootEntry.of("kubejs:cooked_chevon").limitCount([1, 3]).applyLootingBonus([0, 1, 2, 3]).when((c) =>
    c.matchMainHand(ItemFilter.hasEnchantment("supplementaries:lumisene_fire_aspect"))
    );
    const chevon = LootEntry.of('kubejs:chevon').limitCount([1, 3]).applyLootingBonus([0, 1, 2, 3])
    event
    .addEntityLootModifier("minecraft:goat")
    .matchDamageSource((source) => source.isFire)
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(cookedWhenAspect, cookedWhenSoulAspect, cookedWhenLumiseneAspect, chevon)
})

// ore

LootJS.modifiers((event) => {
    event
    .addBlockLootModifier("caverns_and_chasms:deepslate_spinel_ore")
    .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
    .randomChance(0.02)
    .addLoot("kubejs:geode_1");
    event
    .addBlockLootModifier("terramity:deepslate_iridescent_ore")
    .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
    .randomChance(0.1)
    .addLoot("kubejs:geode_1");
})

// treasure

LootJS.modifiers((event) => {
    function lootgone(item) {
        event.addLootTypeModifier(LootType.CHEST).removeLoot(item)
    }
    lootgone('minecraft:saddle')
    lootgone('terramity:cardboard')
})

LootJS.modifiers((event) => {
    function lootwhat(itemfrom,itemto) {
        event.addLootTypeModifier(LootType.CHEST,LootType.ENTITY).replaceLoot(itemfrom,itemto,true)
    }
    lootwhat('caverns_and_chasms:silver_ingot', 'oreganized:silver_ingot')
    lootwhat('caverns_and_chasms:silver_nugget', 'oreganized:silver_nugget')
})
