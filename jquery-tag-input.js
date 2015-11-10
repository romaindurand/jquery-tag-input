/*global $:false */
$.fn.tagInput = function(conf) {
  'use strict';
  this.css('float', 'left');
  this.addClass('tagInput-input');
  $('<div id="tagInput-container"></div>').insertBefore(this);

  if (conf.focusOnParentClick) {
    this.parent().css('cursor','text').click(function() {
      this.focus();
    }.bind(this));
  }

  this.keyup(function(event) {
    var tag = this.val();
    switch (event.which) {
      case 13:
        if (tag.trim()) {
          this.addTag(tag.trim());
        }
        break;

      case 8:
        if (tag !== '') {
          return;
        }
        this.prev().find('span.active').remove();
        this.prev().children().last().addClass('active');
        break;

      default:
        break;
    }
  }.bind(this));

  this.prev().on('click', 'span.tagInput-tag', function() {
    this.remove();
  }).on('mouseover', 'span.tagInput-tag', function() {
    this.prev().find('.active').removeClass('active');
  }.bind(this));

  this.addTag = function(tag) {
    var template = $('<span class="tagInput-tag"><span></span><span> &times; </span></span>');
    $('>:eq(0)', template).text(conf.prefix + tag);
    this.prev().append(template);
    this.val('');
  };

  return this;
};