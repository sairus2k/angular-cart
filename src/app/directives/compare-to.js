export const compareTo = () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      compareTo: '='
    },
    link(scope, element, attribute, ngModel) {
      ngModel.$validators.compareTo = modelValue => modelValue === scope.compareTo;
      scope.$watch('compareTo', () => {
        ngModel.$validate();
      });
    }
  };
};
