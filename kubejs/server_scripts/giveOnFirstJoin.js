PlayerEvents.loggedIn((event) => {
    let player = event.player

    if(player.stages.has('starting_items')) { return }

    player.give(Item.of('akashictome:tome', 1))
    player.give(Item.of('map_atlases:atlas', 1))

    player.stages.add('starting_items')
})
