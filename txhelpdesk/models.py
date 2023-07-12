from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _, ugettext

User = get_user_model()

class Notification(models.Model):
    """
    Notications for users
    """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
        verbose_name=_("User"),
    )
    message = models.TextField()
    url = models.URLField(null=True, blank=True)

    read = models.BooleanField(
        default=False,
        editable=False,
        help_text=_("Is notification is Read/Unread"),
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("user",)
        verbose_name = _("Notification")
        verbose_name_plural = _("Notifications")

    def __str__(self):
        return str(self.id)