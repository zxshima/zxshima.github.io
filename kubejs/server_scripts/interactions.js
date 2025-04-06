BlockEvents.rightClicked(event => {
    // set which block turns into what
    global.shearingMap = {
        '#forge:shears': 'biomesoplenty:rose'
    }
    Object.keys(global.shearingMap).forEach((value) => {
        if (event.item.id === 'minecraft:shears') {
            if (event.block.id === value) {
                // damage shears
                if (!event.player.isCreative()) {
                event.player.damageHeldItem(event.hand, 1)
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
				event.server.runCommandSilent(`particle wax_off ${event.block.x} ${event.block.y+0.5} ${event.block.z} 0.5 0.25 0.5 0.01 15 force`)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
                event.block.set(global.shearingMap[event.block.id])
            }  
        }
    })
})
