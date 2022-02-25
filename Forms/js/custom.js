//form validation v//
$('.formvalidation')
.bootstrapValidator({
}).on('success.form.bv', function (e) {
  // Prevent form submission
  e.preventDefault();
  var $form = $(e.target);
  fv = $form.data('formValidation');
  if ($form.attr('action') != undefined) {
    $form.unbind('submit');
    $form.submit();
  }
});
  //form validation ^//


  const errorElement =document.getElementById("error");
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const passward = document.getElementById("passward")
