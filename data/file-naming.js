// File Naming game — full pre-generated universe tree
// Hierarchy: VuTru → 5 Thiên hà → 5 Ngân hà each → 5 Hệ sao each → 0-5 Hành tinh each
// Compact format: JS in game builds nested tree from these flat arrays
// Total: 1 root + 5 TH + 25 NH + 125 HS = 156 folders, ~315 planet files

window.FILE_NAMING_TREE = {
  root: 'VuTru',

  // 5 Thiên hà (Galaxy Groups)
  th: ['Xoay', 'Bao', 'Linh', 'Rong', 'Thien'],

  // 25 Ngân hà (Galaxies) — 5 per Thiên hà, in order
  nh: [
    // Xoay
    'Andor', 'Belo', 'Cyra', 'Delo', 'Eris',
    // Bao
    'Faro', 'Gaia', 'Hydra', 'Iris', 'Juno',
    // Linh
    'Kael', 'Lyra', 'Myra', 'Nori', 'Orba',
    // Rong
    'Pyre', 'Quil', 'Reva', 'Sona', 'Tala',
    // Thien
    'Ulma', 'Vela', 'Wynn', 'Xyla', 'Yara'
  ],

  // 125 Hệ sao (Star Systems) — 5 per Ngân hà, in order
  hs: [
    // Andor (Xoay)
    'Ara', 'Bex', 'Cal', 'Dov', 'Eon',
    // Belo (Xoay)
    'Fey', 'Gol', 'Hex', 'Ion', 'Jax',
    // Cyra (Xoay)
    'Koi', 'Lux', 'Mag', 'Nex', 'Orx',
    // Delo (Xoay)
    'Pax', 'Qor', 'Rex', 'Sol', 'Tau',
    // Eris (Xoay)
    'Ura', 'Vox', 'Wex', 'Xen', 'Yew',

    // Faro (Bao)
    'Zen', 'Ace', 'Bay', 'Cor', 'Dew',
    // Gaia (Bao)
    'Elk', 'Fin', 'Gul', 'Hub', 'Ink',
    // Hydra (Bao)
    'Joy', 'Key', 'Lad', 'Mox', 'Nod',
    // Iris (Bao)
    'Oak', 'Pip', 'Rio', 'Sky', 'Tin',
    // Juno (Bao)
    'Urn', 'Vim', 'Wok', 'Yak', 'Zip',

    // Kael (Linh)
    'Aer', 'Bog', 'Cue', 'Dax', 'Elm',
    // Lyra (Linh)
    'Fox', 'Gap', 'Hob', 'Ivy', 'Jar',
    // Myra (Linh)
    'Kit', 'Lob', 'Mud', 'Net', 'Oat',
    // Nori (Linh)
    'Peg', 'Rig', 'Sap', 'Tug', 'Vet',
    // Orba (Linh)
    'Wag', 'Yam', 'Zag', 'Amp', 'Box',

    // Pyre (Rong)
    'Cog', 'Din', 'Elf', 'Fig', 'Gut',
    // Quil (Rong)
    'Hop', 'Ice', 'Jig', 'Kin', 'Log',
    // Reva (Rong)
    'Mop', 'Nap', 'Owl', 'Paw', 'Rum',
    // Sona (Rong)
    'Sod', 'Tap', 'Van', 'Web', 'Alp',
    // Tala (Rong)
    'Bow', 'Cab', 'Den', 'Ear', 'Flu',

    // Ulma (Thien)
    'Gin', 'Hay', 'Imp', 'Jab', 'Keg',
    // Vela (Thien)
    'Lip', 'Map', 'Nib', 'Oar', 'Pal',
    // Wynn (Thien)
    'Ram', 'Sly', 'Tar', 'Axe', 'Bid',
    // Xyla (Thien)
    'Dip', 'Eve', 'Fur', 'Gem', 'Hue',
    // Yara (Thien)
    'Icy', 'Jot', 'Lye', 'Maw', 'Nub'
  ],

  // 125 planet arrays — one per Hệ sao, 0-5 planets each
  // All planet names globally unique, under 9 chars
  pl: [
    // === XOAY / Andor ===
    ['Nova', 'Glim', 'Rune'],       // Ara
    ['Thorn', 'Quill'],             // Bex
    ['Ash', 'Fog', 'Shard'],        // Cal
    [],                              // Dov
    ['Jet', 'Orb', 'Ray'],          // Eon

    // === XOAY / Belo ===
    ['Mew', 'Pyx', 'Rue'],          // Fey
    ['Arc', 'Blu'],                  // Gol
    ['Dim', 'Lit', 'Nox', 'Wax', 'Crux'],  // Hex
    ['Coy'],                         // Ion
    ['Dye', 'Fly', 'Vow'],          // Jax

    // === XOAY / Cyra ===
    ['Wisp', 'Fume', 'Drab'],       // Koi
    ['Hum', 'Sync'],                // Lux
    ['Bead', 'Lilt', 'Sum'],        // Mag
    ['Sash'],                        // Nex
    ['Purl'],                        // Orx

    // === XOAY / Delo ===
    ['Wig', 'Zap', 'Limn'],         // Pax
    [],                              // Qor
    ['Aloe', 'Bolt', 'Calm'],       // Rex
    ['Dawn', 'Edge'],                // Sol
    ['Fade', 'Gale', 'Haze', 'Isle'],  // Tau

    // === XOAY / Eris ===
    ['Jade', 'Kelp'],               // Ura
    ['Lace', 'Mint', 'Opal'],       // Vox
    [],                              // Wex
    ['Pear', 'Reef', 'Sand', 'Vine'],  // Xen
    ['Wren'],                        // Yew

    // === BAO / Faro ===
    ['Apex', 'Bark', 'Cork'],       // Zen
    ['Dale', 'Fern'],               // Ace
    ['Grit', 'Helm', 'Knot'],       // Bay
    [],                              // Cor
    ['Lark', 'Moss', 'Pier', 'Rose'],  // Dew

    // === BAO / Gaia ===
    ['Sage', 'Toad'],               // Elk
    ['Volt', 'Wasp', 'Zoom'],       // Fin
    ['Arch', 'Brew'],               // Gul
    ['Cone', 'Dome', 'Flux', 'Glen'],  // Hub
    ['Halo'],                        // Ink

    // === BAO / Hydra ===
    ['Kale', 'Lamp', 'Maze'],       // Joy
    ['Nest', 'Peak'],               // Key
    ['Rift', 'Stem', 'Tomb', 'Urge', 'Wolf'],  // Lad
    ['Axle'],                        // Mox
    ['Balm', 'Cape', 'Drum'],       // Nod

    // === BAO / Iris ===
    ['Fawn', 'Gulf', 'Hunt'],       // Oak
    ['Brio'],                        // Pip
    ['Lynx', 'Moth', 'Opus', 'Robe'],  // Rio
    [],                              // Sky
    ['Swan', 'Tide', 'Wave'],        // Tin

    // === BAO / Juno ===
    ['Flop'],                        // Urn
    ['Bond', 'Curl', 'Dune', 'Foam'],  // Vim
    [],                              // Wok
    ['Glow', 'Hive', 'Jolt'],       // Yak
    ['Loom', 'Muse'],               // Zip

    // === LINH / Kael ===
    ['Nail', 'Pale', 'Deft'],       // Aer
    ['Rack', 'Seal'],               // Bog
    ['Tank', 'Veil', 'Weed'],       // Cue
    ['Yarn', 'Zone'],               // Dax
    ['Atom', 'Blip', 'Chip'],       // Elm

    // === LINH / Lyra ===
    ['Dove', 'Fray'],               // Fox
    ['Horn', 'Keen', 'Lime', 'Daze'],  // Gap
    [],                              // Hob
    ['Mace', 'Node', 'Palm'],       // Ivy
    ['Quay', 'Ramp'],               // Jar

    // === LINH / Myra ===
    ['Slab', 'Tray', 'Vent'],       // Kit
    ['Wind', 'Yoke'],               // Lob
    ['Acre', 'Brim', 'Coil', 'Dart'],  // Mud
    [],                              // Net
    ['Feat', 'Gilt', 'Hymn'],       // Oat

    // === LINH / Nori ===
    ['Loft', 'Mare', 'Pine'],       // Peg
    ['Rein', 'Span'],               // Rig
    ['Tuft', 'Mist', 'Whim'],       // Sap
    [],                              // Tug
    ['Bell', 'Clay', 'Drop', 'Font', 'Gust'],  // Vet

    // === LINH / Orba ===
    ['Heap', 'Jilt'],               // Wag
    ['Knob', 'Leaf', 'Malt'],       // Yam
    ['Noon', 'Pane'],               // Zag
    ['Prow', 'Silk', 'Toll', 'Void'],  // Amp
    ['Wake'],                        // Box

    // === RONG / Pyre ===
    ['Burr', 'Dusk', 'Fist'],       // Cog
    ['Graf', 'Husk'],               // Din
    ['Writ', 'Kite', 'Loop', 'Mask'],  // Elf
    [],                              // Fig
    ['Oath', 'Pulp', 'Ruin'],       // Gut

    // === RONG / Quil ===
    ['Sway', 'Tack'],               // Hop
    ['Vane', 'Warp', 'Yell'],       // Ice
    ['Buzz', 'Clue'],               // Jig
    ['Fizz', 'Gate', 'Herd', 'Lane'],  // Kin
    ['Mild'],                        // Log

    // === RONG / Reva ===
    ['Snag', 'Pike', 'Rave'],       // Mop
    ['Silt', 'Turf'],               // Nap
    ['Vale', 'Wilt', 'Zinc', 'Heft'],  // Owl
    [],                              // Paw
    ['Crag', 'Brow', 'Talc'],       // Rum

    // === RONG / Sona ===
    ['Harp', 'Goad', 'Nave'],       // Sod
    ['Moor', 'Plum'],               // Tap
    ['Reel', 'Omen', 'Twig'],       // Van
    ['Ploy'],                        // Web
    ['Lank', 'Core', 'Dent', 'Maul'],  // Alp

    // === RONG / Tala ===
    ['Gaze', 'Hilt', 'Jest'],       // Bow
    ['Lush', 'Myth'],               // Cab
    ['Polo', 'Riff', 'Rind', 'Surf', 'Tusk'],  // Den
    [],                              // Ear
    ['Vole', 'Spry'],               // Flu

    // === THIEN / Ulma ===
    ['Bale', 'Cask', 'Torc'],       // Gin
    ['Etch', 'Prim'],               // Hay
    ['Gild', 'Jinx', 'Lute', 'Flax'],  // Imp
    ['Crud'],                        // Jab
    ['Nook', 'Pith', 'Raze'],       // Keg

    // === THIEN / Vela ===
    ['Stud', 'Trek'],               // Lip
    ['Dirge', 'Vial', 'Welt'],      // Map
    ['Yogi'],                        // Nib
    ['Zeal', 'Barb', 'Clam'],       // Oar
    ['Dirk', 'Fang', 'Glyph'],      // Pal

    // === THIEN / Wynn ===
    ['Hull', 'Idol', 'Jute'],       // Ram
    ['Kiwi', 'Lode'],               // Sly
    ['Mink', 'Nape', 'Oxid', 'Plop'],  // Tar
    [],                              // Axe
    ['Quip', 'Rusk', 'Soot'],       // Bid

    // === THIEN / Xyla ===
    ['Trap', 'Unix', 'Wand'],       // Dip
    ['Pang', 'Yawn'],               // Eve
    ['Zest', 'Bask', 'Cusp', 'Dram'],  // Fur
    ['Echo'],                        // Gem
    ['Flak', 'Hulk', 'Newt'],       // Hue

    // === THIEN / Yara ===
    ['Keel', 'Lava', 'Onyx'],       // Icy
    ['Rust', 'Woad'],               // Jot
    ['Prig', 'Swab', 'Knit', 'Flog'],  // Lye
    ['Waif'],                        // Maw
    ['Gyro', 'Brig', 'Swag']        // Nub
  ]
};
