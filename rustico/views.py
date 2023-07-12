from django.views.generic import TemplateView

import json
from django.shortcuts import render

class RusticoView (TemplateView):
    template_name = "index.html"
    
class ProyectosView (TemplateView):
    template_name = "proyectos.html"

class NosotrosView (TemplateView):
    template_name = "nosotros/nosotros.html"

class ContactoView (TemplateView):
    template_name = "contacto.html"



def your_view(request):
    with open('../templates/nosotros/data.json') as json_file:
        data = json.load(json_file)

    return render(request, 'nosotros.html', {'usuarios': data})
