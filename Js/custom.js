//$('.ui.modal').modal('show');

//Modal para Flash
function modp() {
    $(document).ready(function () {
        $("#mod").click(function () {
            $(".ui.modal.2").modal('show');
        });
    })
};
//Modal para Batman
function modp2() {
    $(document).ready(function () {
        $("#mod2").click(function () {
            $(".ui.modal.3").modal('show');
        });
    })
};

//Modal para las donaciones :v 

function modp3() {
    $(document).ready(function(){
        $("#mod3").click(function (){
            $(".ui.mini.modal").modal('show');
        })
    });
}
//modal para el registro

function registro() {
    $(document).ready(function(){
        $("#mod4").click(function (){
            $(".ui.tiny.modal").modal('show');
        })
    })
}
//toggle

//Tooltip
$('.pop')
  .popup()
;