(function() {
  var $,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  $.fn.challonge = function(tournamentUrl, options) {
    var Challonge;
    Challonge = (function() {

      function Challonge($this, tournamentUrl, options) {
        this._$iframe = __bind(this._$iframe, this);
        this._sourceWithOptions = __bind(this._sourceWithOptions, this);        this.tournamentUrl = tournamentUrl || '';
        this.options = $.extend({}, $.fn.challonge.defaults, options || {});
        this.subdomain = this.options.subdomain;
        this.height = $this.height();
        $this.html(this._$iframe);
      }

      Challonge.prototype._sourceWithOptions = function() {
        var subdomain;
        subdomain = this.subdomain ? "" + this.subdomain + "." : '';
        return "http://" + subdomain + "challonge.com/" + this.tournamentUrl + "/module?" + ($.param(this.options));
      };

      Challonge.prototype._$iframe = function() {
        return $("<iframe src='" + (this._sourceWithOptions()) + "' width='100%' height='" + this.height + "' frameborder='0' scrolling='auto' allowtransparency='true' />");
      };

      return Challonge;

    })();
    new Challonge($(this), tournamentUrl, options);
    return this;
  };

  $.fn.challonge.defaults = {
    multiplier: 1.0,
    match_width_multiplier: 1.0,
    show_final_results: 0,
    show_standings: 0,
    theme: 1,
    subdomain: null
  };

}).call(this);