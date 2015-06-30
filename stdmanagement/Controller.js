var app = angular.module("myApp",['ngMaterial']);

app.controller("loginCtrl", function ($scope) {
    $scope.login = function () {
        if ($scope.username == "admin" && $scope.pwd == "admin") {
            alert("welcome " + $scope.username);
            window.location = "Admin.html";
        }
        else {
            alert("invalid username or password..");
        }
    }

});


app.controller("stdLogin", function ($scope) {

    $scope.stdLogin = function () {
        for (var i = 0; i <= myusers.length; i++) {
            if ($scope.username == myusers[i].username && $scope.pwd == myusers[i].pass) {
                alert("welcome " + $scope.username);
            }
            else {
                alert("invalid username or password..");
            }
        }
    };
    $scope.addStudent = function(){

    }

});
app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';

    $scope.myusers=[];
    $scope.submit=function()
    {

        var user=$scope.username;
        var pass=$scope.password;
        var rol=$scope.Rno;
        var email=$scope.mail;
        var cls=$scope.class;


        alert(user+" is registered");

        $scope.myusers.push({username:user,password:pass,Rno:rol,mail:email,class:cls,
            tasks:[]
        });

    };
    $scope.addTask = function (index){
        $scope.task = prompt("Enter task:");
        $scope.myusers[index].tasks.push($scope.task);
        alert(""+$scope.myusers[index].tasks);
    }
});
