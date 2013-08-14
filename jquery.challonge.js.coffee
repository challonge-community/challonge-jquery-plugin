$ = jQuery

$.fn.challonge = (tournamentUrl, options) ->

  class Challonge

    constructor: ($this, tournamentUrl, options) ->
      @tournamentUrl = tournamentUrl || ''
      @options       = $.extend {}, $.fn.challonge.defaults, (options || {})
      @subdomain     = @options.subdomain
      @height        = $this.height()

      $this.html(@_$iframe)

    _sourceWithOptions: =>
      subdomain = if @subdomain then "#{@subdomain}." else ''
      "http://#{subdomain}challonge.com/#{@tournamentUrl}/module?#{$.param(@options)}"

    _$iframe: =>
      $("<iframe src='#{@_sourceWithOptions()}' width='100%' height='#{@height}' frameborder='0' scrolling='auto' allowtransparency='true' />")

  new Challonge $(@), tournamentUrl, options
  return @

$.fn.challonge.defaults = {
  multiplier             : 1.0
  match_width_multiplier : 1.0
  show_final_results     : 0
  show_standings         : 0
  theme                  : 1
  subdomain              : null
}
