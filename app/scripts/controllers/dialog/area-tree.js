'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('AreaTreeController', function ($scope, $http, $location,ProvinceService,CityService) {

    ProvinceService.listWithCity().success(function(data){
        $scope.provinceList = data.body;
    })

    $(document).ready(function(){
        $("#browser").treeview({});

        $("#btn1").click(function(){
            var c = $("input[name='ids']:checked");
            
            alert(c.length);
        })

        $("#btn2").click(function(){
            var h = $("input[name='ids']:indeterminate");
            alert(h.length);
        })
        
    });
    
    function findParent(p,checked) {
         $("input[id='"+p+"']").attr("indeterminate",checked);
    }
    $scope.child = function(e) {
        var pId = e.id;
        var checked = e.checked;
        var p = $("#"+pId+"").attr("pId");
        
        if(checked) {
            findParent(p,checked);
            var children = $("input[pId='"+pId+"']");
            for(var i = 0; i < children.length; i++){
                $(children[i]).attr("checked", checked);
            }

            var checkLevelLengh = $("input[pId='"+p+"']:checked").length;
            var levelLengh = $("input[pId='"+p+"']").length;
            if(checkLevelLengh == levelLengh) {
                $("#"+p+"").removeAttr("indeterminate");
                $("#"+p+"").attr("checked",checked);
            }
        }else {
            var children = $("input[pId='"+pId+"']");
            for(var i = 0; i < children.length; i++){
                $(children[i]).attr("checked", checked);
            }

            var checkLevelLengh = $("input[pId='"+p+"']:checked").length;
            if(checkLevelLengh == 0) {
                $("#"+p+"").removeAttr("indeterminate");
                $("#"+p+"").attr("checked",checked);
            }else {
                $("#"+p+"").attr("indeterminate",true);
            }
        }
    }
    
  });
