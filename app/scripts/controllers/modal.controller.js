angular.module('donateApp').controller('SaveModalCtrl', function ($uibModalInstance) {
  var ctrl = this;
  ctrl.ok = function () {
    $uibModalInstance.close();
  };

  ctrl.cancel = function () {
    $uibModalInstance.dismiss();
  };
});

