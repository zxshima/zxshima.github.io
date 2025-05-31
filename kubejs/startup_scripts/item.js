StartupEvents.registry('item', event => {
    event.create('iron_scrap')
})

StartupEvents.registry('item', event => {
    event.create('gold_scrap')
})

StartupEvents.registry('item', event => {
    event.create('lead_scrap')
})

StartupEvents.registry('item', event => {
    event.create('geode_1').displayName('Iridescent Geode').rarity('uncommon')
})

StartupEvents.registry('item', event => {
    event.create('common_smithing_template')
})

StartupEvents.registry('item', event => {
    event.create('gemstone_smithing_template')
})

StartupEvents.registry('item', event => {
    event.create('wither_sword', 'sword').tier('stone')
})

StartupEvents.registry('item', event => {
    event.create('wither_axe', 'axe').tier('stone')
})
