
const Chartist = require('chartist');

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

  function Ale(min: any, max: any) {
    var num = Math.random() * (max - min);
    return num + min;
  }
  
export const dailySalesChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[Ale(1,40), Ale(1,40), Ale(1,40), Ale(1,40), Ale(1,40), Ale(1,40), Ale(1,40)]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data: any) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    }
  }
};



export const emailsSubscriptionChart = {
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [[Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800), Ale(300,800)]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value: any) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data: any) {
      if (data.type === 'bar') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    }
  }
};



export const completedTasksChart = {
  data: {
    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data: any) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    }
  }
};

