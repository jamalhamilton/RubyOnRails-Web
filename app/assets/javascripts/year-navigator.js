// Year Navigator
$(window).scroll(function() {
  $('#year-navigation') && scrollProcess($(this));

  function getScrollPostionPerYear() {
    return [
      {
        pixel: $('#y2000').offset().top,
        startYear: 2000,
      },
      {
        pixel: $('#y2009').offset().top,
        startYear: 2009,
      },
      {
        pixel: $('#y2010').offset().top,
        startYear: 2010,
      },
      {
        pixel: $('#y2015').offset().top,
        startYear: 2015,
      },
      {
        pixel: $('#y2016').offset().top,
        startYear: 2016,
      },
      {
        pixel: $('#y2017').offset().top,
        startYear: 2017,
      },
      {
        pixel: $('#y2018').offset().top,
        startYear: 2018,
      },
    ]
  }

  // Scroll Process
  function scrollProcess(_this) {
    var yearNavigation = $('#year-navigation');
    var scrollTop = _this.scrollTop();

    if (scrollTop + 340 >= $('#y2000').offset().top) {
      var yearRangesInPixel = getScrollPostionPerYear();
      yearNavigation.addClass('fixed-top');

      var i = 7;
      var currentYear = 2010;
      while (i--) {
        if (scrollTop > yearRangesInPixel[i].pixel - 300) {
          if (i === 6) {
            currentYear = 2018;
          } else {
            var pixelPerOneYear
              = (yearRangesInPixel[i + 1].pixel - yearRangesInPixel[i].pixel)
                  / (yearRangesInPixel[i + 1].startYear - yearRangesInPixel[i].startYear);
            currentYear = yearRangesInPixel[i].startYear + Math.floor((scrollTop - yearRangesInPixel[i].pixel + 300) / pixelPerOneYear);
          }
          $('#year-backbround').addClass('d-block');
          $('#year-navigation li.menu-item').removeClass('active');

          $('#li' + yearRangesInPixel[i].startYear).addClass('active');
          $('#year-backbround .year-content')[0].innerText = currentYear;
          yearNavigation.scrollLeft(
            $('#li' + yearRangesInPixel[i].startYear).offset().left
              - _this.width() / 2
              + yearNavigation.scrollLeft()
          );
          break;
        }
      }
    } else {
      yearNavigation.removeClass('fixed-top');
      $('#year-backbround').removeClass('d-block');
    }
  }
});