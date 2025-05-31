ItemEvents.modification(event => {
  event.modify('neapolitan:strawberries', item => {
    item.foodProperties = food => {
        food.hunger(2)
    }
  })
  event.modify('alexsdelight:cooked_bison', item => {
    item.foodProperties = food => {
        food.hunger(8)
        food.saturation(0.8)
    }
  })
  event.modify('upgrade_aquatic:mulberry_pie', item => {
    item.foodProperties = null
  })
  event.modify('create:belt_connector', item => {
    item.foodProperties = food => {
        food.hunger(6)
        food.saturation(0.33)
    }
  })
  event.modify('neapolitan:vanilla_pudding', item => {
    item.foodProperties = food => {
      food.saturation(0.5)
    }
  })
  event.modify('minecraft:cooked_porkchop', item => {
    item.foodProperties = food => {
      food.saturation(0.6)
    }
  })
  event.modify('minecraft:cooked_beef', item => {
    item.foodProperties = food => {
      food.saturation(0.6)
    }
  })
  event.modify('minecraft:golden_carrot', item => {
    item.foodProperties = food => {
      food.saturation(0.8)
    }
  })
})

StartupEvents.registry('item', event => {
	event.create('deer_cracker').food(food => {
		food
    		.hunger(6)
    		.saturation(0.33)
        	})
})

StartupEvents.registry('item', event => {
	event.create('lava_chicken').food(food => {
		food
    		.hunger(6)
    		.saturation(0.66)
            .effect('alexsmobs:earthquake', 200, 0, 1.0)
            .effect('minecraft:speed', 200, 1, 1.0)
        	})
})

StartupEvents.registry('item', event => {
  event.create('chevon').food(food => {
    food
    .hunger(2)
    .saturation(0.5)
  })
})

StartupEvents.registry('item', event => {
  event.create('cooked_chevon').food(food => {
    food
    .hunger(6)
    .saturation(0.8)
  })
})
