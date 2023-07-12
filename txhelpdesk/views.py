from django.shortcuts import render
from rest_framework import generics, viewsets
from txhelpdesk.models import Notification
from rest_framework.permissions import IsAuthenticated
from txhelpdesk.serializers import NotificationSerializer 
from django.contrib.auth.decorators import login_required


@login_required()
def index(request):
    return render(request, 'registration/login.html')

def index(request):
    return render(request, 'txhelpdesk/base.html')

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    
    def get_queryset(self):
        user = self.request.user
        return Notification.objects.filter(user=user)
    
