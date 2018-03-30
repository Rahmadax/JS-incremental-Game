var Craftables = {
		'Chisel': {
			name: ('Chisel'),
			availableMsg: ("Found a broken bit of pipe in the crawlspace. Might be able to find a use for it."),
			buildMsg: ('Fashioned myself a little chisel. Might be able to get through the wall now.'),
			buyBar: "roomBuyBar",
			type: '',
			cost: function() {
				return {
					'metal': 1,
					'cloth': 1
				};
			}
		},
		
		'Repair Console': {
			name: ('Repair Console'),
			availableMsg: ("This old console is beat up bad. I need some wires to fix it up."),
			buildMsg: ('Engineer wired the thing back together. Time to try turning it on.'),
			buyBar: "darkBuyBar",
			type: '',
			cost: function() {
				return {
					'electronics': 3
				};
			}
		}
}