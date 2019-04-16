import logging

from rest_framework import status, generics

from rest_framework.response import Response

from apps.core.api.serializers import UserSerializer
from apps.core.models import User
from apps.core.api.v1.utils import get_tokens_for_user

logger = logging.getLogger(__name__)


class UserRegistrationView(generics.CreateAPIView):
    """
    A ViewSet for creating, listing, retrieving or updating notes.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = ()
    permission_classes = ()

    def post(self, request, *args, **kwargs):
        """
        :param request:
        :param args:
        :param kwargs:
        :return:
        """
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            return Response(get_tokens_for_user(user), status=status.HTTP_201_CREATED)
