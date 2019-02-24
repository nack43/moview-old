$(document).ready(function() {

  // delete clicked review
  $('.delete-button').click(function() {
    var reviewId = ($(this).data('review-id'));
    $.ajax({
      url: '/reviews/' + reviewId,
      type: 'DELETE',
      success: function(result) {
        console.log('delete successfully');
      }
    });
    window.location.href='/reviews';
  });
});
