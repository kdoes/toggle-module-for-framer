################################################################################
# Kim Does - 2017
# kimdoesdesign.nl
#
# A toggle module which allows you to easily create, and interactively use
# toggles in Framer.
################################################################################

class exports.Toggle extends Layer
	constructor: (options) ->
		super _.defaults options,
			width: 355
			height: 40
		@toggleOptions = options.toggleOptions ? ['A', 'B', 'C', 'D']
		@activeOption = options.activeOption ? @toggleOptions[0]
		@activeColor = new Color(options.activeColor ? '#000000')
		@inactiveColor = options.inactiveColor ? "#FFFFFF"
		@borderColor = options.borderColor ? @activeColor.alpha(.25)
		@optionStyle = _.defaults options.optionStyle,
			'text-align': 'center'
			'padding-top': '8px'
			'font-size': '14px'

		@toggleContainer = new Layer
			y: 0
			x: 0
			backgroundColor: ''
			height: options.height
			width: options.width
			parent: this

		for option, i in @toggleOptions
			do (option, i) =>
				option = new Layer
					width: options.width/@toggleOptions.length
					height: @toggleContainer.height
					parent: @toggleContainer
					html: @toggleOptions[i]
					borderWidth: 1
					x: options.width/@toggleOptions.length*i
					name: @toggleOptions[i]
				option.style = @optionStyle

				option.onClick (event, layer) =>
					if @activeOption != option.name
						@activeOption = option.name
						@updateToggleOptions()
						@changeCallback?(option.name)

		@updateToggleOptions()

	getActiveToggle: ->
		return @activeOption

	onChange: (opt) ->
		@changeCallback = opt

	updateToggleOptions: () ->
		allOptions = @toggleContainer.children
		for option, i in allOptions
			if option.name == @activeOption
				option.color = @inactiveColor
				option.backgroundColor = @activeColor
				option.borderColor = @activeColor
			else
				option.color = @activeColor
				option.backgroundColor = @inactiveColor
				option.borderColor = @borderColor
