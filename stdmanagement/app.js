angular.module('stdApp', ['ngMaterial'])

.controller('DemoCtrl', function($scope) {
        $scope.myusers=[];
        $scope.login = function () {
                if ($scope.username == "admin" && $scope.pwd == "admin") {
                    alert("welcome " + $scope.username);
                    window.location = "Admin.html";
                }
                else {
                    alert("invalid username or password..");
                }
        };

        $scope.submit = function()
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

    });


$(window,document,undefined).ready(function() {

    $('input').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function(e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });

});