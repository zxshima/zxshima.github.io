ItemEvents.entityInteracted('species:youth_potion', event => {
    if (event.target.type == 'vanillabackport:happy_ghast') {
        event.player.stages.add("ghast_young")
    }
})
