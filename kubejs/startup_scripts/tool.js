ItemEvents.modification(event => {
  event.modify('minecraft:wooden_pickaxe', item => {
    item.tier = tier => {
        tier.speed = 12
        tier.attackDamageBonus = 10
        tier.level = 2
    }
  })
})
