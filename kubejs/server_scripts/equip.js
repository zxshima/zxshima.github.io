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
