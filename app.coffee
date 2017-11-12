#######################
# Kim Does - 2017
# kimdoesdesign.nl
#######################

Framer.Info =
	title: "Toggle Module"
	author: "Kim Does"
	twitter: "@kdoes"
	description: "A toggle module which allows you to easily create, and interactively use toggles / segemented controls."

{Toggle} = require 'toggle'

# Creating some example toggles
firstToggle = new Toggle
	parent: container
	midX: container.midX
	y: 180
	width: Screen.width-40
	height: 40
	activeOption: 'Don'
	toggleOptions: ['Don', 'Peggy', 'Joan']
	
secondToggle = new Toggle
	parent: container
	midX: container.midX
	y: firstToggle.maxY+20
	width: Screen.width-40
	height: 40
	toggleOptions: ["A", "B", "C", "D", "E"]

tinyToggle = new Toggle
	parent: container
	y: secondToggle.maxY+20
	x: 20
	width: 80
	height: 40
	activeColor: '#425879'
	inactiveColor: '#E8EBEE'
	toggleOptions: ["|", "&#9711;"]

crazyExample = new Toggle
	parent: container
	midX: container.midX
	y: tinyToggle.maxY+20
	height: 130
	width: Screen.width-40
	toggleOptions: ["Yes", "No"]
	activeColor: '#FF6900'
	optionStyle:
		"font-size": "40px"
		"padding-top": "50px"

# You can listen for changes on toggles and get the active value.
firstToggle.onChange () ->
	print 'Something has changed in firstToggle'

secondToggle.onChange (newValue) ->
	print 'The value of secondToggle is: ' + newValue