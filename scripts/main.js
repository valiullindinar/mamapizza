 document.addEventListener('DOMContentLoaded', function() {

        var svg = new Walkway('#triangle');

        svg.draw(function() {
          console.log('Finished triangle!');
        });

        var svg2 = new Walkway({
          selector: '#diamond',
          duration: 2500,
          easing: 'linear'
        }).draw(function() {
          console.dir('Finished diamond!');
        });

        var svg3 = new Walkway({
          selector: '#tester',
          duration: 5000,
          easing: 'linear'
        });

        svg3.draw(function() {
          console.log('Finished test shape!');
        });

        var svg4 = new Walkway({
          selector: '#ps4',
          duration: 3500
        });

        svg4.draw();

        var svg5 = new Walkway({
          selector: '#polyline',
          duration: 3000
        });

        svg5.draw(function() {
          console.log('Finished polyline!');
        });

        var svg6 = new Walkway({
          selector: '#customEasing',
          duration: 3000,
          easing: function(t) {
            return t * t * t;
          }
        }).draw();

        document.addEventListener('dblclick', function() {
          svg.redraw();
          svg4.redraw();
        }, false);
      });
$(document).ready(function() {

})