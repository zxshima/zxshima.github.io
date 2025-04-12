PlayerEvents.loggedIn((event) => {
    let player = event.player

    if(player.stages.has('starting_items')) { return }

    player.give(
      Item.of('akashictome:tome')
        .enchant('ars_elemental:soulbound', 1)
    )

    player.give(
      Item.of('map_atlases:atlas')
        .enchant('ars_elemental:soulbound', 1)
    )

    player.stages.add('starting_items')
})
