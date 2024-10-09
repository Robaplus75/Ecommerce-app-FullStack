from rest_framework import permissions

class Is_object_owner(permissions.IsAuthenticated):
	def has_object_permission(self, request, view, obj):
		print(f"Request: email-{request.user.email}, Object: email-{obj.email}")
		return (obj.email == request.user.email)