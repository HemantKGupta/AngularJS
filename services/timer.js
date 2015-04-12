function timerCtrl ($scope, $interval) {

	var sec = 1;

	$interval(function(){
		$scope.seconds=sec;
		sec++;
	}, 1000);

}