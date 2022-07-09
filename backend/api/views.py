from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
from rest_framework.views import APIView
from .serializers import SupplySerializer

from supplycode.models import Supply

@api_view()
def SupplyListView(request):
    supplies = Supply.objects.all()
    serialized = SupplySerializer(supplies, many=True)
    return Response(serialized.data)

class SupplyView(APIView):
    def get(self, request, pk=None, *args, **kwargs):
        print(pk)
        try:
            supply = Supply.objects.get(pk=pk)
        except:
            return JsonResponse({'status':'Not Found','message':"The item you are looking for does not exists"}, status=404)

        serialized = SupplySerializer(supply, many=False)
        return Response(serialized.data)

    def post(self, request, pk=None, *args, **kwargs):
        print(request.data)
        try:
            supply = Supply.objects.get(pk=pk)
        except:
            return JsonResponse({'status':'Not Found','message':"The item you are looking for does not exists"}, status=404)

        serialized = SupplySerializer(data=request.data, instance=supply)

        if serialized.is_valid():
            serialized.save()
            return JsonResponse({'status': 'Updated', 'message': "Your record has been updated"}, status=200)
        return JsonResponse({'status': 'Not Valid','message':"data you sent is not valid"}, status=400)


