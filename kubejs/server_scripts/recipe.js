ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:map', type: 'minecraft:crafting_shaped' })
	event.remove({ output: 'backpacked:backpack' })

    event.remove({ output: 'upgrade_aquatic:mulberry_pie' })
    event.remove({id: 'geodes:tuning/diamond_tuning'})
    event.remove({id: 'geodes:tuning/echo_tuning'})
    event.remove({id: 'upgrade_aquatic:trident'})
    event.remove({id: 'progressivebosses:trident'})


    event.remove({ output: 'alloyed:steel_fishing_rod' })
    event.remove({ output: 'trials:crafter' })
    event.remove({ output: 'alexsmobs:tarantula_hawk_elytra' })
    event.remove({ output: 'cataclysm:ignitium_elytra_chestplate' })

    event.remove({ output: 'caverns_and_chasms:cobblestone_bricks' })
    event.remove({ output: 'caverns_and_chasms:cobblestone_brick_slab' })
    event.remove({ output: 'caverns_and_chasms:cobblestone_brick_wall' })
    event.remove({ output: 'caverns_and_chasms:cobblestone_brick_stairs' })
    event.remove({ output: 'caverns_and_chasms:mossy_cobblestone_bricks' })
    event.remove({ output: 'caverns_and_chasms:mossy_cobblestone_brick_slab' })
    event.remove({ output: 'caverns_and_chasms:mossy_cobblestone_brick_wall' })
    event.remove({ output: 'caverns_and_chasms:mossy_cobblestone_brick_stairs' })
    event.remove({ output: 'twigs:cobblestone_bricks' })
    event.remove({ output: 'twigs:cobblestone_brick_slab' })
    event.remove({ output: 'twigs:cobblestone_brick_wall' })
    event.remove({ output: 'twigs:cobblestone_brick_stairs' })
    event.remove({ output: 'twigs:cracked_cobblestone_bricks' })
    event.remove({ output: 'caverns_and_chasms:mossy_cobblestone_brick_stairs' })
    event.remove({ output: 'twigs:mossy_cobblestone_bricks' })
    event.remove({ output: 'twigs:mossy_cobblestone_brick_slab' })
    event.remove({ output: 'twigs:mossy_cobblestone_brick_wall' })
    event.remove({ output: 'twigs:mossy_cobblestone_brick_stairs' })
    event.remove({ output: 'terramity:stone_tiles' })
    event.remove({ output: 'terramity:stone_tile_stairs' })
    event.remove({ output: 'terramity:stone_tile_slab' })
    event.remove({ output: 'cataclysm:stone_tiles' })
    event.remove({ output: 'cataclysm:stone_tile_slab' })
    event.remove({ output: 'cataclysm:stone_tile_stairs' })
    event.remove({ output: 'cataclysm:stone_tile_wall' })
    event.remove({ output: 'twigs:rocky_dirt' })
    event.remove({ output: 'decorative_blocks:rocky_dirt' })
    event.remove({ output: 'infinitybuttons:cherry_bookshelf_secret_button' })
    event.remove({ output: 'oreganized:bush_hammer' })
    event.remove({ input: 'minecraft:emerald_ore' })


    event.shaped('minecraft:map', [
        'AAA',
        'AAA',
        'AAA'
    ], 	{ A: 'minecraft:paper' }
    );
    event.shaped('upgrade_aquatic:mulberry_pie', [
        '   ',
        'AAA',
        'SDS'
    ], 	{ A: 'upgrade_aquatic:mulberry',
          S: 'minecraft:sugar',
          D: 'farmersdelight:pie_crust'
    }
    );
	event.shaped('backpacked:backpack', [
		'ACA', 
		'BDB',
		'AAA'
	], 	{
		A: 'minecraft:leather',
		B: 'minecraft:tripwire_hook',
		C: 'minecraft:string',
		D: 'minecraft:iron_ingot',
	}
	);
    event.shaped('archexpsquared:blank_bow_a', [
		'ABC', 
		'B C',
		'ABC'
	], 	{
		A: 'alloyed:steel_ingot',
		B: 'minecraft:stick',
		C: 'minecraft:string'
	}
	);
    event.shaped('minecraft:trident', [
		' AA', 
		' BA',
		'B  '
	], 	{
		A: 'progressivebosses:elder_guardian_spike',
		B: 'upgrade_aquatic:prismarine_rod'
	}
	);
	event.shapeless('kubejs:deer_cracker', ['2x minecraft:wheat', 'farmersdelight:rice']);
})
