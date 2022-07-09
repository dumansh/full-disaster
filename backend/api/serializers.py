from rest_framework import serializers
from supplycode.models import Supply


# class SupplySerializer(serializers.Serializer):
#     field_name = serializers.ListField()
#     # type = serializers.CharField(max_length=256)
#     # path = serializers.CharField(max_length=256)


class SupplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Supply
        fields = "__all__"
        read_only_field = ['id', ]