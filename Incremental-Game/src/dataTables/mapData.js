remainingSectors = ['B','C','D','E','F','G','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'];
reservedSectors = ['A','H','X','Y','Z'];
consoleSectors = ['H'];

let consoles = {
    'C-H120': {
        repaired : false
    }
};

let sectors = {
    // Actionbuttons
    // On - visible + onclick, Off - visible no onclick, Hidden - not visible.
    'H-0': {
        power: true,
        oxygen: true,
        room: {
            'H-0-00': {
                name: 'H-0-00',
                type: 'Corridor',
                title: 'Corridor Test Title',
                subtitle: 'Corridor Test Subtitle',
                doors: {
                    'H-0-00>H-0-01': {name: 'H-0-00>H-0-01', isLocked: 'false', material: 'steel'},
                    'H-0-00>H-0-02': {name: 'H-0-00>H-0-02', isLocked: 'false', material: 'steel'},
                    'H-0-00>H-0-03': {name: 'H-0-00>H-0-03', isLocked: 'false', material: 'steel'},
                    'H-0-00>H-0-04': {name: 'H-0-00>H-0-04', isLocked: 'false', material: 'steel'},
                    'H-0-00>H-0-05': {name: 'H-0-00>H-0-05', isLocked: 'false', material: 'steel'},
                    'H-0-00>H-0-06': {name: 'H-0-00>H-0-06', isLocked: 'false', material: 'steel'}
                },
                actionButtonsOn: ['test'],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-0-01': {
                name: 'H-0-01',
                type: 'Console',
                title: 'Console Test Title',
                subtitle: 'Corridor Test Subtitle',
                doors: {'H-0-01>H-0-00':{name:'H-0-01>H-0-00',isLocked: 'false', material: 'steel'}},
                actionButtonsOn: ['Search','Activate'],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-0-02': {
                name: 'H-0-02',
                type: 'Side Room',
                title: 'Room 2',
                subtitle: 'Room 2',
                doors: {'H-0-02>H-0-00':{name:'H-0-02>H-0-00',isLocked: 'false', material: 'steel'}},
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-0-03': {
                name: 'H-0-03',
                type: 'Side Room',
                title: 'Room 3',
                subtitle: 'Room 3',
                doors: {'H-0-03>H-0-00':{name:'H-0-03>H-0-00',isLocked: 'false', material: 'steel'}},
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-0-04': {
                name: 'H-0-04',
                type: 'Side Room',
                title: 'Room 4',
                subtitle: 'Room 4',
                doors: {'H-0-04>H-0-00':{name:'H-0-04>H-0-00',isLocked: 'false', material: 'steel'}},
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-0-05': {
                name: 'H-0-05',
                type: 'Side Room',
                title: 'Room 5',
                subtitle: 'Room 5',
                doors: {'H-0-05>H-0-00':{name:'H-0-05>H-0-00',isLocked: 'false', material: 'steel'}},
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-0-06': {
                name: 'H-0-06',
                type: 'Special',
                title: 'Your Room',
                subtitle: 'Your Room',
                doors: {'H-0-06>H-0-00':{name:'H-0-06>H-0-00',isLocked: 'false', material: 'steel'}},
                actionButtonsOn: ['Tube'],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            }
        }
    }
};
