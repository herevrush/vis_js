/**
 * Created by vrushali on 4/02/16.
 */
'use strict';
var app = angular.module('confusionApp', [])
    .controller('MenuController', ['$scope', function ($scope) {
        $scope.tab = 1;
        $scope.showDetails = false;

        $scope.filtText = '';
        $scope.dishes = [
            {
                name: 'Uthapizza',
                image: 'img/uthapizza.png',
                category: 'mains',
                label: 'Hot',
                price: '4.99',
                description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comment: ''
            },
            {
                name: 'Zucchipakoda',
                image: 'img/zucchipakoda.png',
                category: 'appetizer',
                label: '',
                price: '1.99',
                description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                comment: ''
            },
            {
                name: 'Vadonut',
                image: 'img/vadonut.png',
                category: 'appetizer',
                label: 'New',
                price: '1.99',
                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comment: ''
            },
            {
                name: 'ElaiCheese Cake',
                image: 'img/elaicheesecake.png',
                category: 'dessert',
                label: '',
                price: '2.99',
                description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comment: ''
            }
        ];

        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };
        //$scope.dishes = dishes;

        $scope.select = function (setTab) {
            this.tab = setTab;

            if (setTab === 2)
                this.filtText = "appetizer";
            else if (setTab === 3)
                this.filtText = "mains";
            else if (setTab === 4)
                this.filtText = "dessert";
            else
                this.filtText = "";
        };
        $scope.isSelected = function (checkTab) {
            return (this.tab === checkTab);
        };

    }])
    .controller('ContactController', ["$scope", function ($scope) {

        $scope.feedback = {
            mychannel: "", firstName: "", lastName: "",
            agree: false, email: ""
        };
        var channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;

    }]).controller('FeedbackController', ['$scope', function ($scope) {
        $scope.sendFeedback = function () {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "") && !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                $scope.feedback = {
                    mychannel: "", firstName: "", lastName: "",
                    agree: false, email: ""
                };
                $scope.feedback.mychannel = "";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };

    }]);