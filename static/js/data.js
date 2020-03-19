$(function () {

    $(".buat-indikator").click(function () {
      $.ajax({
        url: '/api/indikator',
        type: 'get',
        dataType: 'json',
        beforeSend: function () {
          $("#modal-indikator").modal("show");
        },
        success: function (data) {
          $("#modal-indikator .modal-content").html(data.html_form);
        }
      });
    });
  
  });