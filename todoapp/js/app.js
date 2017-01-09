(function () {

var app = angular.module('app',['ngRoute']);

app.component('taskList', {
    templateUrl: 'templates/task-list.template.html',
    controller: function(getData){
        self = this;
        this.getData = getData;
        this.getData.setToStorage();
        this.tasks = this.getData.getFromStorage();
        this.addTaskShow = false;
        this.additionTask = {
            "title": "",
            "description": ""
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
                "description": ""
            }
        };
        this.setTaskDescription = function(task){
            self.getData.task = task;
        };
        this.showAddition = function () {
            if (self.addTaskShow == false){
                self.addTaskShow = true;
            } else {
                self.addTaskShow = false;
            }
        };
        this.isDone = function(task){
            task.done = true;
            self.getData.setToStorage(self.tasks);
        };
        this.isReplay = function(task){
            delete task.done;
            self.getData.setToStorage(self.tasks);
        };
    }
});

app.component('taskDetail', {
    templateUrl: 'templates/task-detail.template.html',
    controller: function(getData){
        this.getData = getData;
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

})();