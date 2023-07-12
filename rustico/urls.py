"""
URL configuration for rustico project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from .views import RusticoView, TemplateView, ProyectosView, NosotrosView, ContactoView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RusticoView.as_view(), name = 'landing page'),
    path('index.html', RusticoView.as_view(), name = 'landing page'),
    path('proyectos.html', ProyectosView.as_view(), name = 'proyectos page'),
    path('contacto.html', ContactoView.as_view(), name = 'contacto page'),
    path('nosotros/nosotros.html', NosotrosView.as_view(), name = 'nosotros page')
]
