$(document).ready ->

  if $('.posts.index').length >= 1
    console.log('posts index found')

    $('img', '.post').removeAttr('style').show()


  if $('.posts.show').length >= 1
    $(".js-toggle-mobile-social").click ->
      $(".js-mobile-social-icons").slideToggle('slow')

    $(".js-toggle-social").click ->
      $(".js-social-icons").slideToggle('slow')

    $('img', '.post').removeAttr('style').show()
    $(".post").fitVids()

  if $('.posts').length >= 1
    $("select#post_preview_image_id").imagepicker()
    
