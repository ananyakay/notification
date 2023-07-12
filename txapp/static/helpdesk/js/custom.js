function toggleNotificationCharms() {
    $('#notification-charms').data('charms').toggle();
    var notificationsDiv = document.getElementById('notifications');

    $(document).ready(function() {
        $.ajax({
            url: "/txhelpdesk/notification/",
            dataType: 'json',
            beforeSend: function() {

            },
            success: function(res) {
                console.log(res);
                var _html = '';
                var markAsReadHTML = '<span class="text-right" style="color: blue;">Mark as Read <span class="mif-done_all mif-lg fg-cyan"></span></span><br>'; // Added a line space here
                $.each(res, function(index, d) {
                    var createdAt = new Date(d.created_at);
                    var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
                    var formattedDate = createdAt.toLocaleString('en-US', options);

                    _html += '<li class="list-group-item bg-light">';
                    _html += '<div class="d-flex align-items-center">';
                    _html += '<span class="mif-user mif-5x"></span>';
                    _html += '<div style="height: 75px;">'; 
                    _html += '<span class="text-medium" style="font-size: 20px;">' + d.message + '</span>';
                    _html += '<br>';
                    _html += '<span class="text-light">' + formattedDate + '</span>';
                    _html += '&nbsp;&nbsp;&nbsp;<button onclick="changeButtonText(this)">Mark read</button>'; // Updated button with three spaces before it
                    _html += '</div>';
                    _html += '</div>';
                    _html += '</li>';

                    if (index !== res.length - 1) {
                        _html += '<hr class="list-divider">';
                    }
                });
                $(".notif-list").html(markAsReadHTML + _html);
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);  // Log any error messages
            }
        });
    });
}

function changeButtonText(button) {
    button.innerText = 'Read';
}
