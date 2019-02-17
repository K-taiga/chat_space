$(function() {
  function buildHTML(message) {
    var html = `<div class= upper-message>
                  <div class=upper-message__user-name>
                    ${message.user_name}
                  </div>
                  <div class=upper-message__date>
                    ${message.date}
                  </div>
                  <div class=lower-meesage>
                    <p class= lower-message__content>
                    ${message.content}
                    </p>
                    ${ message.image }
                  </div>
                </div>`
    return html;
  }

  $(`.chat-main__footer-form`).on(`submit`,function(e){
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
      $('.chat-main__body').append(html);
      $('.chat-main__body').animate({scrollTop:$('.chat-main__body')});
      $('.chat-main__footer-body-message').val('');
    })
    .fail(function(){
      alert('error');
    })
  })

