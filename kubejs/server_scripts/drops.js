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
    event
    .addBlockLootModifier("caverns_and_chasms:deepslate_spinel_ore")
    .randomChance(0.02)
    .addLoot("kubejs:geode_1");
})

LootJS.modifiers((event) => {
    event
    .addBlockLootModifier("terramity:deepslate_iridescent_ore")
    .randomChance(0.1)
    .addLoot("kubejs:geode_1");
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


const blacklistedMobs = ['specialmobs:witherskeleton','specialmobs:giantwitherskeleton','specialmobs:brutewitherskeleton','specialmobs:ninjawitherskeleton'];
const blacklistedItems = ['minecraft:stone_sword'];
blacklistedMobs.forEach(mob => {
    EntityEvents.spawned(mob, e => {
        if(!blacklistedItems.includes(e.entity.mainHandItem.id)) return;
        e.entity.setMainHandItem('kubejs:wither_sword');
    })
})

const blacklistedMobs2 = ['specialmobs:witherskeleton','specialmobs:giantwitherskeleton','specialmobs:brutewitherskeleton','specialmobs:ninjawitherskeleton'];
const blacklistedItems2 = ['minecraft:stone_axe'];
blacklistedMobs2.forEach(mob => {
    EntityEvents.spawned(mob, e => {
        if(!blacklistedItems2.includes(e.entity.mainHandItem.id)) return;
        e.entity.setMainHandItem('kubejs:wither_axe');
    })
})

EntityEvents.hurt(event => {
    if (event.server
        && event.source.actual
        && event.source.actual.player
        && event.source.actual.mainHandItem.hasTag('forge:inflicts_wither')
        )
        {
        event.entity.potionEffects.add("minecraft:wither", 100, 0, false, true)
        }
})
