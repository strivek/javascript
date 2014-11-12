angular.module("citys")
  .controller("cityListCtrl", function($scope) {
    $scope.data = {
      list: [{
        name: "北京",
        description: "历史古都",
        category: "beifang",
        pm: "500"
      }, {
        name: "上海",
        description: "魔都",
        category: "nanfang",
        pm: "300"
      }, {
        name: "广州",
        description: "恒大足球",
        category: "nanfang",
        pm: "200"
      }]
    }
  })
