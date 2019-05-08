from django.contrib import auth
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from register.models import Profile


@csrf_exempt
def register(request):
    if request.method == 'POST':
        user = User.objects.filter(username=request.POST['username']).first()
        if user is not None:
            return HttpResponse('This username is already taken', status=500)

        try:
            validate_email(request.POST['email'])
        except ValidationError:
            return HttpResponse('Email not valid', status=500)

        if len(request.POST['password']) < 8:
            return HttpResponse('Password must be at least 8 characters long', status=500)

        if request.POST['password'] != request.POST['password_confirm']:
            return HttpResponse('Passwords are different', status=500)

        user = User.objects.create_user(
            username=request.POST['username'],
            email=request.POST['email'],
            password=request.POST['password']
        )
        Profile.objects.create(user=user)

        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        auth.login(request, user)

        return HttpResponse('Account created', status=201)
    else:
        return render(request, 'showcase/index.html')
