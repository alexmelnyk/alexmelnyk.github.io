(function () {

var app = angular.module('app',['ngRoute']);

app.component('taskList', {
    templateUrl: 'templates/task-list.template.html',
    controller: function(getData){
        var self = this;
        this.getData = getData;
        this.getData.setToStorage();
        this.tasks = this.getData.getFromStorage();
        this.addTaskShow = false;
        this.additionTask = {
            "title": "",
            "description": "",
            "important": false
        };
        this.deleteTask = function(task){
            self.tasks.splice(self.tasks.indexOf(task), 1);
            self.getData.setToStorage(self.tasks);
        };
        this.addTask = function(){
            self.tasks.push(self.additionTask);
            self.getData.setToStorage(self.tasks);
            self.additionTask = {
                "title": "",
                "description": "",
            }
        };
        this.setTaskDescription = function(task){
            var index = self.tasks.indexOf(task);
            self.getData.taskIndex = index;
        };
        this.showAddition = function () {
            self.addTaskShow = (self.addTaskShow == false) ? true : false;
        };
        this.setDone = function(task){
            if (task.done){
                delete task.done;
            } else {
                task.done = true;
            }
            self.getData.setToStorage(self.tasks);
        };
        this.setImportant = function(task){
            if (task.important){
                delete task.important;
            } else {
                task.important = true;
            }
            self.getData.setToStorage(self.tasks);
        }
    }
});

app.component('taskDetail', {
    templateUrl: 'templates/task-detail.template.html',
    controller: function(getData){
        var self = this;
        this.getData = getData;

        this.tasks = this.getData.getFromStorage();

        this.editor = false;

        this.showEditor = function(){
            self.editor = (self.editor == false) ? true : false;
        };

        this.saveTask = function(){
            self.getData.setToStorage(self.tasks);
        }
    }
});

app.service('getData', function(){

    return{
        getFromStorage: function(){
            if (localStorage.getItem('app-tasks')){
                return JSON.parse(localStorage.getItem('app-tasks'));
            }
        },
        setToStorage: function(tasks){
            var items = '';
            if (!localStorage.getItem('app-tasks')){
                items = '[{"title": "default task!", "description": "default task description!"}]';
                localStorage.setItem('app-tasks', items);
                console.log('item1:' + items);
            } else {
                if (tasks){
                    items = JSON.stringify(tasks);
                    localStorage.setItem('app-tasks', items);
                    console.log('item2:' + items);
                }
            }
        }
    }
});

app.filter('filter', function(){
    return function (items, filter) {
        var filtered = [];

        switch(filter){
            case 'all':
                filtered = items;
                break;
            case 'important':
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.important == true) {
                        filtered.push(item);
                    }
                }
                break;
            case 'done':
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.done == true) {
                        filtered.push(item);
                    }
                }
                break;
            default:
                filtered = items;
                break;
        }

        return filtered;
    };
});

})();