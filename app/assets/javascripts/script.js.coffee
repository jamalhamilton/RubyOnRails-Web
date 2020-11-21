joynuss = ->
  # Fades in the description text based off scrolling down
  $('#career').waypoint
    handler: (direction) ->
      $('#career .animated-text').addClass 'animated fadeIn', direction is 'down'
    offset: 'bottom-in-view'

  # Fades in the description text based off scrolling down
  $('#right-job').waypoint
    handler: (direction) ->
      $('#right-job .animated-text').addClass 'animated fadeIn', direction is 'down'
    offset: 'bottom-in-view'

  # Fades in the description text based off scrolling down
  $('#best-decision').waypoint
    handler: (direction) ->
      $('#best-decision .animated-text').addClass 'animated fadeIn', direction is 'down'
    offset: 'bottom-in-view'

  # Fades in the description text based off scrolling down
  $('#employers').waypoint
    handler: (direction) ->
      $('#employers .animated-text').addClass 'animated fadeIn', direction is 'down'
    offset: 'bottom-in-view'
  # Sets a max height on the feature section
  $('.feature-section .feature-static').css('max-height', $(window).height() - 235)

  # Smooths scrolling for home page
  $("a[href*=#]:not([href=#])").click ->
    if location.pathname.replace(/^\//, "") is @pathname.replace(/^\//, "") and location.hostname is @hostname
      target = $(@hash)
      target = (if target.length then target else $("[name=" + @hash.slice(1) + "]"))
      if target.length
        $("html,body").animate
          scrollTop: target.offset().top - 68
        , 1000
        false

  # Select All Checkbox
  $('#selectAll').click ->
    if ( this.checked )
      $(':checkbox').each ->
        $(this).prop('checked', true)
    else
     $(':checkbox').each ->
        $(this).prop('checked', false)

  $('.ckeditor').each ->
    CKEDITOR.replace($(this).attr('id'))


  # Clickable Table Rows
  $('table.clickable-row tr').click ->
    href = $(this).attr('data-url')
    window.location = href

  # Success Modal
  $('#modalSuccess').foundation('reveal', 'open')

  # Mobile Menu
  actions =
    toggleMenu: ->
      $('body').toggleClass('nav-open')

    closeMenu: ->
      $('body').removeClass('nav-open')

  $('body').on 'click', '[data-action]', ->
    action = $(@).data('action')
    actions[action].apply @, arguments  if action of actions

  $('html').on 'touchstart', 'body.nav-open', (e) ->
    actions.closeMenu()  unless $(e.target) !in ['a', 'closeMenu']

  $('html').on 'click', 'body.nav-open', (e) ->
    actions.closeMenu()  unless $(e.target) !in ['a', 'closeMenu']
  # home last section img spacing
  homeImage = ->
    if $(window).width() > 1600
      $('#employers').css('backgroundPosition', '0 0')
    else if $(window).width() <= 1600 and $(window).width() > 1350
      $('#employers').css('backgroundPosition', '-100px 0')
    else if $(window).width() <= 1350 and $(window).width() > 1150
      $('#employers').css('backgroundPosition', '-200px 0')
    else if $(window).width() <= 1150 and $(window).width() > 950
      $('#employers').css('backgroundPosition', '-300px 0')
    else if $(window).width() < 950
      $('#employers').css('backgroundPosition', '-400px 0')

  $(window).resize ->
    homeImage()

  formDisable = ->
    $('form input[required="required"]').on 'focusout change', ->
      buttonDisabled = false

      $('form input[required="required"]').each ->
        if !$(this).val()
          buttonDisabled = true
      $('form input[type="submit"]').prop 'disabled', buttonDisabled

  formDisable()

  $("#phone").mask("(999) 999-9999")

$(document).ready ->
  joynuss()
