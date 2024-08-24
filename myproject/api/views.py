from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

# Endpoint to list all recipes and create a new one
class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# Endpoint to retrieve, update, or delete a recipe by ID
class RecipeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
