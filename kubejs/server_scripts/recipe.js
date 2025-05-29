ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:map', type: 'minecraft:crafting_shaped' })
	event.remove({ output: 'backpacked:backpack' })
    event.remove({ output: 'upgrade_aquatic:mulberry_pie' })
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    event.remove({id: 'ars_nouveau:archmage_spell_book_upgrade'})
    event.remove({id: 'upgrade_aquatic:trident'})
    event.remove({id: 'progressivebosses:trident'})
    event.remove({id: 'etcetera:hammer'})
    event.remove({id: 'minecraft:lead'})
    event.remove({id: 'minecraft:leather_boots'})
    event.remove({id: 'minecraft:leather_chestplate'})
    event.remove({id: 'minecraft:leather_helmet'})
    event.remove({id: 'minecraft:leather_leggings'})
    event.remove({id: 'minecraft:iron_boots'})
    event.remove({id: 'minecraft:iron_chestplate'})
    event.remove({id: 'minecraft:iron_helmet'})
    event.remove({id: 'minecraft:iron_leggings'})
    event.remove({id: 'minecraft:diamond_boots'})
    event.remove({id: 'minecraft:diamond_chestplate'})
    event.remove({id: 'minecraft:diamond_helmet'})
    event.remove({id: 'minecraft:diamond_leggings'})
    event.remove({id: 'terramity:ruby_boots'})
    event.remove({id: 'terramity:ruby_chestplate'})
    event.remove({id: 'terramity:ruby_helmet'})
    event.remove({id: 'terramity:ruby_leggings'})
    event.remove({id: 'terramity:sapphire_boots'})
    event.remove({id: 'terramity:sapphire_chestplate'})
    event.remove({id: 'terramity:sapphire_helmet'})
    event.remove({id: 'terramity:sapphire_leggings'})
    event.remove({id: 'terramity:topaz_boots'})
    event.remove({id: 'terramity:topaz_chestplate'})
    event.remove({id: 'terramity:topaz_helmet'})
    event.remove({id: 'terramity:topaz_leggings'})
    event.remove({id: 'terramity:onyx_boots'})
    event.remove({id: 'terramity:onyx_chestplate'})
    event.remove({id: 'terramity:onyx_helmet'})
    event.remove({id: 'terramity:onyx_leggings'})
    event.remove({id: 'minecraft:lodestone'})
    event.remove({id: 'constructionwand:diamond_wand'})
    event.remove({id: 'ecologics:mushroom_stew_from_coconut_husk'})
    event.remove({id: 'ecologics:beetroot_soup_from_coconut_husk'})
    event.remove({id: 'ecologics:rabbit_stew_from_brown_mushroom_and_coconut_husk'})
    event.remove({id: 'ecologics:rabbit_stew_from_red_mushroom_and_coconut_husk'})
    event.remove({id: 'trials:polished_tuff_wall'})
    event.remove({id: 'trials:polished_tuff_wall_1'})
    event.remove({id: 'trials:chiseled_tuff'})
    event.remove({id: 'trials:chiseled_tuff_bricks'})
    event.remove({id: 'trials:chiseled_tuff_bricks_1'})
    event.remove({id: 'trials:chiseled_tuff_bricks_2'})
    event.remove({id: 'quark:building/crafting/stonevariants/chiseled_tuff_bricks'})
    event.remove({id: 'minecraft:iron_nugget_from_smelting'})
    event.remove({id: 'minecraft:iron_nugget_from_blasting'})
    event.remove({id: 'minecraft:gold_nugget_from_smelting'})
    event.remove({id: 'minecraft:gold_nugget_from_blasting'})
    event.remove({id: 'terramity:igneo_sword'})
    event.remove({id: 'terramity:igneo_pick'})
    event.remove({id: 'terramity:igneo_axe'})
    event.remove({id: 'terramity:igneo_shovel'})
    event.remove({id: 'terramity:igneo_hoe'})
    event.remove({id: 'geodes:tuning/diamond_tuning'})
    event.remove({id: 'geodes:tuning/echo_tuning'})
    event.remove({ input: 'minecraft:emerald_ore' })
    event.remove({ input: 'minecraft:deepslate_emerald_ore' })
    event.remove({ input: 'minecraft:lapis_ore' })
    event.remove({ input: 'minecraft:deepslate_lapis_ore' })
    event.remove({ input: 'minecraft:nether_quartz_ore' })
    event.remove({ output: 'geodes:lapis_crystal_block' })
    event.remove({ output: 'geodes:diamond_crystal_block' })
    event.remove({ output: 'geodes:quartz_crystal_block' })
    event.remove({ output: 'geodes:emerald_crystal_block' })
    event.remove({ output: 'oreganized:glance' })
    event.remove({ output: 'terramity:stone_tiles' })
    event.remove({ output: 'terramity:stone_tile_stairs' })
    event.remove({ output: 'terramity:stone_tile_slab' })
    event.remove({ output: 'trials:polished_tuff' })
    event.remove({ output: 'trials:tuff_bricks' })
    event.remove({ output: 'etcetera:chisel' })
    event.remove({ output: 'etcetera:wrench' })

    event.replaceInput(
        { input: '#quark:stone_tool_materials', output: '#forge:copper_tools' },
        '#quark:stone_tool_materials',
        'minecraft:copper_ingot'
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
    event.replaceInput(
        {not: { output: 'ars_nouveau:starbuncle_charm' }, mod: 'ars_nouveau'},
        'minecraft:gold_ingot',
        'create:brass_ingot'
    );
    event.shaped('trials:polished_tuff_wall', [
        'AAA',
        'AAA',
        '   '
    ], 	{
        A: 'quark:polished_tuff'
    }
    );
    event.shaped('quark:chiseled_tuff_bricks', [
        ' A ',
        ' A ',
        '   '
    ], 	{
        A: 'quark:polished_tuff_slab'
    }
    );
    event.shaped('trials:chiseled_tuff_bricks', [
        ' A ',
        ' A ',
        '   '
    ], 	{
        A: 'quark:tuff_bricks_slab'
    }
    );
    event.shaped('trials:chiseled_tuff', [
        ' A ',
        ' A ',
        '   '
    ], 	{
        A: 'quark:tuff_slab'
    }
    );
    event.stonecutting('trials:polished_tuff_wall', 'quark:polished_tuff');
    event.stonecutting('trials:chiseled_tuff_bricks', 'quark:polished_tuff');
    event.replaceInput(
        [{id: 'ironchests:iron_chest'}, {id: 'ironchests:iron_chest_upgrade'}, {id: 'ironchests:iron_barrel'}],
        'minecraft:iron_ingot',
        'create:iron_sheet'
    );
    event.replaceInput(
        {not: { output: 'ironchests:lock' }, mod: 'ironchests'},
        'minecraft:gold_ingot',
        'create:golden_sheet'
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
        {mod: 'magnumtorch'},
        'minecraft:gold_ingot',
        'create:brass_ingot'
    );
    event.replaceInput(
        { input: 'neapolitan:chocolate_bar' },
        'neapolitan:chocolate_bar',
        'create:bar_of_chocolate'
    );
    event.replaceInput(
        { input: 'caverns_and_chasms:cobblestone_bricks' },
        'caverns_and_chasms:cobblestone_bricks',
        'quark:cobblestone_bricks'
    );
    event.replaceInput(
        { input: 'caverns_and_chasms:mossy_cobblestone_bricks' },
        'caverns_and_chasms:mossy_cobblestone_bricks',
        'quark:mossy_cobblestone_bricks'
    );
    event.blasting('3x minecraft:iron_nugget', 'kubejs:iron_scrap');
    event.blasting('3x minecraft:gold_nugget', 'kubejs:gold_scrap');
    event.blasting('3x oreganized:lead_nugget', 'kubejs:lead_scrap');
    event.smoking('kubejs:cooked_chevon', 'kubejs:chevon').xp(0.35);
    event.campfireCooking('kubejs:cooked_chevon', 'kubejs:chevon', 0.35, 600);
    event.smelting('kubejs:cooked_chevon', 'kubejs:chevon').xp(0.35);
	event.shapeless('kubejs:deer_cracker', ['2x minecraft:wheat', 'farmersdelight:rice']);
    event.smithing(
        'minecraft:iron_helmet',
        'kubejs:common_smithing_template',
        'minecraft:leather_helmet',
        'minecraft:iron_ingot'
    );
    event.smithing(
        'minecraft:iron_chestplate',
        'kubejs:common_smithing_template',
        'minecraft:leather_chestplate',
        'minecraft:iron_ingot'
    );
    event.smithing(
        'minecraft:iron_leggings',
        'kubejs:common_smithing_template',
        'minecraft:leather_leggings',
        'minecraft:iron_ingot'
    );
    event.smithing(
        'minecraft:iron_boots',
        'kubejs:common_smithing_template',
        'minecraft:leather_boots',
        'minecraft:iron_ingot'
    );
    event.smithing(
        'minecraft:diamond_helmet',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_helmet',
        'minecraft:diamond'
    );
    event.smithing(
        'terramity:ruby_armor_helmet',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_helmet',
        'terramity:ruby'
    );
    event.smithing(
        'terramity:sapphire_armor_helmet',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_helmet',
        'terramity:sapphire'
    );
    event.smithing(
        'terramity:topaz_armor_helmet',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_helmet',
        'terramity:topaz'
    );
    event.smithing(
        'terramity:onyx_armor_helmet',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_helmet',
        'terramity:onyx'
    );
    event.smithing(
        'minecraft:diamond_chestplate',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_chestplate',
        'minecraft:diamond'
    );
    event.smithing(
        'terramity:ruby_armor_chestplate',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_chestplate',
        'terramity:ruby'
    );
    event.smithing(
        'terramity:sapphire_armor_chestplate',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_chestplate',
        'terramity:sapphire'
    );
    event.smithing(
        'terramity:topaz_armor_chestplate',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_chestplate',
        'terramity:topaz'
    );
    event.smithing(
        'terramity:onyx_armor_chestplate',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_chestplate',
        'terramity:onyx'
    );
    event.smithing(
        'minecraft:diamond_leggings',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_leggings',
        'minecraft:diamond'
    );
    event.smithing(
        'terramity:ruby_armor_leggings',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_leggings',
        'terramity:ruby'
    );
    event.smithing(
        'terramity:sapphire_armor_leggings',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_leggings',
        'terramity:sapphire'
    );
    event.smithing(
        'terramity:topaz_armor_leggings',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_leggings',
        'terramity:topaz'
    );
    event.smithing(
        'terramity:onyx_armor_leggings',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_leggings',
        'terramity:onyx'
    );
    event.smithing(
        'minecraft:diamond_boots',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_boots',
        'minecraft:diamond'
    );
    event.smithing(
        'terramity:ruby_armor_boots',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_boots',
        'terramity:ruby'
    );
    event.smithing(
        'terramity:sapphire_armor_boots',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_boots',
        'terramity:sapphire'
    );
    event.smithing(
        'terramity:topaz_armor_boots',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_boots',
        'terramity:topaz'
    );
    event.smithing(
        'terramity:onyx_armor_boots',
        'kubejs:gemstone_smithing_template',
        'minecraft:iron_boots',
        'terramity:onyx'
    );
    event.replaceInput(
        [{id: 'minecraft:netherite_helmet_smithing'}, {id: 'caverns_and_chasms:necromium_helmet_smithing'}, {id: 'oreganized:electrum_helmet'}],
        'minecraft:diamond_helmet',
        '#forge:gemstone_helmets'
    );
    event.replaceInput(
        [{id: 'minecraft:netherite_chestplate_smithing'}, {id: 'caverns_and_chasms:necromium_chestplate_smithing'}, {id: 'oreganized:electrum_chestplate'}],
        'minecraft:diamond_chestplate',
        '#forge:gemstone_chestplates'
    );
    event.replaceInput(
        [{id: 'minecraft:netherite_leggings_smithing'}, {id: 'caverns_and_chasms:necromium_leggings_smithing'}, {id: 'oreganized:electrum_leggings'}],
        'minecraft:diamond_leggings',
        '#forge:gemstone_leggings'
    );
    event.replaceInput(
        [{id: 'minecraft:netherite_boots_smithing'}, {id: 'caverns_and_chasms:necromium_boots_smithing'}, {id: 'oreganized:electrum_boots'}],
        'minecraft:diamond_boots',
        '#forge:gemstone_boots'
    );
    event.shaped('kubejs:common_smithing_template', [
        ' A ',
        'ABA',
        ' A '
    ], 	{
        A: 'minecraft:iron_ingot',
        B: 'minecraft:stone'
    }
    );
    event.shaped('2x kubejs:common_smithing_template', [
        ' A ',
        'ABA',
        ' A '
    ], 	{
        A: 'minecraft:iron_ingot',
        B: 'kubejs:common_smithing_template'
    }
    );
    event.shaped('kubejs:gemstone_smithing_template', [
        ' B ',
        'BAB',
        'B B'
    ], 	{
        A: 'kubejs:common_smithing_template',
        B: '#forge:gemstones'
    }
    );
    event.shaped('2x kubejs:gemstone_smithing_template', [
        ' B ',
        'BAB',
        'B B'
    ], 	{
        A: 'kubejs:gemstone_smithing_template',
        B: '#forge:gemstones'
    }
    );
    event.shaped('minecraft:leather_boots', [
        '   ',
        'A A',
        'A A'
    ], 	{
        A: 'dolt_mod_how:leather_scraps'
    }
    );
    event.shaped('minecraft:leather_chestplate', [
        'A A',
        'ABA',
        'AAA'
    ], 	{
        A: 'dolt_mod_how:leather_scraps',
        B: 'minecraft:string'
    }
    );
    event.shaped('minecraft:leather_helmet', [
        'ABA',
        'A A',
        '   '
    ], 	{
        A: 'dolt_mod_how:leather_scraps',
        B: 'minecraft:string'
    }
    );
    event.shaped('minecraft:leather_leggings', [
        'AAA',
        'B B',
        'A A'
    ], 	{
        A: 'dolt_mod_how:leather_scraps',
        B: 'minecraft:string'
    }
    );
    event.shaped('etcetera:hammer', [
        'AAA',
        'ABA',
        ' B '
    ], 	{
        A: 'minecraft:iron_ingot',
        B: 'minecraft:stick'
    }
    );
    event.shaped('minecraft:chain', [
        ' A ',
        ' A ',
        ' A '
    ], 	{
        A: 'oreganized:lead_nugget'
    }
    );
    event.shaped('minecraft:chainmail_helmet', [
        'AAA',
        'A A',
        '   '
    ], 	{
        A: 'minecraft:chain'
    }
    );
    event.shaped('minecraft:chainmail_chestplate', [
        'A A',
        'AAA',
        'AAA'
    ], 	{
        A: 'minecraft:chain'
    }
    );
    event.shaped('minecraft:chainmail_leggings', [
        'AAA',
        'A A',
        'A A'
    ], 	{
        A: 'minecraft:chain'
    }
    );
    event.shaped('minecraft:chainmail_boots', [
        '   ',
        'A A',
        'A A'
    ], 	{
        A: 'minecraft:chain'
    }
    );
    event.shapeless('create:iron_sheet', ['2x minecraft:iron_ingot', Item.of('etcetera:hammer').ignoreNBT()]).damageIngredient(Item.of('etcetera:hammer').ignoreNBT());
})

ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        'minecraft:leather',
        '#forge:tools/knives',
        '2x dolt_mod_how:leather_scraps'
    );
    event.recipes.farmersdelight.cutting(
        'kubejs:geode',
        'etcetera:hammer',
        [
        Item.of('twigs:pebble')
        .withChance(0.5),
        Item.of('minecraft:diamond')
        .withChance(0.01),
        Item.of('etcetera:raw_bismuth')
        .withChance(0.05)
        ],
        'etcetera:item.hammer.use'
    );
})
