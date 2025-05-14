ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:map', type: 'minecraft:crafting_shaped' })
	event.remove({ output: 'backpacked:backpack' })
    event.remove({ output: 'upgrade_aquatic:mulberry_pie' })
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
    event.remove({id: 'upgrade_aquatic:trident'})
    event.remove({id: 'progressivebosses:trident'})
    event.remove({id: 'minecraft:lead'})
    event.remove({id: 'minecraft:lodestone'})
    event.remove({id: 'constructionwand:diamond_wand'})

    event.remove({id: 'geodes:tuning/diamond_tuning'})
    event.remove({id: 'geodes:tuning/echo_tuning'})
    event.remove({ output: 'alloyed:steel_fishing_rod' })
    event.remove({ output: 'trials:crafter' })
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
    event.remove({ output: 'ad_astra:etrionic_blast_furnace' })
    event.remove({ output: 'alloyed:steel_ingot' })
    event.remove({ output: 'alloyed:steel_sheet' })
    event.remove({ output: 'mowziesmobs:thatch_block' })
    event.remove({ output: 'upgrade_aquatic:beachgrass_thatch' })
    event.remove({ input: 'minecraft:emerald_ore' })
    event.remove({ input: 'minecraft:deepslate_emerald_ore' })
    event.remove({ input: 'minecraft:lapis_ore' })
    event.remove({ input: 'minecraft:deepslate_lapis_ore' })
    event.remove({ output: 'functionalstorage:framed_1' })
    event.remove({ output: 'functionalstorage:framed_2' })
    event.remove({ output: 'functionalstorage:framed_4' })
    event.remove({ output: 'functionalstorage:framed_simple_compacting_drawer' })
    event.remove({ output: 'functionalstorage:compacting_framed_drawer' })
    event.remove({ output: 'functionalstorage:framed_storage_controller' })
    event.remove({ output: 'functionalstorage:framed_controller_extension' })
    event.remove({ output: 'geodes:lapis_crystal_block' })
    event.remove({ output: 'geodes:diamond_crystal_block' })
    event.remove({ output: 'geodes:quartz_crystal_block' })
    event.remove({ output: 'geodes:emerald_crystal_block' })

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
		A: '#ad_astra:steel_ingots',
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
    event.shaped('ars_nouveau:novice_spell_book', [
		'EBC',
		'DAD',
		'FGH'
	], 	{
		A: 'minecraft:book',
		B: 'terramity:fairy_dust',
		C: 'minecraft:lapis_lazuli',
        D: 'create:brass_sheet',
        E: 'ars_nouveau:sourceberry_bush',
        F: 'caverns_and_chasms:silver_sword',
        G: 'caverns_and_chasms:silver_pickaxe',
        H: 'caverns_and_chasms:silver_axe'
	}
	);
    event.shaped('ars_nouveau:apprentice_spell_book', [
		'ECD',
		'GAG',
		'BFB'
	], 	{
		A: 'ars_nouveau:novice_spell_book',
		B: 'minecraft:quartz_block',
		C: 'cataclysm:abyss_eye',
        D: 'terramity:prismatic_jewel',
        E: 'terramity:profanum',
        F: 'ars_nouveau:source_gem',
        G: 'alloyed:bronze_sheet'
	}
	);
    event.shaped('ars_nouveau:archmage_spell_book', [
		'AHD',
		'FCF',
		'GBE'
	], 	{
		A: 'cataclysm:flame_eye',
		B: 'minecraft:nether_star',
		C: 'ars_nouveau:apprentice_spell_book',
		D: 'quark:dragon_scale',
		E: 'ars_nouveau:wilden_tribute',
		F: 'terramity:cosmilite_ingot',
		G: 'terramity:opaline_moonstone',
		H: 'terramity:gundalfs_hat_helmet'
	}
	);
	event.shapeless('kubejs:deer_cracker', ['2x minecraft:wheat', 'farmersdelight:rice']);
    event.replaceInput(
        {not: { output: 'ars_nouveau:starbuncle_charm' }, mod: 'ars_nouveau'},
        'minecraft:gold_ingot',
        'create:brass_ingot'
    );
    event.shaped('minecraft:lead', [
        'AA ',
        'AA ',
        '  A'
    ], 	{
        A: 'minecraft:string'
    }
    );
    event.shaped('minecraft:lodestone', [
        'AAA',
        'ABA',
        'AAA'
    ], 	{
        A: 'minecraft:chiseled_stone_bricks',
        B: 'minecraft:iron_ingot'
    }
    );
    event.shaped('minecraft:saddle', [
        ' A ',
        'ABA',
        '   '
    ], 	{
        A: 'minecraft:leather',
        B: 'minecraft:iron_ingot'
    }
    );
    event.shaped('constructionwand:diamond_wand', [
        '  B',
        ' A ',
        'A  '
    ], 	{
        A: 'minecraft:stick',
        B: 'quark:diamond_heart'
    }
    );
    event.replaceInput(
        [{id: 'ironchests:iron_chest'}, {id: 'ironchests:iron_chest_upgrade'}, {id: 'ironchests:iron_barrel'}],
        'minecraft:iron_ingot',
        'create:iron_sheet'
    );
    event.replaceInput(
        {mod: 'magnumtorch'},
        'minecraft:gold_ingot',
        'create:brass_ingot'
    );
    event.replaceInput(
        {not: { output: 'ironchests:lock' }, mod: 'ironchests'},
        'minecraft:gold_ingot',
        'create:golden_sheet'
    );
    event.blasting('3x minecraft:iron_nugget', 'kubejs:iron_scrap');
})
