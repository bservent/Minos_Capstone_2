
from . import views
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, PlaidLinkViewSet, IdentityViewSet

app_name = 'main_app'
router = DefaultRouter()
router.register(r'transactions', TransactionsViewSet, basename='transactions')
router.register(r'plain-link', PlaidLinkViewSet, basename='plaid-link')
router.register(r'identity', IdentityViewSet, basename='plaid-identity')
urlpatterns = router.urls
