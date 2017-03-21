angular.module('donateApp').controller('donateAppController', function($uibModal) {

    var ctrl = this;

    ctrl.progress = 350;
    ctrl.balance = 150;
    ctrl.maxValue = 500;
    ctrl.isCompleted = false;

    ctrl.onDonate = onDonate;
    ctrl.onSave = onSave;
    ctrl.onShare = onShare;

    function onDonate() {
        if (ctrl.donate) {
            ctrl.progress = ctrl.progress + ctrl.donate;
            ctrl.balance = 500 - ctrl.progress;
            if (ctrl.balance <= 0) {
                ctrl.isCompleted = true;
            } else {
                ctrl.isCompleted = false;
            }
            ctrl.donate = null;
        }
    }


    function onSave() {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/save-modal-template.html',
            controller: 'SaveModalCtrl as ctrl'
        });
    }

    function onShare() {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/share-modal-template.html'
        });

    }




});