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
    'H': {
        power: true,
        oxygen: true,
        room: {
            'H-00': {
                name: 'H-00',
                type: 'Corridor',
                title: 'Corridor Test Title',
                subtitle: 'Corridor Test Subtitle',
                doors: ['H-01', 'H-02', 'H-03', 'H-04', 'H-05', 'H-06'],
                locked: 'true',
                actionButtonsOn: ['test'],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-01': {
                name: 'H-01',
                type: 'Console',
                title: 'Console Test Title',
                subtitle: 'Corridor Test Subtitle',
                doors: ['H-00'],
                locked: 'false',
                actionButtonsOn: ['Search'],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-02': {
                name: 'H-02',
                type: 'Side Room',
                title: 'Room 2',
                subtitle: 'Room 2',
                doors: ['H-00'],
                locked: 'true',
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-03': {
                name: 'H-03',
                type: 'Side Room',
                title: 'Room 3',
                subtitle: 'Room 3',
                doors: ['H-00'],
                locked: 'true',
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtons: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-04': {
                name: 'H-04',
                type: 'Side Room',
                title: 'Room 4',
                subtitle: 'Room 4',
                doors: ['H-00'],
                locked: 'true',
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-05': {
                name: 'H-05',
                type: 'Side Room',
                title: 'Room 5',
                subtitle: 'Room 5',
                doors: ['H-00'],
                locked: 'true',
                actionButtonsOn: [],
                actionButtonsOff: [],
                actionButtonsHidden: [],
                buyButtonsOn: [],
                buyButtonsOff: [],
                buyButtonsHidden: []
            },
            'H-06': {
                name: 'H-06',
                type: 'Special',
                title: 'Your Room',
                subtitle: 'Your Room',
                doors: ['H-00'],
                locked: 'true',
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
