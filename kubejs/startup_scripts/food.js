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
})

StartupEvents.registry('item', event => {
	event.create('deer_cracker').food(food => {
		food
    		.hunger(6)
    		.saturation(0.33)
        	})
})
