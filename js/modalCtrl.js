$(document).load(function () {
  setTimeout(() => {
    $('#myModal').on('shown.bs.modal', function () {
      // $('#myInput').trigger('focus')
    })
  }, 3000);
});
