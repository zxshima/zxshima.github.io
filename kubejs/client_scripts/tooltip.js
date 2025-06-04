ItemEvents.tooltip(event => {
  event.add(['kubejs:lava_chicken'], '§6Spicy!')
  event.add(['upgrade_aquatic:mulberry_pie'], '§dMessy!')
  event.add(['conjurer_illager:throwable_ball'], '§8§oCan be thrown')
  event.add(['conjurer_illager:throwing_card'], '§8§oCan be thrown')
  event.add(['supplementaries:blue_bomb'], '§8§oCan be thrown')
  event.add(['supplementaries:bomb'], '§8§oCan be thrown')
  event.add(['terramity:throwing_bomb'], '§8§oCan be thrown')
  event.add(['terramity:throwing_bomb'], '§7§oBreaks terrain!')
  })

ItemEvents.tooltip(event => {
  event.addAdvanced(['kubejs:common_smithing_template'], (item, advanced, text) => {
    text.add(1, Text.gray('Common Upgrade'))
    text.add(2, Text.gray('Applies to:'))
    text.add(3, Text.blue(' Leather Equipment'))
    text.add(4, Text.gray('Ingredients:'))
    text.add(5, Text.blue(' Iron Ingot'))
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced(['kubejs:gemstone_smithing_template'], (item, advanced, text) => {
    text.add(1, Text.gray('Gemstone Upgrade'))
    text.add(2, Text.gray('Applies to:'))
    text.add(3, Text.blue(' Iron Equipment'))
    text.add(4, Text.gray('Ingredients:'))
    text.add(5, Text.blue(' Gemstones'))
  })
})
