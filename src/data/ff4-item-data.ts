import * as Icons from '../icons/icons';
import { ItemCategory } from '../types/enum/item-category';

export const FF4ItemData = [
  {
    name: 'Potions',
    icon: Icons.PotionIcon,
    category: ItemCategory.ITEM,
    flags: [],
    items: [
      { name: 'Cure1' },
      { name: 'Cure2' },
      { name: 'Cure3' },
      { name: 'Life' },
      { name: 'Ether1' },
      { name: 'Ether2' },
      { name: 'Heal' },
      { name: 'Elixir' }
    ]
  },
  {
    name: 'Status Removal Items',
    icon: Icons.RemedyIcon,
    category: ItemCategory.ITEM,
    flags: ['j-item'],
    items: [
      { name: 'Alarm' },
      { name: 'Antidote' },
      { name: 'Cross' },
      { name: 'Dietfood' },
      { name: 'EchoNote' },
      { name: 'Eyedrops' },
      { name: 'MaidKiss' },
      { name: 'Mallet' },
      { name: 'Soft' },
      { name: 'Unihorn' }
    ]
  },
  {
    name: 'Camping Gear',
    icon: Icons.CampingIcon,
    category: ItemCategory.ITEM,
    flags: [],
    items: [{ name: 'Tent' }, { name: 'Cabin' }]
  },
  {
    name: 'Beneficial(Other)',
    icon: Icons.BuffIcon,
    category: ItemCategory.ITEM,
    flags: ['j-item'],
    items: [
      { name: 'Siren' },
      { name: 'Bestiary' },
      { name: 'Bacchus' },
      { name: 'Hermes' },
      { name: 'Illusion' },
      { name: 'MoonVeil' },
      { name: 'StarVeil' }
    ]
  },
  {
    name: 'Status Effect(Negative)',
    icon: Icons.HourglassIcon,
    category: ItemCategory.ITEM,
    flags: ['j-item'],
    items: [
      { name: 'Coffin' },
      { name: 'HrGlass1' },
      { name: 'HrGlass2' },
      { name: 'HrGlass3' },
      { name: 'MuteBell' },
      { name: 'Silkweb' }
    ]
  },

  {
    name: 'Damaging Items',
    icon: Icons.BombIcon,
    category: ItemCategory.ITEM,
    flags: ['j-item'],
    items: [
      { name: 'Bomb' },
      { name: 'BigBomb' },
      { name: 'Notus' },
      { name: 'Boreas' },
      { name: 'ThorRage' },
      { name: 'ZeusRage' },
      { name: 'FireBomb' },
      { name: 'Blizzard' },
      { name: 'Lit-Bolt' },
      { name: 'GaiaDrum' },
      { name: 'Stardust' },
      { name: 'Grimoire' },
      { name: 'Succubus' },
      { name: 'Vampire' },
      { name: 'Kamikaze' }
    ]
  },
  {
    name: 'Summons',
    icon: Icons.SummonIcon,
    category: ItemCategory.ITEM,
    flags: [],
    items: [
      { name: 'Sylph' },
      { name: 'Asura' },
      { name: 'Odin' },
      { name: 'Leviathan' },
      { name: 'Bahamut' }
    ]
  },
  {
    name: 'Daggers',
    icon: Icons.DaggerIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [{ name: 'Silver' }, { name: 'Dancing' }, { name: 'Assassin' }, { name: 'Mute' }]
  },
  {
    name: 'Swords',
    icon: Icons.SwordIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'Ancient' },
      { name: 'Drain' },
      { name: 'Silver' },
      { name: 'Slumber' },
      { name: 'Fire' },
      { name: 'IceBrand' },
      { name: 'Avenger' },
      { name: 'Defense' }
    ]
  },
  {
    name: 'Dark Swords',
    icon: Icons.DarkSwordIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [{ name: 'Shadow' }, { name: 'Darkness' }, { name: 'Black' }]
  },
  {
    name: 'Holy Swords',
    icon: Icons.HolySwordIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [{ name: 'Light' }, { name: 'Excalbur' }, { name: 'Crystal' }]
  },
  {
    name: 'Ninja Swords',
    icon: Icons.NinjaIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'Short' },
      { name: 'Middle' },
      { name: 'Long' },
      { name: 'Ninja' },
      { name: 'Murasame' },
      { name: 'Masamune' }
    ]
  },
  {
    name: 'Boomerangs',
    icon: Icons.BoomerangIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [{ name: 'Boomerang' }, { name: 'FullMoon' }]
  },
  {
    name: 'Dart',
    icon: Icons.DartIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [{ name: 'Shuriken' }, { name: 'Ninja' }]
  },
  {
    name: 'Spears',
    icon: Icons.SpearIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'Spear' },
      { name: 'Wind' },
      { name: 'Flame' },
      { name: 'Blizzard' },
      { name: 'Drain' },
      { name: 'Gungnir' },
      { name: 'Dragoon' },
      { name: 'White' }
    ]
  },
  {
    name: 'Bows',
    icon: Icons.BowIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'ShortBow' },
      { name: 'CrossBow' },
      { name: 'GreatBow' },
      { name: 'Archer' },
      { name: 'ElvenBow' },
      { name: 'Samurai' },
      { name: 'Artemis' }
    ]
  },
  {
    name: 'Arrows',
    icon: Icons.ArrowIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'Medusa' },
      { name: 'Iron' },
      { name: 'White' },
      { name: 'Fire' },
      { name: 'Ice' },
      { name: 'Lit' },
      { name: 'Darkness' },
      { name: 'Poison' },
      { name: 'Mute' },
      { name: 'Charm' },
      { name: 'Samurai' },
      { name: 'Artemis' }
    ]
  },
  {
    name: 'Staves',
    icon: Icons.StaffIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'Staff' },
      { name: 'Cure' },
      { name: 'Silver' },
      { name: 'Power' },
      { name: 'Lunar' },
      { name: 'Life' },
      { name: 'Silence' }
    ]
  },
  {
    name: 'Rods',
    icon: Icons.RodIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'Rod' },
      { name: 'IceRod' },
      { name: 'FlameRod' },
      { name: 'Thunder' },
      { name: 'Lilith' },
      { name: 'Change' },
      { name: 'Charm' },
      { name: 'Stardust' }
    ]
  },
  {
    name: 'Claws',
    icon: Icons.ClawIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'FireClaw' },
      { name: 'IceClaw' },
      { name: 'Thunder' },
      { name: 'Charm' },
      { name: 'Poison' },
      { name: 'CatClaw' }
    ]
  },
  {
    name: 'Axes',
    icon: Icons.AxeIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'HandAxe' },
      { name: 'Dwarf' },
      { name: 'Ogre' },
      { name: 'Poison' },
      { name: 'RuneAxe' }
    ]
  },
  {
    name: 'Hammers',
    icon: Icons.HammerIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [{ name: 'Wooden' }, { name: 'Silver' }, { name: 'Earth' }]
  },
  {
    name: 'Whips',
    icon: Icons.WhipIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [
      { name: 'Whip' },
      { name: 'Chain' },
      { name: 'Blitz' },
      { name: 'Flame' },
      { name: 'Dragon' }
    ]
  },
  {
    name: 'Harps',
    icon: Icons.HarpIcon,
    category: ItemCategory.WEAPON,
    flags: [],
    items: [{ name: 'Dreamer' }, { name: 'Charm' }]
  },
  {
    name: 'Shields',
    icon: Icons.ShieldIcon,
    category: ItemCategory.ARMOR,
    flags: [],
    items: [
      { name: 'Shadow' },
      { name: 'Black' },
      { name: 'Iron' },
      { name: 'Paladin' },
      { name: 'Silver' },
      { name: 'Fire' },
      { name: 'Ice' },
      { name: 'Diamond' },
      { name: 'Aegis' },
      { name: 'Samurai' },
      { name: 'Dragoon' },
      { name: 'Crystal' }
    ]
  },
  {
    name: 'Helmets',
    icon: Icons.HelmetIcon,
    category: ItemCategory.ARMOR,
    flags: [],
    items: [
      { name: 'Shadow' },
      { name: 'Darkness' },
      { name: 'Black' },
      { name: 'Cap' },
      { name: 'Leather' },
      { name: 'Iron' },
      { name: 'Paladin' },
      { name: 'Silver' },
      { name: 'Diamond' },
      { name: 'Samurai' },
      { name: 'Dragoon' },
      { name: 'Crystal' },
      { name: 'Glass' },
      { name: 'Wizard' },
      { name: 'Gaea' },
      { name: 'Tiara' },
      { name: 'Headband' },
      { name: 'Bandanna' },
      { name: 'Ninja' },
      { name: 'Ribbon' }
    ]
  },
  {
    name: 'Armors',
    icon: Icons.ArmorIcon,
    category: ItemCategory.ARMOR,
    flags: [],
    items: [
      { name: 'Shadow' },
      { name: 'Darkness' },
      { name: 'Black' },
      { name: 'Iron' },
      { name: 'Paladin' },
      { name: 'Silver' },
      { name: 'Fire' },
      { name: 'Ice' },
      { name: 'Diamond' },
      { name: 'Samurai' },
      { name: 'Dragoon' },
      { name: 'Crystal' },
      { name: 'Adamant' }
    ]
  },
  {
    name: 'Shirts',
    icon: Icons.ShirtIcon,
    category: ItemCategory.ARMOR,
    flags: [],
    items: [
      { name: 'Cloth' },
      { name: 'Prisoner' },
      { name: 'Leather' },
      { name: 'Bard' },
      { name: 'Gaea' },
      { name: 'Wizard' },
      { name: 'White' },
      { name: 'Black' },
      { name: 'Sorcerer' },
      { name: 'Karate' },
      { name: 'Bl.Belt' },
      { name: 'Ninja' },
      { name: 'Heroine' },
      { name: 'Power' }
    ]
  },
  {
    name: 'Gauntlets',
    icon: Icons.GauntletIcon,
    category: ItemCategory.ARMOR,
    flags: [],
    items: [
      { name: 'Shadow' },
      { name: 'Darkness' },
      { name: 'Black' },
      { name: 'Iron' },
      { name: 'Paladin' },
      { name: 'Diamond' },
      { name: 'Samurai' },
      { name: 'Dragoon' },
      { name: 'Crystal' },
      { name: 'Zeus' }
    ]
  },
  {
    name: 'Rings',
    icon: Icons.RingIcon,
    category: ItemCategory.ARMOR,
    flags: [],
    items: [
      { name: 'IronRing' },
      { name: 'RubyRing' },
      { name: 'Silver' },
      { name: 'Diamond' },
      { name: 'Strength' },
      { name: 'Rune' },
      { name: 'Protect' },
      { name: 'Crystal' },
      { name: 'Cursed' }
    ]
  }
];
