(function () {

    var app = angular.module('dataTables',[
        'ngRoute'
    ]);

    app.component('main', {
       templateUrl: 'templates/main.template.html',
       controller: function(grids, $routeParams){
           var self = this;
           this.gridId = $routeParams.gridId;

           grids.getList().then(function(response){
               self.gridsList = response;
           });

           grids.getGrid(this.gridId).then(function(response){
               self.grid = response;
           });

           grids.gridId = this.gridId;
       }
    });

    app.component('gridEdit',{
       templateUrl: 'templates/edit.template.html',
       controller: function(grids){
           var self = this;
           this.grids = grids;
           this.grids.getGrid(grids.gridId).then(function(response){
               self.grid = response;
               self.editGrid = self.grid;
           });
           this.changeRows = function (action) {
               if (action == 'add'){
                   var nextId = self.grid.rows[self.grid.rows.length - 1].id + 1;
                   self.grid.rows.push({
                       "id": nextId,
                       "hips": "value",
                       "uni": "value",
                       "ru": "value"
                   });
               } else if (action == 'remove'){
                   self.grid.rows.pop();
               }
           };
       }
    });

    app.service('grids', function($http){
        return{
            getList: function(){
                return $http.get('http://localhost/api/rest.php?method=getGridsList').then(function (response) {
                    if (response.data.error) {
                        return null;
                    } else {
                        return response.data;
                    }
                });
            },
            getGrid: function(id){
                return $http.get('http://localhost/api/rest.php?method=getGrid&grid='+id).then(function (response) {
                    if (response.data.error) {
                        return null;
                    } else {
                        return response.data;
                    }
                });
            },
            saveGrid: function(id, content){
                content = JSON.stringify(content);
                $http.get('http://localhost/api/rest.php?method=saveGrid&grid=' + id + '&content=' + content);
            },
            editId : 0
        }
    });
})();