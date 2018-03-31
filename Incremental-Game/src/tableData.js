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
			availableMsg: ("Found a broken bit of pipe in the crawlspace. Might be able to find a use for it."),
			buildMsg: ('Built a chisel. Might be able to get through the wall now.'),
			buyBar: "darkBuyBar",
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

let rooms = {
    'Console' : {
        title : 'Console: ',
        subtitle: 'A large console against one of the walls.'
    }
};

let sectors = {
    'H' : {
        Rooms : {
            'CD' : {
                position: 'corridor',
                title: 'Console Test Title',
                subtitle: 'Console Test SubTitle',
            },
            'CO' : {
                position: 'l1',
                title: '',
                subtitle: '',
            },
            '01' : {
                position: 'r1',
                title: '',
                subtitle: '',
            },
            '02' : {
                position: 'l2',
                title: '',
                subtitle: '',
            },
            '03' : {
                position: 'r2',
                title: '',
                subtitle: '',
            },
            '04' : {
                position: 'l3',
                title: '',
                subtitle: '',
            },
            'Your Room' : {
                position: 'r3',
                title: '',
                subtitle: '',
            }
        }
    }
};