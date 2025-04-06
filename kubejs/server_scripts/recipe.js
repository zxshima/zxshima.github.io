ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:map', type: 'minecraft:crafting_shaped' })
	event.remove({ output: 'backpacked:backpack' })

    event.remove({ output: 'upgrade_aquatic:mulberry_pie' })
    event.remove({id: 'geodes:tuning/diamond_tuning'})
    event.remove({id: 'geodes:tuning/echo_tuning'})

    event.remove({ output: 'alloyed:steel_fishing_rod' })
    event.remove({ output: 'trials:crafter' })
    event.remove({ output: 'alexsmobs:tarantula_hawk_elytra' })
    event.remove({ output: 'cataclysm:ignitium_elytra_chestplate' })


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
		'AAA', 
		'BCB',
		'AAA'
	], 	{
		A: 'minecraft:leather',
		B: 'minecraft:string',
		C: 'minecraft:iron_ingot'
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
})
