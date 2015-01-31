ProfileSchema = new SimpleSchema({
	description: {
		type: String,
		label: "Description",
		optional: true
	},
	wins: {
		type: [GamesSchema],
		label: "Games won"
	},
	losses: {
		type: [GamesSchema],
		label: "Games lost"
	},
	playStyles: {
		type: [String],
		label: "Play styles",
		optional: true
	},
	decks: {
		type: [DecksSchema],
		label: "Decks",
		optional: true
	}

});

UsersSchema = new SimpleSchema({
	profile: {
		type: ProfileSchema,
		optional: true
	}
});

Meteor.users.attachSchema(UsersSchema);