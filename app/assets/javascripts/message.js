$(function() {
  function buildHTML(message) {
    var image = message.image.url ? `<img src='${message.image.url}'> ` : ''
    var html = `<div class = "message" data-id=${message.id}>
                  <div class = "upper-message">
                    <div class = "upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class = "upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <p class = "lower-message__content">
                    ${message.content}
                    ${image}
                  </p>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $(".chat-main__body").append(html);
        $(".chat-main__body").animate({scrollTop:$('.chat_main-body')});
        $(".chat-main__footer-body-message").val('');
        $(".chat-main__footer-form").removeAttr("disabled");
      })
      .fail(function(){
        alert('error');
      })
    })

  var auto_reload = setInterval( function() {
    var url = $(location).attr('pathname');
    var message_id = $('.message').last().data('id');
    $.ajax({
      url: url,
      type: 'GET',
      data: {id: message_id},
      dataType:'json'
    })
      .done(function(data){
        data.forEach(function(message){
          var html = buildHTML(message);
          $(".chat-main__body").append(html);
          $(".chat-main__body").animate({scrollTop:$('.chat_main-body')});
        })
      })
      .fail(function(){
        alert('自動更新に失敗しました');
      });
  }, 5000 );
});

