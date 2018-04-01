remainingSectors = ['A','B','C','D','E','F','G','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let resources = {
    // collectible resources
    'electrum'                  : 0,
    'food'                      : 0,
    'water'                     : 0,
    'wood'                      : 0,
    'metal'                     : 1,
    'cloth'                     : 1,
    'electronics'               : 3,
    'components'                : 0,
    'high quality components'   : 0,
    'crystals'                  : 0,
    'uranium'                   : 0,

    // mob loot
    'chitin'                    : 0,
    'monster flesh'             : 0,
    'monster eyes'              : 0,
    'monster skin'              : 0,

    // ammo
    'makeshift bullet'          : 0,
    'bullet'                    : 0,
    'high quality bullet'       : 0

};

let tools = {
    'hacking tool'  : false
};

let items = {
		'Chisel': {
			name: 'Chisel',
			availableMsg: ('Found a broken bit of pipe in the crawlspace. Might be able to find a use for it.'),
			buildMsg: ('Built a chisel. Might be able to get through the wall now.'),
			buyBar: 'darkBuyBar',
            available: 'true',
            numBuilt : 0,
            maxNum : 1,
			purchased: 'false',
            cost : { 'metal': 1,
                     'cloth': 1
			}
		},

		'Repair_Console': {
			name: 'Repair_Console',
			availableMsg: ("This old console is beat up bad. I'll need a few wires to fix it up."),
			buildMsg: ('Engineer wired the machine back together. Time to try turning it on.'),
			buyBar: 'consoleBuyBar',
            extraFunction: 'repairConsole(this.id)',
            available: 'true',
            numBuilt : 0,
            maxNum : -1,
            purchased: 'false',
            cost : {
                'electronics': 3
            }
		}
};


let consoles = {
    'C-H120': {
        repaired : false
    }
};

let roomStore = {
    'Console' : {
        title : 'Console: ',
        subtitle: 'A large console against one of the walls.'
    }
};

let sectors = {
    'H' : {
        room: {
            'H-00': {
                name: 'H-00',
                type: 'Corridor',
                title: 'Corridor Test Title',
                subtitle: 'Corridor Test Subtitle',
                doors: ['H-01', 'H-02', 'H-03', 'H-04', 'H-05', 'H-06'],
                actionButtons: ['Tube', 'Hole'],
                buyButtons: ['Chisel']
            },
            'H-01': {
                name: 'H-01',
                type: 'Console',
                title: 'Console Test Title',
                subtitle: 'Corridor Test Subtitle',
                doors: ['H-00'],
                actionButtons: ['Search', 'Activate', 'Deactivate'],
                buyButtons: ['Repair_Console']
            },
            'H-02': {
                name: 'H-02',
                type: 'Side Room',
                title: 'Room 2',
                subtitle: 'Room 2',
                doors: ['H-00'],
                actionButtons: [],
                buyButtons: []
            },
            'H-03': {
                name: 'H-03',
                type: 'Side Room',
                title: 'Room 3',
                subtitle: 'Room 3',
                doors: ['H-00'],
                actionButtons: [],
                buyButtons: []
            },
            'H-04': {
                name: 'H-04',
                type: 'Side Room',
                title: 'Room 4',
                subtitle: 'Room 4',
                doors: ['H-00'],
                actionButtons: [],
                buyButtons: []
            },
            'H-05': {
                name: 'H-05',
                type: 'Side Room',
                title: 'Room 5',
                subtitle: 'Room 5',
                doors: ['H-00'],
                actionButtons: [],
                buyButtons: []
            },
            'H-06': {
                name: 'H-06',
                type: 'Special',
                title: 'Your Room',
                subtitle: 'Your Room',
                doors: ['H-00'],
                actionButtons: [],
                buyButtons: []
            }
        }
    }
};