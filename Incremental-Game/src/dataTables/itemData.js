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